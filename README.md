# DOCUMENTAÇÃO

## api-bigtechs

## Description 
Esta é uma API informativa que tem o objetivo de trazer os dados das 6 BigTechs mais influentes da atualidade(microsoft, samsung, apple, sony, meta, google). Com ela você tem acesso a objetos JSON que retornam o nome da empresa, sua localidade, seus criadores, seu valor avaliado, foto e um breve resumo de sua história e funcionalidade.

## Base URL 
A base URL para todas as requisições da API é:
[base URL](https://dizzy-knickers-fawn.cyclic.app/all)

## Endpoints

### `/all`
Retorna todo o conteúdo da api.

### `/search/:chavePrimaria`
Retorna o vetor que possui aquela chave primária específica.

## Parameters

### - all
  Retorna todos os vetores.
### - search
  Retorna apenas o vetor do item consultado.

## Response

Pode retornar objetos JSON com as seguintes propriedades:

- `ID`: Id do objeto (valor devolvido mas não utilizado).
- `chavePrimaria`: nome de identificação do objeto para busca.
- `nome`: nome completo da bigtech.
- `endereço`: tupla que retorna país, estado, e cidade.
- `criadores`: nome dos criadores da empresa.
- `resumo`: uma breve descrição sobre a empresa.
- `valorAvaliada`: Valor avaliado da empresa em dólares.
- `img`: imagem da empresa em questão.

 
## Example

### Request:

#### GET /all


### Response:
---imagem---

## Errors

### Esta API usa os seguintes códigos de erro:

- `404 Not Found`: Erro na requisição.
- `500 Internal Server Error`: Erro no servidor.
