import { type ReactNode } from 'react'
import { UserContext } from './userContext'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <UserContext>
            <Header />
            {children}
            <Footer />
        </UserContext>
    )
}

export default Layout