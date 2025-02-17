<script setup>
import SidebarLeft from './server/components/LeftSidebar.vue'
const darkMode = ref(false)
// const { useAuthUser, initAuth, useAuthLoading, logout } = useAuth()
// const isAuthLoading = useAuthLoading()
// const { closePostTweetModal, usePostTweetModal, openPostTweetModal, useReplyTweet } = useTweets()
// const user = useAuthUser()

// const postTweetModal = usePostTweetModal()
// const emitter = useEmitter()
// const replyTweet = useReplyTweet()

// emitter.$on('replyTweet', (tweet) => {
//   openPostTweetModal(tweet)
// })

// emitter.$on('toggleDarkMode', () => {
//   darkMode.value = !darkMode.value
// })

// onBeforeMount(() => {
//   initAuth()
// })

// function handleFormSuccess(tweet) {
//   closePostTweetModal()
//
//   navigateTo({
//       path: `/status/${tweet.id}`
//   })
// }

// function handleModalClose() {
//   closePostTweetModal()
// }

function handleOpenTweetModal() {
  openPostTweetModal(null)
}

// function handleUserLogout() {
//   logout()
// }

</script>


<template>
  <div :class="{ 'tw-dark': darkMode }">
      <div class="tw-bg-white tw-dark:tw-bg-dim-900">

          <!-- <LoadingPage v-if="isAuthLoading" /> -->
          <!-- v-else-if="user" -->
          <!-- App -->
          <div  class="tw-min-h-full">

              <div class="tw-grid tw-grid-cols-12 tw-mx-auto tw-sm:px-6 tw-lg:max-w-7xl tw-lg:px-8 tw-lg:gap-5">

                  <!-- Left sidebar -->
                  <!-- @on-logout="handleUserLogout" -->
                  <!-- :user="user" @on-tweet="handleOpenTweetModal" -->
                  <div class="tw-hidden tw-md:block tw-xs-col-span-1 tw-xl:col-span-2">
                      <div class="tw-sticky tw-top-0">
                          <SidebarLeft  />
                      </div>
                      
                  </div>

                  <!-- Main content -->
                  <!-- <main class="tw-col-span-12 tw-md:col-span-8 tw-xl:col-span-6">
                      <router-view />
                  </main> -->

                  <!-- Right Sidebar -->
                  <!-- <div class="tw-hidden tw-col-span-12 tw-md:block tw-xl:col-span-4 tw-md:col-span-3">
                      <div class="tw-sticky tw-top-0">
                          <SidebarRight />
                      </div>
                  </div> -->

              </div>

          </div>

          <!-- <AuthPage v-else /> -->
<!-- 
          <UIModal :isOpen="postTweetModal" @on-close="handleModalClose">
              <TweetForm :replyTo="replyTweet" showReply :user="user" @onSuccess="handleFormSuccess" />
          </UIModal> -->

      </div>
  </div>
</template>

