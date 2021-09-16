import { waitFor } from "@testing-library/react";
import CacheAdapter from "./CacheAdapter";

const localStorageMock = {
  clear: jest.fn(),
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  multiRemove: jest.fn(),
};

describe("CacheAdapter", () => {
  test("Insert item on storage", async () => {
    const adapter = new CacheAdapter(localStorageMock);

    await waitFor(() => adapter.setItem("Joinville", "Weather Now"));

    expect(localStorageMock.setItem).toHaveBeenCalled();
  });

  test("Get item from storage", async () => {
    const adapter = new CacheAdapter(localStorageMock);

    await waitFor(() => adapter.getItem("Joinville"));

    expect(localStorageMock.getItem).toHaveBeenCalled();
  });

  test("Remove item from storage", async () => {
    const adapter = new CacheAdapter(localStorageMock);

    await waitFor(() => adapter.removeItem("Joinville"));

    expect(localStorageMock.removeItem).toHaveBeenCalled();
  });
});
