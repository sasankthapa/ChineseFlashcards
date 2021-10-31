<template>
    <div class="flex w-full text-center bg-red-100">
        <div class="flex-shrink">hholl</div>
        <div class="flex-grow">Hello</div>
        <div class="flex-shrink">Settings</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
    setup() {
        const store=useStore();
    },
})
</script>
