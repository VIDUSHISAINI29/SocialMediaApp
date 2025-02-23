<script setup>
import MainSection from "../components/MainSection.vue";
const loading = ref(false);
</script>

<template>
   <div>
  <client-only>
   <MainSection  title="Home" :loading="loading">

</MainSection>
  </client-only>
   </div>
</template>