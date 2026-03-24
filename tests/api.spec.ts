import { test, expect } from '@playwright/test';

test('check env', async () => {
  console.log('BASE_URL:', process.env.BASE_URL);
  expect(process.env.BASE_URL).toBeTruthy();
});