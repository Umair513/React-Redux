const redux = require("redux")
const combineReducers = redux.combineReducers


const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM ="BUY_ICECREAM"


function BuyCake() {
    return {
        type: BUY_CAKE,
        info: "First Redux Action"
    }
}
function BuyIcrecream() {
    return {
        type: BUY_ICECREAM
    }
}

// const initialState = {
//     numOfCakes: 10,
//     numOfIcrecreams: 20
// }
const initialCakeState = {
    numOfCakes: 10
}
const initialIcrecreamState = {
    numOfIcrecreams: 20
}


// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIcrecreams: state.numOfIcrecreams - 1
//         }
//         default: return state
//     }
// }

const CakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const IcrecreamReducer = (state = initialIcrecreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIcrecreams: state.numOfIcrecreams - 1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: CakeReducer,
    icrecream: IcrecreamReducer
})
const store = redux.createStore(rootReducer)
console.log("Initial state", store.getState())
const unsubscribe = store.subscribe(() => console.log("Updated State", store.getState()))
store.dispatch(BuyCake())
store.dispatch(BuyCake())
store.dispatch(BuyCake())
store.dispatch(BuyIcrecream())
store.dispatch(BuyIcrecream())
unsubscribe()
