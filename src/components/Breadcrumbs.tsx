import styles from "./Breadcrumbs.module.css";

export type Breadcrumb = { label: string };

type Props = {
  crumbs: Breadcrumb[];
  onSelect: (index: number) => void;
};

export function Breadcrumbs({ crumbs, onSelect }: Props) {
  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;

        return (
          <span
            key={`${crumb.label}-${index}`}
            className={styles.breadcrumbs__item}
          >
            <button
              type="button"
              className={styles.breadcrumbs__link}
              onClick={() => onSelect(index)}
              disabled={isLast}
            >
              {crumb.label}
            </button>

            {!isLast && <span className={styles.breadcrumbs__sep}>/</span>}
          </span>
        );
      })}
    </nav>
  );
}
