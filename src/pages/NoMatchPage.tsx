import { FC } from 'react'
import { NotFound } from '../components'

interface IProps { }

const NoMatchPage: FC<IProps> = () => {
    return (
        <>
            <NotFound />
        </>
    )
}

export default NoMatchPage