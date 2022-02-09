# NodeJS Demo

This repo demonstrates a simple but modular API based on NodeJS and ExpressJS.  
It uses a simple in-memory mock database.

## Example calls
```
# Get list
curl http://localhost:3000/users/

# Get single item
curl http://localhost:3000/users/2

# Create new item
curl -X POST http://localhost:3000/users/ \
   -H 'Content-Type: application/json' \
   -d '{"data": {"name":"Donald","email":"donald@duck.com"}}'

# Update existing item
curl -X PUT http://localhost:3000/users/2 \
   -H 'Content-Type: application/json' \
   -d '{"data": {"name":"Donald","email":"donald@duck.com"}}'

# Delete item
curl -X DELETE http://localhost:3000/users/2

```