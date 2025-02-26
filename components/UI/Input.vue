<script setup>
const emits = defineEmits(['update:modelValue'])

    const props = defineProps({
        modelValue: {
            type: String,
            required: true,
        },
        label : {
            type: String,
            default:null
        },
        placeholder:{
            type: String,
            default: ""
        },
        type:{
            type: String,
            default: "text"
        }
    })
</script>

<template>

<div>
    <label v-if="props.label" class="block pl-3 ml-2 px-2 text-sm font-medium text-gray-700 " for="">{{ props.label }}</label>
    <div>
    <input @input="event => emits
    ('update:modelValue', event.target.value)" :type="props.type" :placeholder="props.placeholder" class="block w-full px-4 border-gray-300 rounded-full shadown-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"  :value="props.modelValue">

    </div>
</div>

</template>