//creating the add card component here as well
const visualizerComponentConfig={
    namespaced:true,
    state:{
        currentWord:'',
        addingCard:false,
        word_array:[],
    },
    mutations:{
        setUpdateWord(state,payload){
            state.currentWord=payload;
        },
        setWordArray(state,payload){
            state.word_array=payload;
        },
        setAddingCard(state,payload){
            state.addingCard=payload;
        }
    },
    actions:{
        async wordChange(context,payload){
            const word=Array.from(payload)
            context.commit('setUpdateWord',payload);
            context.commit('setWordArray',word);
        },
        setAddingCard(context,payload){
            context.commit('setAddingCard',payload)
        }
    }
}

export default visualizerComponentConfig
