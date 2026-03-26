# Playwright API Automation Testing Assessment – Online Bookstore

This project is an API automation testing framework built with Playwright and TypeScript for the FakeRestAPI Online Bookstore service.

It covers the main `Books and Authors` endpoints with both happy path and edge case scenarios, and includes Docker support and GitHub Actions integration for continuous testing.

## Features
- API test automation using Playwright
- Modular client architecture
- Data factory pattern for test data
- Dockerized test execution
- CI/CD integration with GitHub Actions
  
## Tech Stack

- Playwright(API testing)
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
│       └── authorsClient.ts
├── tests/
│   └── books.spec.ts
│   └── authors.spec.ts
├── utils/
│   └── dataFactory.ts
├── .dockerignore
├── Dockerfile
├── package.json
├── playwright.config.js
└── README.md


## Covered Endpoints

### Books API
- `GET /api/v1/Books`
- `GET /api/v1/Books/{id}`
- `POST /api/v1/Books`
- `PUT /api/v1/Books/{id}`
- `DELETE /api/v1/Books/{id}`

### Authors API
- `GET /api/v1/Authors`
- `GET /api/v1/Authors/{id}`
- `GET /api/v1/Authors/authors/books/{id}`
- `POST /api/v1/Authors`
- `PUT /api/v1/Authors/{id}`
- `DELETE /api/v1/Authors/{id}`

Envirionment Setup
----------------------------------
Create a .env file in root directory:
BASE_URL=https://fakerestapi.azurewebsites.net

How to Run Tests
-----------------------------------
Install dependencies:
   npm install
Run tests:
   npx playwright test
Run a specific test:
   npx playwright test tests/authors.spec.ts

Run with Docker
------------------------------------
Build docker image:
  docker build -t bookstore-api-tests .

Run tests inside container:
  docker run bookstore-api-tests
  or
  docker run --rm -e BASE_URL=https://fakerestapi.azurewebsites.net bookstore-api-tests

CI/CD Pipeline
--------------------------------------
This project uses GitHub Actions for CI.
Pipeline configuration:
  .github/workflows/ci.yml
Pipeline features:
 - Runs tests on every push
 - Generates test report
 - Supports retry on failure

Test Report
-------------------------------------
After test execution, Playwright generates an HTML report.
To open report:
   npx playwright show-report
Example report includes:
 - Test results (pass/fail)
 - API request/response details
 - Execution logs

** Alure reporting will be added.


