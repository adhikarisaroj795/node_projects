const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM student";
  db.query(sql, (err, data) => {
    if (err) return res.json("error");
    return res.json(data);
  });
});

app.post("/create", (req, res) => {
  const sql = "INSERT INTO student (Name, Email) VALUES (?, ?)";
  const values = [req.body.name, req.body.email];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Error creating student" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Student created successfully" });
  });
});
app.put("/update/:id", (req, res) => {
  const sql = "update  student set Name = ?, Email = ? where ID = ? ";
  const values = [req.body.name, req.body.email];
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Error creating student" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Student created successfully" });
  });
});
app.delete("/student/:id", (req, res) => {
  const sql = "DELETE FROM student WHERE ID = ? ";
  const id = req.params.id;

  db.query(sql, [id], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Error deleting student" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Student delete successfully" });
  });
});

const PORT = 3921;
app.listen(PORT, () => {
  console.log(`server is running on on ${PORT}`);
});
