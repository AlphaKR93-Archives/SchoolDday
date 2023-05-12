import React from "react";
import styles from "./style.module.css";

export default function SimpleIcon(props: {
    id: string;
    color: { light: { primary: string; secondary: string }; dark: { primary: string; secondary: string } };
}) {
    const { id, color } = props;
    return (
        <div
            className={styles.icon}
            style={
                {
                    "--primary-light": `url(https://cdn.simpleicons.org/${id}/${color.light.primary})`,
                    "--secondary-light": `url(https://cdn.simpleicons.org/${id}/${color.light.secondary})`,
                    "--primary-dark": `url(https://cdn.simpleicons.org/${id}/${color.dark.primary})`,
                    "--secondary-dark": `url(https://cdn.simpleicons.org/${id}/${color.dark.secondary})`
                } as React.CSSProperties
            }
        />
    );
}
