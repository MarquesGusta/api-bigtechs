# DOCUMENTAÇÃO

## api-bigtechs

## Description

## Base URL
A base URL para todas as requisições da API é:
[base URL](link)

## Endpoints

### `/all`
Retorna...
### `/search`
retorna...

### Parameters

-
-
-

### Response

Pode retornar objetos JSON com as seguintes propriedades:

- `ID`: Id do objeto.
- `chavePrimaria`: nome de identificação do objeto para busca.
- `nome`: nome completo da bigtech.
- `endereço`: objeto que retorna país, estado, e cidade da bigtech.
    - `author`: The author of the book.
    - `description`: A brief description of the book.
    - `publication_date`: The publication date of the book.

 
### Example

Request:
GET /books?limit=5&offset=10
---imagem---

Response:
---imagem---

## Errors

This API uses the following error codes:

- `400 Bad Request`: The request was malformed or missing required parameters.
- `401 Unauthorized`: The API key provided was invalid or missing.
- `404 Not Found`: The requested resource was not found.
- `500 Internal Server Error`: An unexpected error occurred on the server.
