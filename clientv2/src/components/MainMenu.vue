<template>
    <div class="flex items-center justify-center p-4 font-bold text-white md:flex-col gap-2">
        <div @click="switchCurrent('study')" class="p-2 bg-blue-800 rounded-sm">
            Study
        </div>
        <div @click="switchCurrent('test')" class="p-2 bg-blue-800 rounded-sm">
            Test
        </div>
        <div @click="addCard()" class="p-2 bg-blue-800 rounded-sm">
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

        const addCard=()=>{

        }

        return{
            switchCurrent,
            addCard
        }
    },
}
</script>
