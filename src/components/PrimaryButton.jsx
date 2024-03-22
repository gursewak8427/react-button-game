import styles from "./PrimaryButton.module.css";

export const PrimaryButton = ({ button, handleButtonClick, disabled }) => {
    return (<>
        <button
            id={button.label}
            key={button.label}
            className={styles.primary_btn}
            onClick={() => handleButtonClick(button)}
            disabled={disabled}
        >
            {button.label}
        </button>
    </>)
}