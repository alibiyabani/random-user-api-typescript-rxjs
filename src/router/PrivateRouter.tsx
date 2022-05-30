import { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface IPrivateRouter {
    isUser: boolean
}


const PrivateRouter: FC<IPrivateRouter> = ({ isUser }) => {
    return isUser ? <Outlet /> : <Navigate to={'/login'} />
}

export default PrivateRouter