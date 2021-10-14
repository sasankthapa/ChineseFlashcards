<template>
    <div class="flex items-center w-full p-4 font-bold text-white md:w-auto md:h-full justify-evenly md:flex-col">
        <div @click="switchCurrent('study')" class="p-2 bg-blue-500 cursor-pointer rounded-xl sm:p-8">
            Study
        </div>
        <div @click="switchCurrent('test')" class="p-2 bg-blue-500 cursor-pointer rounded-xl sm:p-8">
            Test
        </div>
        <div @click="addCard()" class="p-2 bg-blue-500 cursor-pointer rounded-xl sm:p-8">
            Add Card
        </div>
    </div>
</template>

<script>
import { useStore } from '../store/index';
import {defineComponent } from 'vue';

export default defineComponent({
    setup() {
        const store=useStore();

        const switchCurrent=(curr)=>{
            store.dispatch('switchCurrent',curr);
        }

        const addCard=()=>{

        }

        return{
            switchCurrent,
            addCard
        }
    },
})
</script>
