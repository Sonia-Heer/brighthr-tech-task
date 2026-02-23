import { useCallback, useMemo, useState } from "react";
import styles from "./App.module.css";
import { DocumentCard } from "./components/DocumentCard";
import { mockDocuments } from "./data/mockDocuments";
import type { DocumentItem, FolderItem } from "./types/documents";
import { Breadcrumbs } from "./components/Breadcrumbs";
import { SortSelect, type SortOption } from "./components/SortSelect";
import { sortDocuments } from "./utils/sortDocuments";

type Crumb = {
  label: string;
  items: DocumentItem[];
};

export default function App() {
  const [breadcrumbs, setBreadcrumbs] = useState<Crumb[]>([
    { label: "Home", items: mockDocuments },
  ]);

  const [sort, setSort] = useState<SortOption>("");

  const currentItems = breadcrumbs[breadcrumbs.length - 1].items;

  const visibleItems = useMemo(
    () => sortDocuments(currentItems, sort),
    [currentItems, sort],
  );

  const openFolder = useCallback((folder: FolderItem) => {
    setBreadcrumbs((prev) => [
      ...prev,
      { label: folder.name, items: folder.files },
    ]);
  }, []);

  const goToCrumb = useCallback((index: number) => {
    setBreadcrumbs((prev) => prev.slice(0, index + 1));
  }, []);

  const pathKey = breadcrumbs.map((b) => b.label).join("/");

  return (
    <main className={styles.app}>
      <header className={styles.app__header}>
        <h1 className={styles.app__title}>Documents & Files</h1>
      </header>

      <Breadcrumbs
        crumbs={breadcrumbs.map((b) => ({ label: b.label }))}
        onSelect={goToCrumb}
      />

      <div className={styles.controls}>
        <SortSelect value={sort} onChange={setSort} />
      </div>

      <section className={styles.grid} aria-label="Documents grid">
        {visibleItems.map((item) => {
          const key =
            item.kind === "folder"
              ? `folder-${pathKey}-${item.name}`
              : `file-${pathKey}-${item.name}-${item.added}`;

          return (
            <DocumentCard key={key} item={item} onOpenFolder={openFolder} />
          );
        })}
      </section>
    </main>
  );
}
