<script setup>
import LeftSidebar from "./components/sidebar/left/index.vue";
import SidebarRight from "./components/sidebar/right/index.vue";
import AuthPage from "./components/Auth/Page.vue";
// import {useAuthUser, initAuth} from "./composables/useAuth.js";
import useAuth from "./composables/useAuth.js";
import { onBeforeMount, onMounted, watch } from "vue";
const {initAuth} = useAuth();
const {user} = useAuth();
const darkMode = ref(true);
// function handleOpenTweetModal() {
//   openPostTweetModal(null)
// }
watch(user,() => {
   console.log("user = ", user);
   
})

onBeforeMount(() => {
   initAuth()
})
</script>

<template>
   <div :class="{ dark: darkMode }">
      <div class="bg-white dark:bg-black">
         <!-- This is App  -->

         <div v-if="user" class="min-h-full flex justify-center">
            <div
               class="grid bg-pink-500 grid-cols-12 w-60 sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
               <div class="hidden p-2 md:block xs:col-span-1 xl:col-span-2">
                  <LeftSidebar />
                  <div class="p-3 bg-green-950"></div>
               </div>
            </div>

            <main
               class="col-span-12 bg-red-400 w-[50%] p-2 md:col-span-8 xl:col-span-6">
               <NuxtPage />
            </main>

            <!-- Right Sidebar -->
            <div
               class="tw-hidden tw-col-span-12 tw-md:block tw-xl:col-span-4 tw-md:col-span-3">
               <div class="tw-sticky tw-top-0">
                  <SidebarRight />
               </div>
            </div>
         </div>

         <AuthPage v-else />
      </div>
   </div>
</template>

<style>
/* @tailwind base;
@tailwind components;
@tailwind utilities; */
</style>
