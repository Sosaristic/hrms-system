import styles from "./Loaders.module.css";

export function SpinningLoader() {
  return (
    <div className="flex">
      <span className={styles.loader}></span>
    </div>
  );
}

export function Loader() {
  return (
    <div className="flex">
      <span className={styles.loader2}></span>
    </div>
  );
}
