"use client";

import styles from './components.module.css';

const Alert: React.FC = () => {
    return (
        <div className={styles.alert + " " + styles.alertWarning}>
            <strong>Warning!</strong> This is an alert message.
        </div>
    )
}

export default Alert;