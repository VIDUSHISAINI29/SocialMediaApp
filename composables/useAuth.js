import useFetchApi from "./useFetchApi";

  export default () => {
     const useAuthToken = () => useState('auth_token', () => null);
     const useAuthUser = () => useState('auth_user', () => null);
     const useAuthLoad = () => useState('auth_loading', () => true)
     const setToken = (newToken) => {
        const authToken = useAuthToken();
        authToken.value = newToken;
    };

     const setUser = (newUser) => {
        const authUser = useAuthUser();
        authUser.value = newUser;
    };
     const setIsAuthLoading  = (value) => {
        const authLoading = useAuthLoad();
        authLoading.value = value;
    };

     const login = async ({ username, password }) => {
        try {
            const data = await useFetchApi('http://localhost:3000/api/auth/login', {
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
                const data = await useFetchApi('http://localhost:3000/api/auth/refresh')

                setToken(data.access_token)
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }
     const getUser = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await useFetchApi('http://localhost:3000/api/auth/user')

                setUser(data.user)
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }
     const initAuth = () => {
        return new Promise(async (resolve, reject) => {
           setIsAuthLoading(true)
        //    alert("hfa")
        try {
        //  await $fetch('http://localhost:3000/api/auth/refresh')
        await refreshToken()
         resolve(true)
     
        } catch (error) {
            reject(error)
        }finally {
            setIsAuthLoading(false)
        }
                })
            }

            return{
                login,
                useAuthUser,
                useAuthToken,
                initAuth,
                refreshToken,
                useAuthLoad
            }
  }