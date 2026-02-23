import { isFolder, type DocumentItem } from "../types/documents";
import styles from "./DocumentCard.module.css";
import folderImg from "../assets/folder-placeholder.png";
import fileImg from "../assets/file-placeholder.png";

type Props = {
  item: DocumentItem;
};

export function DocumentCard({ item }: Props) {
  const previewSrc = isFolder(item) ? folderImg : fileImg;

  return (
    <article className={styles.card}>
      <div
        className={styles.card__button}
        aria-label={
          isFolder(item) ? `Folder ${item.name}` : `File ${item.name}`
        }
      >
        <div className={styles.card__preview} aria-hidden="true">
          <img className={styles.card__previewImg} src={previewSrc} alt="" />
        </div>

        <div className={styles.card__body}>
          <p className={styles.card__title}>{item.name}</p>

          <div className={styles.card__meta}>
            {isFolder(item) ? (
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
              {isFolder(item) ? "Folder" : item.type}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
