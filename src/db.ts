export { };
/**
 * Implementation for a mock document database
 */

// Data storage
type HasId = { id: number };
type DbRecord = HasId & Record<string, unknown>;
type Database = Record<string, DbRecord[]>;

let database: Database = {
  users: [
    { id: 1, name: "Alice", email: "alice@gmail.com", avatar: "alice.png" },
    { id: 2, name: "Bob", email: "bob@gmail.com", avatar: "bob.jpg" },
    {
      id: 3,
      name: "Charlie",
      email: "charlie@gmail.com",
      avatar: "charlie.jpg",
    },
  ],
  albums: [],
};

type Collections = keyof typeof database;

// Read one item by ID
function getOne(collection: Collections, id: number) {
  if (Array.isArray(database[collection])) {
    return database[collection].find((item) => item.id === id);
  }
  return null;
}

// Read a list of items with pagination
function getList(collection: Collections, skip = 0, limit = 50) {
  if (Array.isArray(database[collection])) {
    return database[collection].slice(skip, skip + limit);
  }
  return [];
}

// Create one item from data
function createOne<T extends DbRecord>(collection: Collections, data: Omit<T, "id">) {
  // This ID is not necessarily unique, but enough for a demo
  const id = Date.now();
  const newItem = { ...data, id } as T;
  database[collection].push(newItem);
  return newItem;
}

// Update one item
function updateOne<T>(
  collection: Collections,
  id: number,
  data: Omit<T, "id">
) {
  if (Array.isArray(database[collection])) {
    const idx = database[collection].findIndex((item) => item.id === id);
    if (!idx) {
      return null;
    }
    const newItem = { ...database[collection][idx], ...data };
    database[collection][idx] = newItem;
    return newItem;
  }
  return null;
}

// Delete one item
function deleteOne(collection: Collections, id: number) {
  if (Array.isArray(database[collection])) {
    database[collection] = database[collection].filter(
      (item) => item.id !== id
    );
  }
  return true;
}

module.exports = {
  getOne,
  getList,
  createOne,
  updateOne,
  deleteOne,
};
