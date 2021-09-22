<script setup>
import { useStore} from 'vuex';
const currentWord = useStore();

console.log(currentWord.state.user.name) 
const name=currentWord.state.user.name

defineProps({
    value:String
})

defineExpose({
    name
})

</script>

<template>
    <div class="w-12 h-20">
        <h1 class="w-full">{{value}}</h1>
        <h1 class="w-full">{{name}}</h1>
    </div>
</template>
