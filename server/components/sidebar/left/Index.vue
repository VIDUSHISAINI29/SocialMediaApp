<script setup>
import Logo from "../../Logo.vue";
import SidebarLeftTab from "./Tab.vue"; // Ensure this file exists
import { 
  HashtagIcon, HomeIcon, BellIcon, InboxIcon, 
  BookmarkIcon, DocumentTextIcon, UserIcon, DotsCircleHorizontalIcon
} from "@heroicons/vue/outline";
</script>

<template>
  <client-only>
    <div class="p-1 hidden md:block xs:col-span-1 xl:col-span-2">
      <div class="hover:bg-blue-50 w-16 h-16 hover:rounded-[50%] transition-all duration-300">
        <nuxt-link to="/">
          <div class="sticky top-0">
            <Logo />
          </div>
        </nuxt-link>
      </div>

      <div class="mt-2 space-y-3">
        <SidebarLeftTab>
          <template #icon>
            <HomeIcon />
          </template>
          <template #name>
            Home
          </template>
        </SidebarLeftTab>

        <SidebarLeftTab>
          <template #icon>
            <HashtagIcon />
          </template>
          <template #name>
            Explore
          </template>
        </SidebarLeftTab>

        <SidebarLeftTab>
          <template #icon>
            <BellIcon />
          </template>
          <template #name>
            Notifications
          </template>
        </SidebarLeftTab>

        <SidebarLeftTab>
          <template #icon>
            <InboxIcon />
          </template>
          <template #name>
            Messages
          </template>
        </SidebarLeftTab>

        <SidebarLeftTab>
          <template #icon>
            <BookmarkIcon />
          </template>
          <template #name>
            Bookmarks
          </template>
        </SidebarLeftTab>

        <SidebarLeftTab>
          <template #icon>
            <DocumentTextIcon />
          </template>
          <template #name>
            Lists
          </template>
        </SidebarLeftTab>

        <SidebarLeftTab>
          <template #icon>
            <UserIcon />
          </template>
          <template #name>
            Profile
          </template>
        </SidebarLeftTab>

        <SidebarLeftTab>
          <template #icon>
            <DotsCircleHorizontalIcon />
          </template>
          <template #name>
            More
          </template>
        </SidebarLeftTab>
      </div>
    </div>
  </client-only>
</template>
