import { Injectable } from "@nestjs/common";
import { BookEntity } from "./entity/book.entity";


@Injectable()
export class BookService {
    public booksData: BookEntity[] = [];

    addBook(book: BookEntity): string {
        this.booksData.push(book);
        return 'Book Added Successfully';
    }

    updateBook(id: number, payload: BookEntity): string {
        for (let x = 0; x < this.booksData.length; x++) {
            if (this.booksData[x].id === id) {
                this.booksData[x] = payload;
            }
        }
        return 'Book updated successfully';
    }

    deleteBook(id: number) {
        this.booksData = this.booksData.filter(book => book.id !== id);
        return 'Book has been deleted';
    }

    findBookById(id: number): BookEntity {
        return this.booksData.find(book => book.id === id);
    }

    findAllBooks(): BookEntity[] {
        return this.booksData;
    }
}