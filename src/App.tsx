import { useState } from "react";
import styles from "./App.module.css";
import { DocumentCard } from "./components/DocumentCard";
import { mockDocuments } from "./data/mockDocuments";
import type { DocumentItem, FolderItem } from "./types/documents";
import { isFolder } from "./types/documents";

type Crumb = {
  label: string;
  items: DocumentItem[];
};

export default function App() {
  const [path, setPath] = useState<Crumb[]>([
    { label: "Home", items: mockDocuments },
  ]);

  const current = path[path.length - 1];
  const items = current.items;

  function openFolder(folder: FolderItem) {
    setPath((prev) => [...prev, { label: folder.name, items: folder.files }]);
  }

  function goToCrumb(index: number) {
    setPath((prev) => prev.slice(0, index + 1));
  }

  return (
    <main className={styles.app}>
      <header className={styles.app__header}>
        <h1 className={styles.app__title}>Documents & Files</h1>
      </header>

      <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
        {path.map((crumb, index) => {
          const isLast = index === path.length - 1;

          return (
            <span
              key={`${crumb.label}-${index}`}
              className={styles.breadcrumbs__item}
            >
              <button
                type="button"
                className={styles.breadcrumbs__link}
                onClick={() => goToCrumb(index)}
                disabled={isLast}
              >
                {crumb.label}
              </button>

              {!isLast && <span className={styles.breadcrumbs__sep}>/</span>}
            </span>
          );
        })}
      </nav>

      <div className={styles.controls}>
        <input
          className={styles.controls__search}
          placeholder="Search"
          aria-label="Search files"
        />
        <select className={styles.controls__sort} aria-label="Sort">
          <option value="">Sort by</option>
          <option value="name-asc">Name (A–Z)</option>
          <option value="date-desc">Date (Newest)</option>
          <option value="date-asc">Date (Oldest)</option>
        </select>
      </div>

      <section className={styles.grid} aria-label="Documents grid">
        {items.map((item) => {
          const key = isFolder(item)
            ? `folder-${item.name}`
            : `file-${item.name}-${item.added}`;

          return (
            <DocumentCard key={key} item={item} onOpenFolder={openFolder} />
          );
        })}
      </section>
    </main>
  );
}
