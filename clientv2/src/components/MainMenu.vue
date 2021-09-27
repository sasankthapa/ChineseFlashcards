<template>
    <div class="flex flex-col items-center justify-center p-10 gap-10">
        <div class="w-full px-20 py-8 text-xl text-center bg-red-300 cursor-pointer hover:bg-gray-300 hover:ring transition-colors rounded-xl">
            Study
        </div>
        <div class="w-full px-20 py-8 text-xl text-center bg-red-300 cursor-pointer hover:bg-gray-300 transition-colors rounded-xl">
            Test
        </div>
        <div class="w-full px-20 py-8 text-xl text-center bg-red-300 cursor-pointer hover:bg-gray-300 transition-colors rounded-xl">
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
