"use client";

import styles from "./componentsLibrary.module.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function componentsLibrary() {
    const [activeVariant, setActiveVariant] = useState("Primary");
    const options = ['Primary', 'Secondary', 'Ghost'];

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
                        <div className={styles.breadcrumb}>
                            <span className={styles.breadcrumbItem}>Components</span>
                            <span className={styles.breadcrumbItem}>Buttons</span>
                        </div>
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
                <aside className={[styles.sidebar, styles.controls].join(" ")}>
                    <h3>Properties</h3>
                    <div className={styles.propertyGroup}>
                        <label className={styles.propertyLabel}>Variant</label>
                        <div className={styles.segmentedControl}>
                            {options.map((opt) => (
                                <button
                                    key={opt}
                                    onClick={() => setActiveVariant(opt)}
                                    className={`${styles.segmentBtn} ${activeVariant === opt ? styles.activeText : ''}`}
                                >
                                    {activeVariant === opt && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className={styles.activeBackground}
                                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className={styles.btnLabel}>{opt}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={styles.propertyGroupInline}>
                        <label className={styles.propertyLabel}>Disabled</label>
                        <label className={styles.switch}>
                            <input type="checkbox" />
                            <span className={styles.slider}></span>
                        </label>
                    </div>
                </aside>
            </div>
        </main>
    );
}