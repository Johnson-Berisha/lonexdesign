import styles from "./componentsLibrary.module.css";

export default function componentsLibrary() {
    return (
        <main>
            <div className={styles.container}>
                <aside className={styles.sidebar}>
                    <span className={styles.subtitle}>COMPONENTS</span>
                    <ul className={styles.componentList}>
                        <li className={styles.componentItem}>Buttons</li>
                        <li className={styles.componentItem}>Cards</li>
                        <li className={styles.componentItem}>Modals</li>
                        <li className={styles.componentItem}>Forms</li>
                        <li className={styles.componentItem}>Typography</li>
                    </ul>
                </aside>
                <main className={styles.mainContent}>
                    <h1>content</h1>
                </main>
            </div>
        </main>
    );
}