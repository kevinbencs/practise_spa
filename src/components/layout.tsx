import { type ReactNode } from 'react'
import { UserContext } from './userContext'
import Header from './header'
import Footer from './footer'
import { SWRConfig } from 'swr';
import { fetcher } from './fetcher';

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <UserContext>
            <SWRConfig
                value={{
                    fetcher,
                    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
                        if (error.status === 401) return;
                        if (retryCount >= 3) return;
                        setTimeout(() => revalidate({ retryCount }), 5000);
                    },
                }}
            >
                <Header />
                {children}
                <Footer />
            </SWRConfig>
        </UserContext>
    )
}

export default Layout