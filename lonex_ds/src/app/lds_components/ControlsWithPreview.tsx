"use client";

import ClientComponent from "./ClientComponent";
import { PropOption } from "@/lib/parseProps";
import React from "react";

interface previewProps {
    Component: React.ComponentType<any>;
    propOptions: PropOption[];
}

export default function ControlsWithPreview({ Component, propOptions }: previewProps) {
    const [selectedValues, setSelectedValues] = React.useState<Record<string, any>>({});
    const [toggledProps, setToggledProps] = React.useState<Record<string, boolean>>({});

    return (
        <>
            <div className="canvas">
                <Component {...selectedValues} {...toggledProps} />
            </div>
            <ClientComponent
                propOptions={propOptions}
                selectedValues={selectedValues}
                toggledProps={toggledProps}
                setSelectedValues={setSelectedValues}
                setToggledProps={setToggledProps}
            />
        </>
    )
}