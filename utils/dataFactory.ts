import { Book } from '../api/models/book';
import { Author } from '../api/models/authors';

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

export function createAuthor(overrides?: Partial<Author>): Author {
  return {
    id: Math.floor(Math.random() * 100000),
    idBook: Math.floor(Math.random() * 100000),
    firstName: 'John',
    lastName: 'Doe',
    ...overrides,
  };
}