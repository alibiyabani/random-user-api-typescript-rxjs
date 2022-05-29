import { FC } from 'react'
import { useObservableState } from 'observable-hooks'
import { rowUser$ } from '../services/store'

import { Header, Footer, UserInfo, Spinner } from '../components'


const HomePage: FC = () => {
    const user = useObservableState(rowUser$, [])


    if (user.length === 0) {
        return (
            <Spinner />
        )
    }

    return (
        <>
            <div className='app__main'>
                <Header userData={user} />
                <div className='app__container'>
                    <UserInfo userInfo={user} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default HomePage