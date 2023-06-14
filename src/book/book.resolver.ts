import { Query, Resolver } from '@nestjs/graphql';
import { Book } from './book.schema';
import { Book as BookModel } from '../graphql';

@Resolver((of) => Book)
export class BookResolver {

    @Query((returns) => [Book], { name: "books" })
    getAllBooks() {
        let bookModels: BookModel[] = [
            { id: 1, title: "Harry Potter 1", price: 100 },
            { id: 2, title: "Harry Potter 2", price: 200 },
            { id: 3, title: "Harry Potter 3", price: 300 },
            { id: 4, title: "Harry Potter 4", price: 400 },
            { id: 5, title: "Harry Potter 5", price: 500 },
        ];
        return bookModels;
    }
}
