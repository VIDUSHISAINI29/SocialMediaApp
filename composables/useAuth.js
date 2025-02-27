
    export const useAuthToken = () => useState('auth_token', () => null);
    export const useAuthUser = () => useState('auth_user', () => null);

    export const setToken = (newToken) => {
        const authToken = useAuthToken();
        authToken.value = newToken;
    };

    export const setUser = (newUser) => {
        const authUser = useAuthUser();
        authUser.value = newUser;
    };

    export const login = async ({ username, password }) => {
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
    export const refreshToken = () => {
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
    export const initAuth = () => {
        alert("heyy")
        return new Promise(async (resolve, reject) => {
        try {
         await $fetch('http://localhost:3000/api/auth/refresh')
         resolve(true)
     
        } catch (error) {
            reject(error)
        }
                })
            }

 