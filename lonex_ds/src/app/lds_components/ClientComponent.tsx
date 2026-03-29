"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./componentsLibrary.module.css";

export default function ClientComponent() {
    const [activeVariant, setActiveVariant] = useState("Primary");
    const options = ['Primary', 'Secondary', 'Ghost'];

    return (
        <>
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
        </>
    );
}
