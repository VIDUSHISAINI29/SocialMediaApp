<script setup>



import LeftSidebar from './server/components/sidebar/left/Index.vue'
const darkMode = ref(true);
function handleOpenTweetModal() {
  openPostTweetModal(null)
}
</script>


<template>
  <div :class="{ 'dark': darkMode }">
      <div class="bg-white dark:bg-black">
          <div  class="min-h-full">

              <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
                  <div class="hidden  p-2 md:block xs:col-span-1 xl:col-span-2">
                    
                      <LeftSidebar />
                      <div class=" tw-p-3 tw-bg-green-950"></div>
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