const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use((req, res, next) => {
  console.log("INN request:", req.method, req.url);
  next();
});

const PORT = 4000;

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// ✅ TEST-ENKEL LOGIN (ingen bcrypt nå)
app.post("/api/login", (req, res) => {
    console.log("🚨 LOGIN ENDPOINT TREFFET");
  console.log("LOGIN request ✅");

  const { username, password } = req.body;

  if (username !== "fossum") {
    return res.status(401).json({ error: "Feil brukernavn" });
  }

  if (password !== "123456") {
    return res.status(401).json({ error: "Feil passord" });
  }

  res.json({ success: true });
});

// ✅ TEST ENDPOINT
app.get("/", (req, res) => {
  res.send("Backend OK ✅");
});

app.listen(PORT, () => {
  console.log(`Server kjører på http://localhost:${PORT}`);
});