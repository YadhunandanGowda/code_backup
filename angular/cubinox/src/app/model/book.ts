import { User } from 'src/app/model/User';
import { Author } from './author';

export class Book {
    constructor(
        public bookId: number,
        public isbn: string,
        public bookTitle: string,
        public author: Author[],
        public description: string,
        public user: User
    ) {}
}
