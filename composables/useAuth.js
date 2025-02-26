export default () => {
    const useAuthToken = () => useState('auth_token', () => null);
    const useAuthUser = () => useState('auth_user', () => null);

    const setToken = (newToken) => {
        const authToken = useAuthToken();
        authToken.value = newToken;
    };

    const setUser = (newUser) => {
        const authUser = useAuthUser();
        authUser.value = newUser;
    };

    const login = async ({ username, password }) => {
        try {
            const data = await $fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                body: { username, password },
            });

            setToken(data.access_token);
            setUser(data.user);
            console.log('Login successful:', data);
            return true;
        } catch (error) {
            console.error("Error in useAuth.js:", error);
            return false;
        }
    };
    const refreshToken = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await $fetch('http://localhost:3000/api/auth/refresh')

                setToken(data.access_token)
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }
    const initAuth = () => {
        return new Promise(async (resolve, reject) => {
        try {
            const data = await $fetch('http://localhost:3000/api/auth/refresh')
            setToken(data.access_token)
        } catch (error) {
            reject(error)
        }
                })
            }

    return {
        login,
        useAuthUser,
        useAuthToken,
    };
};
