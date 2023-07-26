import React from 'react'
import { buyCake } from '../redux/cakes/cakeActions'
//import { buyCake } from "../redux" 
import { Connect, connect } from 'react-redux'
import { useState } from 'react'

const NewCakeContainer = (props) => {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)}></input>
            <button onClick={() => props.buyCake(number)}>Buy {number} Cakes</button>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyCake: number => dispatch(buyCake(number))
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(NewCakeContainer)