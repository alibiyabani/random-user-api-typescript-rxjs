import { FC } from 'react'
import { UserObject } from '../../models/interface'

import styles from './Header.module.scss'

interface IProps {
    userData: UserObject[]
}

const Header: FC<IProps> = ({ userData }) => {
    const user: UserObject = userData[0]

    return (
        <div className={styles.app__header}>
            <div className={styles.image}>
                <img src={user?.picture.large} alt="" />
            </div>
            <div className={styles.full_name}>
                <span>{user?.name.first} {user?.name.last} <span className={styles.title}>({user.name.title})</span> </span>
            </div>
        </div>
    )
}

export default Header