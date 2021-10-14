<template>
  <ContentManager />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContentManager from '@/components/ContentManager.vue';
import Test from './components/test.vue'

export default defineComponent({
    setup(){
        return{
        }
    },
    components:{
        ContentManager
    }
})
</script>
