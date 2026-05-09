const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 4000;

const JWT_SECRET = "superhemmelig"; // bytt senere

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);



// ✅ "Database" (enkelt i starten)
const users = [
  {
    username: "fossum",
    passwordHash: bcrypt.hashSync("123456", 10),
    member: "Fossumkollektivet",
  },
  {
    username: "finnmark",
    passwordHash: bcrypt.hashSync("123456", 10),
    member: "Finnmarkskollektivet",
  },
];



// ✅ LOGIN
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);
  if (!user) return res.status(401).json({ error: "Feil brukernavn" });

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return res.status(401).json({ error: "Feil passord" });

  const token = jwt.sign(
    { username: user.username, member: user.member },
    JWT_SECRET,
    { expiresIn: "2h" }
  );

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
  });

  res.json({ success: true });
});



// ✅ HENT BRUKER
app.get("/api/me", (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.sendStatus(401);

  try {
    const data = jwt.verify(token, JWT_SECRET);
    res.json(data);
  } catch {
    res.sendStatus(401);
  }
});



// ✅ LOGOUT
app.post("/api/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ success: true });
});



app.listen(PORT, () => {
  console.log(`Server kjører på http://localhost:${PORT}`);
});