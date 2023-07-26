import React from 'react'
//import { buyCake } from '../redux/cakes/cakeActions'
import { buyIcream } from '../redux/icecream/icecreamActions'
//import { buyCake } from "../redux" 
import { Connect, connect } from 'react-redux'

const icecreamContainer = (props) => {
    return (
        <div>
            <h2>Number of IceCreams - {props.numOfIcecreams}</h2>
            <button onClick={props.buyIcream}>Buy Icecream</button>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        numOfIcecreams: state.icecream.numOfIcecreams
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyIcream())
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(icecreamContainer)