<script setup>
import SidebarRightPreviewCard from "./PreviewCard/index.vue";
import SidebarRightPreviewCardItem from "./PreviewCard/item.vue";
import useEmitter from "~/composables/UseEmitter";
const emitter = useEmitter();

const whatsHappening = ref([
   {
      title: "SpaceX",
      tweets: "12.3k",
   },
   {
      title: "SpaceX",
      tweets: "12.3k",
   },
   {
      title: "SpaceX",
      tweets: "12.3k",
   },
]);
const whoToFollowItems = ref([
   {
      name: "Joe Biden",
      handle: "@JoeBiden",
      image: "https://picsum.photos/200/200",
   },
   {
      name: "Joe Biden",
      handle: "@JoeBiden",
      image: "https://picsum.photos/200/200",
   },
   {
      name: "Joe Biden",
      handle: "@JoeBiden",
      image: "https://picsum.photos/200/200",
   },
]);
function handleToggleDarkMode() {
   emitter.$emit("toggleDarkMode");
}
</script>
<template>
   <div class="flex flex-col">
      <!-- Preview Card: What's happening  -->

      <SidebarRightPreviewCard
         class="flex flex-col gap-4"
         title="What's Happening">
         <SidebarRightPreviewCardItem
            class="text-lg"
            v-for="happening in whatsHappening">
            <template>
               <h2 class="font-bold text-gray-800 text-md dark:text-white">
                  {{ happening.title }}
               </h2>
               <p class="text-xs text-gray-400">{{ happening.count }}</p>
            </template>
         </SidebarRightPreviewCardItem>
      </SidebarRightPreviewCard>

      <!-- Preview Card : Who to follow -->

      <SidebarRightPreviewCard
         class="flex flex-col gap-4"
         title="Who to Follow">
         <SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowItems">
            <div class="flex flex-row items-center justify-between p-2">
               <div class="flex flex-row">
                  <img
                     class="w-10 h-10 rounded-full"
                     :src="whoToFollow.image"
                     :alt="whoToFollow.name" />

                  <div class="flex flex-col ml-2">
                     <h1
                        class="text-sm font-bold text-gray-900 dark:text-white">
                        {{ whoToFollow.name }}
                     </h1>
                     <p class="text-xs text-gray-400">
                        {{ whoToFollow.handle }}
                     </p>
                  </div>
               </div>
               <div class="flex h-full">
                  <button
                     class="px-4 py-2 text-xs font-bold text-white bg-black rounded-full dark:text-black dark:bg-white">
                     Follow
                  </button>
               </div>
            </div>
         </SidebarRightPreviewCardItem>
      </SidebarRightPreviewCard>

      <footer>
         <ul class="mx-2 my-4 text-xs text-gray-500">
            <li class="inline-block mx-2">
               <a
                  href="#"
                  class="hover:underline"
                  @click.prevent="handleToggleDarkMode">
                  Dark mode
               </a>
            </li>
            <li class="inline-block mx-2">
               <a href="#" class="hover:underline">Privacy Policy</a>
            </li>
            <li class="inline-block mx-2">
               <a href="#" class="hover:underline">Cookie Policy</a>
            </li>
            <li class="inline-block mx-2">
               <a href="#" class="hover:underline">Accessability</a>
            </li>
            <li class="inline-block mx-2">
               <a href="#" class="hover:underline">Ads info</a>
            </li>
            <li class="inline-block mx-2">
               <a href="#" class="hover:underline">More</a>
            </li>
            <li class="inline-block mx-2">© 2022 Twitter, Inc.</li>
         </ul>
      </footer>
   </div>
</template>
