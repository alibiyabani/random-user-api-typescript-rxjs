import { FC } from "react"
import { UserObject } from "../../models/interface"
import styles from './UserInfo.module.scss'


interface IProps {
    userInfo: UserObject[]
}


const UserInfo: FC<IProps> = ({ userInfo }) => {
    const user: UserObject = userInfo[0];

    return (
        <div className={styles.app__userInfo}>
            <span className={styles.title}>User Information</span>

            <div className={styles.info_wrapper}>
                <span>gender</span>
                <span>{user.gender}</span>
            </div>
            <div className={styles.info_wrapper}>
                <span>age</span>
                <span>{user.dob.age}</span>
            </div>

            <div className={styles.info_wrapper}>
                <span>phone</span>
                <span>{user.phone}</span>
            </div>

            <div className={styles.info_wrapper}>
                <span>cell number</span>
                <span>{user.cell}</span>
            </div>

            <div className={styles.info_wrapper}>
                <span>email</span>
                <span>{user.email}</span>
            </div>

            <div className={styles.info_wrapper}>
                <span>post code</span>
                <span>{user.location.postcode}</span>
            </div>

            <div className={styles.info_wrapper}>
                <span>country</span>
                <span>{user.location.country}</span>
            </div>

            <div className={styles.info_wrapper}>
                <span>address</span>
                <span>{user.location.street.number} - {user.location.street.name}</span>
            </div>

        </div>
    )
}

export default UserInfo