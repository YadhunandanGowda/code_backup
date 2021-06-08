import { User } from 'src/app/model/User';
export class Author {
    constructor(
        public authorId: number,
        public firstName: string,
        public lastName: string,
        public gender: string,
        public email: string,
        public bio: string,
        public user: User
        ) {}
}
