# Playwright API Automation Testing Assessment – Online Bookstore

This project is an API automation testing framework built with Playwright and TypeScript for the FakeRestAPI Online Bookstore service.

It covers the main `Books` endpoints with both happy path and edge case scenarios, and includes Docker support and GitHub Actions integration for continuous testing.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Docker
- GitHub Actions

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── ci.yml
├── api/
│   └── clients/
│       └── bookClient.ts
├── tests/
│   └── books.spec.ts
├── utils/
│   └── dataFactory.ts
├── .dockerignore
├── Dockerfile
├── package.json
├── playwright.config.js
└── README.md
