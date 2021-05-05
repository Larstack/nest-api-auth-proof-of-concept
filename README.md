## API Auth
JWT and IP filter

## Get token

```bash
$ curl -X POST http://localhost:3000/auth/login -d '{"username": "leo", "password": "1234"}' -H "Content-Type: application/json"
```
## Use token

```bash
$ curl http://localhost:3000/profile -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cC..."
```
