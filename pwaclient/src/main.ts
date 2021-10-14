import { createApp, defineComponent, VueElement } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { store,  key } from './store'

const box=defineComponent({
    template:`
        <div>hello</div>
    `,
    setup(){
        return {

        }
    },
    props:{
        component:VueElement
    }
})

const MainLayout=defineComponent({
    setup(){
        return {

        }
    },
    props:{
    }
})

const app=createApp(App)
app.use(store,key)
app.mount('#app')
