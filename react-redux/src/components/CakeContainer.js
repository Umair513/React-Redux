import React from 'react'
import { buyCake } from '../redux/cakes/cakeActions'
//import { buyCake } from "../redux" 
import { Connect, connect } from 'react-redux'

const CakeContainer = (props) => {
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
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
        buyCake: () => dispatch(buyCake( ))
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(CakeContainer)