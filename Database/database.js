import * as SQLite from 'expo-sqlite';

// Open or create database file (sync is fine here)
const db = SQLite.openDatabaseSync('pos_app.db');

// Create table if it does not exist
export const initDB = () => {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      price REAL NOT NULL,
      units INTEGER NOT NULL,
      image TEXT
    );
  `);

    // test query
  const rows = db.getAllSync("SELECT name FROM sqlite_master WHERE type='table';");
  console.log("Tables in DB:", rows);

};

// Insert a new item
export const insertItem = async ({ name, description, price, units, image }) => {
  try {
    await db.runAsync(
      `INSERT INTO items (name, description, price, units, image) VALUES (?, ?, ?, ?, ?)`,
      [name, description, price, units, image]
    );
    console.log('Item inserted successfully ✅');
  } catch (error) {
    console.log('Error inserting item:', error);
  }
};

export const getAllItems = async () => {
  try {
    const rows = await db.getAllAsync('SELECT * FROM items;');
    return rows; // array of items from SQLite
  } catch (error) {
    console.log('Error fetching items from DB:', error);
    return [];
  }
};


export default db;
