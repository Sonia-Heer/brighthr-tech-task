import type { DocumentItem } from "../types/documents";

export const mockDocuments: DocumentItem[] = [
  {
    kind: "file",
    type: "pdf",
    name: "Employee Handbook",
    added: "2017-01-06",
  },
  {
    kind: "file",
    type: "pdf",
    name: "Public Holiday policy",
    added: "2016-12-06",
  },
  {
    kind: "folder",
    name: "Expenses",
    files: [
      {
        kind: "file",
        type: "doc",
        name: "Expenses claim form",
        added: "2017-05-02",
      },
      {
        kind: "file",
        type: "doc",
        name: "Fuel allowances",
        added: "2017-05-03",
      },
    ],
  },
  {
    kind: "file",
    type: "csv",
    name: "Cost centres",
    added: "2016-08-12",
  },
  {
    kind: "folder",
    name: "Misc",
    files: [
      {
        kind: "file",
        type: "doc",
        name: "Christmas party",
        added: "2017-12-02",
      },
      {
        kind: "file",
        type: "mov",
        name: "Welcome to the company!",
        added: "2015-04-24",
      },
    ],
  },
];
