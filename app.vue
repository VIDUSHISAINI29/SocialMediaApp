<script setup>



import LeftSidebar from './server/components/sidebar/left/Index.vue'
import SidebarRight from './server/components/sidebar/right/Index.vue'
const darkMode = ref(true);
function handleOpenTweetModal() {
  openPostTweetModal(null)
}
</script>


<template>
  <div :class="{ 'dark': darkMode }">
      <div class="bg-white dark:bg-black">
          <div  class="min-h-full flex justify-center">

              <div class="grid bg-pink-500 grid-cols-12 w-56  sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
                  <div class="hidden  p-2 md:block xs:col-span-1 xl:col-span-2">
                    
                      <LeftSidebar />
                      <div class=" p-3 bg-green-950"></div>
                  </div>
              </div>

              <main class="col-span-12  bg-red-400 p-2 md:col-span-8 xl:col-span-6">
                        <!-- <router-view /> -->
                    </main>

                     <!-- Right Sidebar -->
                  <div class="tw-hidden tw-col-span-12 tw-md:block tw-xl:col-span-4 tw-md:col-span-3">
                      <div class="tw-sticky tw-top-0">
                          <SidebarRight />
                      </div>
                  </div>
          </div>
      </div>
  </div>
</template>

<style>

/* @tailwind base;
@tailwind components;
@tailwind utilities; */

</style>