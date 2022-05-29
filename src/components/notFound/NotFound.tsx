import { FC } from 'react'
import styles from './NotFound.module.scss'
import { Link } from 'react-router-dom'

const NotFound: FC = () => {
    return (
        <div className={styles.app__notFound}>
            <span>404 Error</span>
            <span>Page Not Found</span>
            <div className='app__buttom'>
                <div className='primary'>
                    <Link to={'/'}>Home Page</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound