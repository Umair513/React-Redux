import React from 'react'
import { UseSelector, useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { buyCake } from '../redux/cakes/cakeActions';
import { buyIcream } from '../redux/icecream/icecreamActions';


const HooksCakeContainer = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const numOfIcecreams = useSelector(state => state.numOfIcecreams)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of Cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
            
        </div>
    )
}

export default HooksCakeContainer
