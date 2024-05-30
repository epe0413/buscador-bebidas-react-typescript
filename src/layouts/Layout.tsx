import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

export default function Layout() {
    return (
        <>
            <Header/>
            <main className='containter mx-auto py-16'>
                <Outlet/>
            </main>
        </>
    )
}