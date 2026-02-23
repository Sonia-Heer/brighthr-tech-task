import { memo } from "react";
import type { DocumentItem, FolderItem } from "../types/documents";
import styles from "./DocumentCard.module.css";

import folderImg from "../assets/folder-placeholder.png";
import fileImg from "../assets/file-placeholder.png";

type Props = {
  item: DocumentItem;
  onOpenFolder: (folder: FolderItem) => void;
};

export const DocumentCard = memo(function DocumentCard({
  item,
  onOpenFolder,
}: Props) {
  const isFolder = item.kind === "folder";
  const previewSrc = isFolder ? folderImg : fileImg;

  function handleClick() {
    if (isFolder) onOpenFolder(item);
  }

  const ariaLabel = isFolder ? `Open folder ${item.name}` : `File ${item.name}`;

  return (
    <article className={styles.card}>
      <button
        className={styles.card__button}
        type="button"
        disabled={!isFolder}
        onClick={handleClick}
        aria-label={ariaLabel}
      >
        <div className={styles.card__preview} aria-hidden="true">
          <img className={styles.card__previewImg} src={previewSrc} alt="" />
        </div>

        <div className={styles.card__body}>
          <p className={styles.card__title}>{item.name}</p>

          <div className={styles.card__meta}>
            {isFolder ? (
              <>
                <span>
                  {item.files.length}{" "}
                  {item.files.length === 1 ? "item" : "items"}
                </span>
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
              {isFolder ? "Folder" : item.type.toUpperCase()}
            </span>
          </div>
        </div>
      </button>
    </article>
  );
});
