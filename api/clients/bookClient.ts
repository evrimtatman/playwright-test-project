import { APIRequestContext } from '@playwright/test';

export class BookClient {
  constructor(private request: APIRequestContext) {}

  async getAllBooks() {
    return await this.request.get('/api/v1/Books');
  }

  async getBookById(id: number) {
    return await this.request.get(`/api/v1/Books/${id}`);
  }

  async createBook(book: object) {
    return await this.request.post('/api/v1/Books', {
      data: book,
    });
  }

  async updateBook(id: number, book: object) {
    return await this.request.put(`/api/v1/Books/${id}`, {
      data: book,
    });
  }

  async deleteBook(id: number) {
    return await this.request.delete(`/api/v1/Books/${id}`);
  }
}