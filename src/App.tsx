import styles from "./App.module.css";
import { DocumentCard } from "./components/DocumentCard";
import { mockDocuments } from "./data/mockDocuments";
import { isFolder } from "./types/documents";

export default function App() {
  return (
    <main className={styles.app}>
      <header className={styles.app__header}>
        <h1 className={styles.app__title}>Documents & Files</h1>
      </header>

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
        {mockDocuments.map((item) => {
          const key = isFolder(item)
            ? `folder-${item.name}`
            : `file-${item.name}`;
          return <DocumentCard key={key} item={item} />;
        })}
      </section>
    </main>
  );
}
