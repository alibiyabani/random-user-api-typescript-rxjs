import { FC } from 'react'
import { Link } from 'react-router-dom'
import { userStateHandler } from '../../src/services/store'

const LoginPage: FC = () => {
    return (
        <div className='app__login'>
            <span>Welcome to Application</span>
            <div className='app__buttom'>
                <div className='primary'>
                    <Link to={'/'} onClick={() => userStateHandler(true)}>Login</Link>
                </div>
            </div>
        </div>
    )
}

export default LoginPage