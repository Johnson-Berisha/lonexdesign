"use client";

import ClientComponent from "./ClientComponent";
import { PropOption } from "@/lib/parseProps";
import React from "react";
import styles from "./componentsLibrary.module.css";

interface ComponentData {
    name: string;
    slug: string;
    category: string;
    description: string;
    code: string;
    props: string;
}

interface previewProps {
    Component: React.ComponentType<any>;
    propOptions: PropOption[];
    componentData: ComponentData;
}

export default function ControlsWithPreview({ Component, propOptions, componentData }: previewProps) {
    const [selectedValues, setSelectedValues] = React.useState<Record<string, any>>({});
    const [toggledProps, setToggledProps] = React.useState<Record<string, boolean>>({});

    return (
        <>
            <main className={styles.mainContent}>
                <section className={styles.componentHeader}>
                    <div className={styles.breadcrumb}>
                        <span className={styles.breadcrumbItem}>Components</span>
                        <span className={styles.breadcrumbItem}>{componentData.category}</span>
                    </div>
                    <h1>{componentData.name}</h1>
                    <p>{componentData.description}</p>
                </section>
                <section className={styles.previewStage}>
                    <div className="canvas">
                        {Component ? <Component {...selectedValues} {...toggledProps} /> : <div>Component not found</div>}
                    </div>
                </section>
                <section className={styles.codePreview}>
                    <div className={styles.codeBlock}>
                        <code>{componentData.code}</code>
                    </div>
                </section>
            </main>
            <aside className={[styles.sidebar, styles.controls].join(" ")}>
                <h3>Properties</h3>
                <ClientComponent
                    propOptions={propOptions}
                    selectedValues={selectedValues}
                    toggledProps={toggledProps}
                    setSelectedValues={setSelectedValues}
                    setToggledProps={setToggledProps}
                />
            </aside>
        </>
    )
}