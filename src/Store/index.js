import {createStore} from 'redux'


const reducerCounter = (state={counter:0},action)=>{
if(action.type==='incrementby5'){
    return{
        counter:state.counter+5
    }
}
else if(action.type==='decrementby5'){
    return{
        counter:state.counter-5
    }
}
return state
}

const store = createStore(reducerCounter)

export default store