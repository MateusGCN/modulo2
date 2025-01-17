const express = require("express")
const bodyParser = require("body-parser")
// import { openDb, createDatabase } from "./configDB.js";
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");


async function openDb() {
  return open({
    filename: "./data/database.db",
    driver: sqlite3.Database,
  });
}

async function createDatabase() {
  openDb().then((db) => {
    db.exec(
      `CREATE TABLE IF NOT EXISTS Dados( 
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        age TEXT,
        modulo TEXT,
        modulodate DATE
      )`
    );
  })
}

const app = express();

app.use(express.static("../"));
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 5555;

createDatabase();
openDb();

async function getdata() {
  return openDb().then(async (db) => {
    const res = await db.all("SELECT * FROM Dados")
    return res
  })
}
async function insertdata(iten) {
  return openDb().then((db) => {
    db.run("INSERT INTO Dados (name, age, modulo, modulodate) VALUES (?,?,?,?)", [
      iten.name, iten.age, iten.modulo, iten.modulodate
    ])
  })
}

async function deletedata() {
  return openDb().then((db) => {
    db.run("DELETE FROM Dados")
  })
}

async function updatedata(item) {
  return openDb().then((db) => {
    db.run("UPDATE Dados SET name=?, age=?, modulo=?, modulodate=? WHERE id=? ", [
      item.newName, item.newAge, item.newModulo, item.newDate, item.id
    ])
  })
}

app.route("/api")
  .get(async (req, res) => {
    let data = await getdata();
    res.send(data)
  })

  .post(async (req, res) => {
    let data = await insertdata({
      name: "Mateus Neves", age: "18 anos", modulo: "modulo 2", modulodate: Date.now()
    });
    res.send(data)
  })

  .put(async (req, res) => {
    let data = await updatedata(req.body)
    res.send(data)
  })

  .delete(async (req, res) => {
    let data = await deletedata();
    res.send(data)
  })


//Inica o servidor
app.listen(PORT, () =>
  console.log(`Server running on port http://127.0.0.1:${PORT}`)
);
