<script setup>
import { onMounted, reactive } from 'vue';
import Logo from "../Logo.vue"
import useAuth from "../../composables/useAuth.js"
const {login} = useAuth();
const {useAuthUser} = useAuth();
const data = reactive({
    username: '',
    password: '',
    loading: ''
});

async function handleLogin(){
    data.loading = true
    try {
        await login({
            username: data.username,
            password: data.password
        })
        console.log("use auth user = ", useAuthUser);
        
    } catch (error) {
        console.log('error in frontend login',error)
    }
    finally{
        data.loading = false;
    }
    console.log("clicked")
}
// const isButtonDisabled =  computed(() => {
//      return (!data.username || !data.password) || data.loading
// })
onMounted(() => {
    console.log(login);
    
})

</script>

<template>
<!-- 
<client-only>
</client-only> -->

<div class="w-full">
        <div class="flex justify-center">
            <div class="w-10 h-10">
                <Logo />
            </div>
        </div>

        <div class="pt-5 items-center space-y-6">

            <UIInput v-model="data.username" label="Username" placeholder="@username" />

            <UIInput label="Password" placeholder="********" type="password" v-model="data.password" />

            <button @click="handleLogin"  class="bg-red-900 cursor-pointer text-white p-2">Login</button>

            <!-- <UIButton @click="handleLogin" liquid :disabled="isButtonDisabled">
                Login
            </UIButton> -->

        </div>
    </div>

</template>