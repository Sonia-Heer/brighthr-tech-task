export type FileType = "pdf" | "doc" | "csv" | "mov";

export type IsoDateString = string;

export type FileItem = {
  kind: "file";
  type: FileType;
  name: string;
  added: IsoDateString;
};

export type FolderItem = {
  kind: "folder";
  name: string;
  files: DocumentItem[];
};

export type DocumentItem = FileItem | FolderItem;

export function isFolder(item: DocumentItem): item is FolderItem {
  return item.kind === "folder";
}

export function isFile(item: DocumentItem): item is FileItem {
  return item.kind === "file";
}
