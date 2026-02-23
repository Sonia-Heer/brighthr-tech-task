import {
  isFolder,
  type DocumentItem,
  type FolderItem,
} from "../types/documents";
import styles from "./DocumentCard.module.css";

import folderImg from "../assets/folder-placeholder.png";
import fileImg from "../assets/file-placeholder.png";

type Props = {
  item: DocumentItem;
  onOpenFolder?: (folder: FolderItem) => void;
};

export function DocumentCard({ item, onOpenFolder }: Props) {
  const folder = isFolder(item);
  const previewSrc = folder ? folderImg : fileImg;

  function handleClick() {
    if (!folder) return;
    onOpenFolder?.(item);
  }

  return (
    <article className={styles.card}>
      <button
        className={styles.card__button}
        type="button"
        aria-disabled={!folder}
        tabIndex={folder ? 0 : -1}
        onClick={handleClick}
        aria-label={folder ? `Open folder ${item.name}` : `File ${item.name}`}
      >
        <div className={styles.card__preview} aria-hidden="true">
          <img className={styles.card__previewImg} src={previewSrc} alt="" />
        </div>

        <div className={styles.card__body}>
          <p className={styles.card__title}>{item.name}</p>

          <div className={styles.card__meta}>
            {folder ? (
              <>
                <span>{item.files.length} item(s)</span>
                <span className={styles.textHint}>Click to open</span>
              </>
            ) : (
              <>
                <span>Date added</span>
                <span>{item.added}</span>
              </>
            )}
          </div>

          <div className={styles.card__actions}>
            <span className={styles.typeBadge}>
              {folder ? "Folder" : item.type}
            </span>
          </div>
        </div>
      </button>
    </article>
  );
}
