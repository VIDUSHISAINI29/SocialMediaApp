<script setup>
import { onMounted } from "vue";
import MainSection from "../components/MainSection.vue";
import useAuth from "../composables/useAuth.js";
const {useAuthUser} = useAuth();
const loading = ref(false);
const user = useAuthUser()
onMounted(() => {
   console.log('user at index.vue of pages/ =',user)
})
</script>

<template>
  <div>
      <MainSection  title="Home" :loading="loading">
{{ user }}
<h1>VidushiSaini</h1>
</MainSection>
</div>
<!-- <client-only>
  
</client-only> -->
</template>