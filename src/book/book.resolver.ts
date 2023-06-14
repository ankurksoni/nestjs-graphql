import { Query, Resolver } from '@nestjs/graphql';

@Resolver("Book")
export class BookResolver {

    @Query("books")
    getAllBooks() {
        return [
            {
                id: 1,
                title: "Harry Potter 1",
                price: 500
            },
            {
                id: 2,
                title: "Harry Potter 2",
                price: 200
            },
            {
                id: 3,
                title: "Harry Potter 3",
                price: 450
            },
            {
                id: 4,
                title: "Harry Potter 4",
                price: 5000
            },
        ]
    }
}
