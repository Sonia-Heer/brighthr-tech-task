import type { DocumentItem } from "../types/documents";
import type { SortOption } from "../components/SortSelect";

export function sortDocuments(
  items: readonly DocumentItem[],
  sort: SortOption,
): DocumentItem[] {
  const sorted = [...items];

  switch (sort) {
    case "name-asc":
      sorted.sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { sensitivity: "base" }),
      );
      return sorted;

    case "date-desc": {
      const folders = sorted.filter((item) => item.kind === "folder");
      const files = sorted
        .filter((item) => item.kind === "file")
        .sort((a, b) => b.added.localeCompare(a.added));
      return [...folders, ...files];
    }

    case "date-asc": {
      const folders = sorted.filter((item) => item.kind === "folder");
      const files = sorted
        .filter((item) => item.kind === "file")
        .sort((a, b) => a.added.localeCompare(b.added));
      return [...folders, ...files];
    }

    case "":
    default:
      return sorted;
  }
}
