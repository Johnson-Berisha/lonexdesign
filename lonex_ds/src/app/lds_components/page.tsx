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
                    <span className={styles.subtitle}>MODULES</span>
                    <ul className={styles.componentList}>
                        <li className={styles.componentItem}>Buttons</li>
                        <li className={styles.componentItem}>Cards</li>
                        <li className={styles.componentItem}>Modals</li>
                    </ul>
                </aside>
                <main className={styles.mainContent}>
                    <section className={styles.componentHeader}>
                        <h1>Button</h1>
                        <p>It's a button, what else can I say?</p>
                    </section>
                    <section className={styles.previewStage}>
                        <div className="canvas">
                            <button className="btn">Button</button>
                        </div>
                    </section>
                    <section className={styles.codePreview}>
                        <div className={styles.codeBlock}>
                            <code>&lt;button class="lds-btn"&gt;Button&lt;/button&gt;</code>
                        </div>
                    </section>
                </main>
            </div>
        </main>
    );
}