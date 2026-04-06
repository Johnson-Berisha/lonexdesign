"use client";

import styles from './components.module.css';
interface BtnProps {
    variant?: 'primary' | 'secondary' | 'tretiary';
    disabled?: boolean;
    rounded?: boolean;
    label?: string;
}

const Btn: React.FC<BtnProps> = ({ variant = 'primary', rounded = false, disabled = false, label = 'Button' }) => {
    let btnClass = variant === 'primary' ? styles.btnPrimary : variant === 'secondary' ? styles.btnSecondary : styles.btnTertiary;
    if (rounded) {
        btnClass += ` ${styles.btnRounded}`;
    }


    return (
        <button className={btnClass} disabled={disabled}>
            {label}
        </button>
    )
}

export default Btn;