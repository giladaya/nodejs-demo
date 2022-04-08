/**
 * Implementation for a mock document database
 */

// Data storage
let database = {
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
};

// Read one item by ID
function getOne(collection, id) {
  if (Array.isArray(database[collection])) {
    return database[collection].find((item) => item.id === id);
  }
  return null;
}

// Read a list of items with pagination
function getList(collection, skip = 0, limit = 50) {
  if (Array.isArray(database[collection])) {
    return database[collection].slice(skip, skip + limit);
  }
  return [];
}

// Create one item from data
function createOne(collection, data) {
  if (!collection in database) {
    database[collection] = [];
  }
  // This ID is not necessarily unique, but enough for a demo
  const id = Date.now();
  const newItem = { ...data, id };
  database[collection].push(newItem);
  return newItem;
}

// Update one item
function updateOne(collection, id, data) {
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
function deleteOne(collection, id) {
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
