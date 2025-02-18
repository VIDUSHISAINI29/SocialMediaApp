<script setup>
import SidebarRightPreviewCard from "./PreviewCard/Index.vue"
import SidebarRightPreviewCardItem from "./PreviewCard/Item.vue"

const whatsHappening = ref([
    {
        title: "SpaceX",
        tweets: "12.3k"
    },
    {
        title: "SpaceX",
        tweets: "12.3k"
    },
    {
        title: "SpaceX",
        tweets: "12.3k"
    }
])
</script>
<template>

<div class="flex flex-col">

    <!-- Preview Card: What's happening  -->
    <SidebarRightPreviewCard class="flex flex-col gap-4 " title="What's Happening">
    <SidebarRightPreviewItem class="text-lg"  v-for="happening in whatsHappening" >
        <h2>{{ happening.title }}</h2>
        <p>{{ happening.count }}</p>
    </SidebarRightPreviewItem>
    </SidebarRightPreviewCard>
    <SidebarRightPreviewCard title="Who to follow"/>


</div>

</template>

