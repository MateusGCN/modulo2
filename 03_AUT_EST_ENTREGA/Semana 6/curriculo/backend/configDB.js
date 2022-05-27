import sqlite3 from "sqlite3";
import { open } from "sqlite";

export async function openDb() {
  return open({
    filename: "./data/database.db",
    driver: sqlite3.Database,
  });
}

export async function createDatabase() {
  openDb().then((db) => {
    db.exec(
      `CREATE TABLE IF NOT EXISTS Dados( 
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        age TEXT,
        modulo TEXT,
        modulodate DATE,
      )`
    );
})}