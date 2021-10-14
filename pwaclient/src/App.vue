<template>
  <ContentManager />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import './index.css'
import ContentManager from './components/ContentManager.vue';

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
