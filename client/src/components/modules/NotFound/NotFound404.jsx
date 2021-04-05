import styles from  './NotFound404.module.scss';

export const NotFound404 = () => {
    return (
        <div className={styles.wrapper}>
            <div>
                <h1 className={styles.heading}>Huh?</h1>
                <div className={styles['description-box']}>
                    <h2 className={styles.description}>Page not found! Get back!</h2>
                </div>
            </div>
        </div>
    )
}