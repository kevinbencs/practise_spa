import { useUser } from "./userContext"


export const fetcher = async (url: string) => {
    try {
        const { token } = useUser()
        const res = await fetch(url, {
            headers: { Authorization: `Bearer ${token}` },
        })
        if (!res.ok) {
            const err = new Error('Request failed');
            err.status = res.status;
            throw err;
        }

        return res.json()
    } catch (error) {
        console.log(error)
        const err = new Error('Request failed');
        throw err;
    }
}

let refreshPromise = null;

export async function refreshAccessToken() {
    const { setToken } = useUser()
    if (!refreshPromise) {
        refreshPromise = fetch('/api/auth/refresh', {
            method: 'POST',
            credentials: 'include', // if the refresh token is in an httpOnly cookie
        })
            .then((res) => {
                if (!res.ok) throw new Error('Refresh failed');
                return res.json();
            })
            .then(({ accessToken }) => {
                setToken(accessToken);
                return accessToken;
            })
            .finally(() => {
                refreshPromise = null;
            });
    }
    return refreshPromise;
}

export async function authFetch(url: string, retry = true) {
    const { token } = useUser()
    const res = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
    });

    if (res.status === 401 && retry) {
        await refreshAccessToken();      // throws if refresh fails → log the user out
        return authFetch(url, false);    // retry once with the new token
    }
    if (!res.ok) {
        const err = new Error('Request failed');
        err.status = res.status;
        throw err;
    }
    return res.json();
}