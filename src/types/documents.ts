export type FileType = "pdf" | "doc" | "csv" | "mov";

export type FileItem = {
  kind: "file";
  type: FileType;
  name: string;
  added: string;
};

export type FolderItem = {
  kind: "folder";
  name: string;
  files: DocumentItem[];
};

export type DocumentItem = FileItem | FolderItem;

export function isFolder(item: DocumentItem): item is FolderItem {
  return "files" in item;
}

export function isFile(item: DocumentItem): item is FileItem {
  return !("files" in item);
}
