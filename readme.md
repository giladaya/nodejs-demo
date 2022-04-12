# NodeJS Demo

This repo demonstrates a simple but modular API based on NodeJS and ExpressJS.  
It uses a simple in-memory mock database.

## Example calls
```
# Get list
curl http://localhost:3000/api/users/

# Get single item
curl http://localhost:3000/api/users/2

# Create new item
curl -X POST http://localhost:3000/api/users/ \
   -H 'Content-Type: application/json' \
   -d '{"data": {"name":"Donald","email":"donald@duck.com"}}'

# Update existing item
curl -X PUT http://localhost:3000/api/users/2 \
   -H 'Content-Type: application/json' \
   -d '{"data": {"name":"Donald","email":"donald@duck.com"}}'

# Delete item
curl -X DELETE http://localhost:3000/api/users/2

```

## Exercises
1. Enable paging on the users list route  
2. Add an "albums" module that support all CRUD operations similar to "users"  
3. Add global error handler  
4. Add middleware to measure how long it took to process each request  