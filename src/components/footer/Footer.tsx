import { FC } from 'react';
import styles from './Footer.module.scss';



const Footer: FC = () => {
    return (
        <div className={styles.app__footer}>
            <span>&copy; all rights reserved copyright</span>
        </div>
    )
}

export default Footer