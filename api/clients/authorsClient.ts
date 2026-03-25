import { APIRequestContext } from '@playwright/test';
import { Author } from '../models/authors';

export class AuthorsClient {
  constructor(private request: APIRequestContext) {}

  async getAllAuthors() {
    return await this.request.get('/api/v1/Authors');
  }

  async getAuthorsById(id: number) {
    return await this.request.get(`/api/v1/Authors/${id}`);
  }

  async getAuthorsByBookId(idBook: number) {
    return await this.request.get(`/api/v1/Authors/authors/books/${idBook}`);
  }

  async createAuthor(author: Author) {
    return await this.request.post('/api/v1/Authors', {
      data: author,
    });
  }

  async updateAuthor(id: number, author: Author) {
    return await this.request.put(`/api/v1/Authors/${id}`, {
      data: author,
    });
  }

  async deleteAuthor(id: number) {
    return await this.request.delete(`/api/v1/Authors/${id}`);
  }
}