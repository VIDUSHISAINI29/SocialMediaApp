<script setup>
import UseTailwindConfig from '~/composables/UseTailwindConfig.js';

const { defaultTransition, twitterBorderColor } = UseTailwindConfig()


const wrapperClasses = computed(() => `${defaultTransition} ${twitterBorderColor}`)


</script>

<template>
    <div class="p-3 border-b cursor-pointer hover:bg-gray-200 dark:hover:bg-dim-300" :class="wrapperClasses">
       <slot></slot>
       
    </div>
</template>
