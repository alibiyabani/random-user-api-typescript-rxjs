import { FC } from 'react'
import { UserObject } from '../../models/interface';
import { userStateHandler } from '../../../src/services/store'

import { IoLogOutOutline } from "react-icons/io5";
import styles from './Header.module.scss'

interface IProps {
    userData: UserObject[]
}

const Header: FC<IProps> = ({ userData }) => {
    const user: UserObject = userData[0]

    return (
        <div className={styles.app__header}>
            <div className={styles.image}>
                <img src={user?.picture.large} alt={user?.name.last} />
            </div>
            <div className={styles.full_name}>
                <span>{user?.name.first} {user?.name.last} <span className={styles.title}>({user.name.title})</span> </span>
            </div>
            <div className={styles.log_out}>
                <IoLogOutOutline size={20} color={'var(--secondary-color)'} onClick={() => { userStateHandler(false) }} />
            </div>
        </div>
    )
}

export default Header