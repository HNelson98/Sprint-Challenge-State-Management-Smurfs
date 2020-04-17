import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { fetchSmurf } from '../store/actions/smurfActions'
import SmurfCard from './smurfCard'

function SmurfList(props) {

    useEffect(()=>{
        props.fetchSmurf();
    }, [])

    return(
        <div SmurfList>
            {props.data.map( item => (
                <SmurfCard key= {item.id} name= {item.name} age= {item.age} height= {item.height} />
            ))}

        </div>
    )
}


const mapStateToProps = state =>{
    console.log(state)
    return{
        data: state.smurfReducer.data,
        isFetching: state.smurfReducer.isFetching
    }
}

export default connect(
    mapStateToProps,
    {fetchSmurf}
)(SmurfList)