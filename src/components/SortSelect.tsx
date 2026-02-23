import styles from "./SortSelect.module.css";

export type SortOption = "" | "name-asc" | "date-desc" | "date-asc";

type Props = {
  value: SortOption;
  onChange: (value: SortOption) => void;
};

export function SortSelect({ value, onChange }: Props) {
  return (
    <select
      className={styles.controls__sort}
      aria-label="Sort"
      value={value}
      onChange={(e) => onChange(e.target.value as SortOption)}
    >
      <option value="">Sort by</option>
      <option value="name-asc">Name (A–Z)</option>
      <option value="date-desc">Date (Newest)</option>
      <option value="date-asc">Date (Oldest)</option>
    </select>
  );
}
