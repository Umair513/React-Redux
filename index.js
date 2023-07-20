const redux = require("redux")



const BUY_CAKE = "BUY_CAKE"


function BuyCake() {
    return {
        type: BUY_CAKE,
        info: "First Redux Action"
    }
}

const initialState = {
    numOfCakes : 10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const store = redux.createStore(reducer)
console.log("Initial state", store.getState())
const unsubscribe = store.subscribe(() => console.log("Updated State", store.getState()))
store.dispatch(BuyCake())
store.dispatch(BuyCake())
store.dispatch(BuyCake())
unsubscribe()
