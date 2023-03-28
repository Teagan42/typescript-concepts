import { FactoryProvider } from "@nestjs/common";
import { Post, User } from "../models";

export const POST_FACTORY_KEY = 'POST_FACTORY';

const categoryOptions = [
    'projects',
    'recipes',
    'news',
    'junk'
];

export const PostFactory: FactoryProvider = {
  provide: POST_FACTORY_KEY,
  useFactory: () => (title: string, content: string, user: User): Post => ({
    id: "postId",
    user,
    title,
    content,
    category: categoryOptions[Math.floor(Math.random() * categoryOptions.length)]
  })
};
