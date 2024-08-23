import { setupServer } from "msw/node";
import { expect } from "vitest";
import { beforeAll, afterEach, afterAll } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";
import handlers from "../mocks/handlers";

expect.extend(matchers);

// Mock server setup
const server = setupServer(...handlers);
beforeAll(() => {
  console.log("Starting server");
  server.listen();
});

afterEach(() => {
  console.log("Resetting handlers and cleaning up");
  server.resetHandlers();
  cleanup();
});

afterAll(() => {
  console.log("Closing server");
  server.close();
});
