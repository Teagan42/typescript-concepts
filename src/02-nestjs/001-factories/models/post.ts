import { User } from "./user";

export class Post {
  id: string;
  category: string;
  user: User;
  title: string;
  content: string;
}
