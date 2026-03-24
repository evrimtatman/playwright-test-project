import { Book } from '../api/models/book';

export function createBook(overrides?: Partial<Book>): Book {
  return {
    id: Math.floor(Math.random() * 100000),
    title: 'Test Book',
    description: 'Test Description',
    pageCount: 100,
    excerpt: 'Test Excerpt',
    publishDate: new Date().toISOString(),
    ...overrides,
  };
}