import { getByTestId, render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import SelectUniversity from "./SelectUniversity";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

vi.mock("./fetchUniversities", () => ({
  fetchUniversities: () => Promise.resolve([{ name: "University of Rome" }]),
}));

describe("SelectUniversity component", () => {
  test("should render SelectUniversity component", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <SelectUniversity
          disabled={true}
          label="Select university..."
          onObjectSelected={(item: string) => {
            console.log(`Selezionato elemento ${JSON.stringify(item)}`);
          }}
        />
      </QueryClientProvider>
    );

    const selectElement = getByTestId(
      document.documentElement,
      "selectUniversityTestId"
    );

    expect(selectElement).toBeVisible();
    expect(selectElement).toBeDisabled();
  });
});
