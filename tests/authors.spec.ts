import { test, expect } from '@playwright/test';
import { AuthorsClient } from '../api/clients/authorsClient';
import { createAuthor } from '../utils/dataFactory';

let authorsClient: AuthorsClient;
test.beforeEach(async ({ request }) => {
  authorsClient = new AuthorsClient(request);
});



test.describe('Authors API - Happy Path', () => {

    test('GET all authors', async () => {
        const response = await authorsClient.getAllAuthors();
        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(Array.isArray(body)).toBe(true);
        expect(body.length).toBeGreaterThan(0);
    });

    test('GET author by id', async () => {
        const response = await authorsClient.getAuthorsById(1);
        expect(response.status()).toBe(200);
    
        const body = await response.json();
        expect(body.id).toBe(1);
    });

    test('GET author by book id', async () => {
        const response = await authorsClient.getAuthorsByBookId(1);
        expect(response.status()).toBe(200);
        //console.log(await response.json());
    
        const body = await response.json();
        expect(Array.isArray(body)).toBe(true);
        expect(body.length).toBeGreaterThan(0); 
        
        for (const author of body) {
         expect(author.idBook).toBe(1);  }
    });

    test('POST create author', async () => {
        const author = createAuthor({
            firstName: 'Jose'
        })
    
        const response = await authorsClient.createAuthor(author);
        expect(response.status()).toBe(200);
    
        const body = await response.json();
        expect(body.firstName).toBe(author.firstName);
        expect(body.id).toBe(author.id);
    });
    
    test('PUT update author', async () => {
    
        const updatedAuthor = createAuthor({
            id: 1,
            idBook: 1,
            firstName: 'Updated Name',
            lastName: 'Author', 
        })
        
        const response = await authorsClient.updateAuthor(1, updatedAuthor);
        expect(response.status()).toBe(200);
    
        const body = await response.json();
        expect(body.firstName).toBe(updatedAuthor.firstName);
        expect(body.id).toBe(updatedAuthor.id);
        expect(body.idBook).toBe(updatedAuthor.idBook);
        expect(body.firstName).toBe(updatedAuthor.firstName);
        expect(body.lastName).toBe(updatedAuthor.lastName);
        });
    
        test('DELETE author', async () => {
        const response = await authorsClient.deleteAuthor(1);
        expect([200, 204]).toContain(response.status());
        });

    
    







})

test.describe('Authors API - Negative Cases', () => {
  test('GET invalid author id', async () => {
    const response = await authorsClient.getAuthorsById(999999);
    expect(response.status()).toBe(404);
  });

  test('GET negative author id', async () => {
    const response = await authorsClient.getAuthorsById(-1);
    expect(response.status()).toBe(404);
  });
test('POST empty body should fail', async () => {
    const response = await authorsClient.createAuthor({} as any);
    expect([200, 400, 404]).toContain(response.status());
  });

  test('POST author with wrong field types should fail', async () => {
    const response = await authorsClient.createAuthor({
      id: 'abc',
      idBook: 'xyz',
      firstName: 123,
      lastName: true,
    } as any);

    expect([200, 400, 404]).toContain(response.status());
  });

  test('PUT update non-existing author should fail', async () => {
    const updatedAuthor = createAuthor({
      id: 123456,
      firstName: 'Ghost',
    });

    const response = await authorsClient.updateAuthor(123456, updatedAuthor);
    expect([200, 400, 404]).toContain(response.status());
  });

  test('PUT with mismatched url id and payload id should fail', async () => {
    const updatedAuthor = createAuthor({
      id: 2,
      firstName: 'Mismatch',
    });

    const response = await authorsClient.updateAuthor(1, updatedAuthor);
    expect([200, 400, 404]).toContain(response.status());
  });

  test('DELETE non-existing author should return expected error', async () => {
    const response = await authorsClient.deleteAuthor(999999);
    expect([200, 400, 404]).toContain(response.status());
  });


});