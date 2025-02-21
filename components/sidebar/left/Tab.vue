<script setup>
import UseTailwindConfig from '~/composables/UseTailwindConfig.js';
const { defaultTransition } = UseTailwindConfig();
const props = defineProps({
    active:{
        type: Boolean,
        default: false,
    }
});

const textClasses = computed(() => props.active ? 'font-semibold' : 'font-normal')
</script>

<template>

<nuxt-link to="#" :class="defaultTransition" class="flex items-center p-3 text-black rounded-full w-min hover:bg-gray-200 dark:hover:bg-dim-200 dark:text-white">

    <div class="w-6 h-6  text-dark">
            <slot name="icon"/>
        </div>
        <div class="hidden ml-4 text-xl xl:block" :class="textClasses">
            <slot name="name"/>
        </div>

</nuxt-link>

    
</template>