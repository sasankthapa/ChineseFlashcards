<template>
    <div class="flex flex-col items-center justify-center p-10 gap-10">
        <div @click="switchCurrent('study')" class="w-full px-10 py-8 text-2xl text-center bg-blue-300 cursor-pointer lg:px-20 hover:bg-gray-300 hover:ring transition-colors rounded-xl">
            Study
        </div>
        <div @click="switchCurrent('study')" class="w-full px-10 py-8 text-2xl text-center bg-blue-300 cursor-pointer lg:px-20 hover:bg-gray-300 transition-colors rounded-xl">
            Test
        </div>
        <div @click="switchCurrent('study')" class="w-full px-10 py-8 text-2xl text-center bg-blue-300 cursor-pointer lg:px-20 hover:bg-gray-300 transition-colors rounded-xl">
            Add Card
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
    setup() {
        const store=useStore();

        const switchCurrent=(curr)=>{
            store.dispatch('switchCurrent',curr);
        }

        return{
            switchCurrent
        }
    },
}
</script>
