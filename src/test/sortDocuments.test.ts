import { describe, expect, it } from "vitest";
import { sortDocuments } from "../utils/sortDocuments";
import type { DocumentItem } from "../types/documents";

describe("sortDocuments", () => {
  const items: DocumentItem[] = [
    {
      kind: "file",
      type: "pdf",
      name: "Employee Handbook",
      added: "2017-01-06",
    },
    { kind: "folder", name: "Expenses", files: [] },
    { kind: "file", type: "csv", name: "Cost centres", added: "2016-08-12" },
  ];

  it("does not mutate the input array", () => {
    const original = [...items];
    sortDocuments(items, "name-asc");
    expect(items).toEqual(original);
  });

  it("sorts folders and files together by name", () => {
    const result = sortDocuments(items, "name-asc");
    expect(result.map((x) => x.name)).toEqual([
      "Cost centres",
      "Employee Handbook",
      "Expenses",
    ]);
  });

  it("sorts files by date descending and keeps folders grouped for date sort", () => {
    const result = sortDocuments(items, "date-desc");
    expect(result.map((x) => x.name)).toEqual([
      "Expenses",
      "Employee Handbook",
      "Cost centres",
    ]);
  });
});
