## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## commands used in project

```sh
nest generate mo book
nest generate r book
```

## graphQL playground queries

```sh
# Write your query or mutation here
{
  books {
    id,
    price,
    title
  }
}

mutation AddBook($bookArgs: AddBookArgs!){
  addBook(addBookArgs: $bookArgs)
}

{
  findBookById(bookId: 1){
    id,
    price,
    title
  }
}

mutation DeleteBook($bookId: Int!) {
  deleteBook(bookId: $bookId)
}


mutation updateBook($bookId: Int!, $bookArgs: AddBookArgs!){
  updateBook(bookId: $bookId, updateBookArgs: $bookArgs)
}
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
