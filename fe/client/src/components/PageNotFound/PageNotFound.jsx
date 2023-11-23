import styles from './PageNotFound.module.css';
export const PageNotFound = () => {
    return (
        <div className={styles['error-container']}>
            <img className={styles['error-image']} src='/image/pngwing.com.png' />
        </div>
    );
}