export interface PropOption {
    name: string;
    type: "toggle" | "select";
    values?: string[];
    default?: string | boolean;
}

export function parseComponentProps(propsString: string): PropOption[] {
    try {
        // Clean up the props string - remove newlines and extra whitespace
        let cleaned = propsString
            .replace(/\n/g, "")
            .replace(/\s+/g, " ")
            .trim();

        // Remove trailing commas before closing braces
        cleaned = cleaned.replace(/,\s*([}\]])/g, "$1");

        // Try to parse as JSON
        const propsObj = JSON.parse(cleaned);

        const options: PropOption[] = [];

        for (const [key, value] of Object.entries(propsObj)) {
            const valueStr = String(value).trim();

            // Check if it's a boolean type
            if (valueStr.toLowerCase().startsWith("boolean")) {
                // Extract default for boolean: "boolean:true" or "boolean:false"
                let defaultValue: boolean | undefined;
                const boolMatch = valueStr.match(/boolean:(?:true|false)/i);
                if (boolMatch) {
                    defaultValue = boolMatch[0].toLowerCase().endsWith("true");
                }
                options.push({
                    name: key,
                    type: "toggle",
                    default: defaultValue,
                });
            } else {
                // Otherwise treat as select with pipe-separated values
                const values = valueStr.split("|").map((v) => v.trim());
                let defaultValue: string | undefined;

                // Check for default:value syntax
                const defaultIndex = values.findIndex((v) => v.startsWith("default:"));
                if (defaultIndex !== -1) {
                    defaultValue = values[defaultIndex].split(":")[1];
                    values.splice(defaultIndex, 1); // Remove default from values array

                    // Validate that default is one of the remaining values
                    if (!values.includes(defaultValue)) {
                        console.warn(`Default value "${defaultValue}" for prop "${key}" is not in the available values: [${values.join(", ")}]`);
                        defaultValue = undefined; // Reset if invalid
                    }
                }

                if (values.length > 0) {
                    options.push({
                        name: key,
                        type: "select",
                        values,
                        default: defaultValue || values[0], // Use first value as fallback default
                    });
                }
            }
        }

        return options;
    } catch (error) {
        console.error("Error parsing props:", error);
        return [];
    }
}
