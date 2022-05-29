import { FC } from 'react'
import styles from './Spinner.module.scss';
import { images } from '../../constants'

const Spinner: FC = () => {
    return (
        <div className={styles.app__spinner}>
            <div>
                <img src={images.spinner} width='30%' height='100%' />
                <span>Loading</span>
            </div>
        </div>
    )
}

export default Spinner