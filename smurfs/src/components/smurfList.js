import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { fetchSmurf } from '../store/actions/smurfActions'

function SmurfList(props) {

    useEffect(()=>{
        props.fetchSmurf();
    }, [])

    return(
        <div>

        </div>
    )
}


const mapStateToProps = state =>{
    console.log(state)
}

export default connect(
    mapStateToProps,
    {fetchSmurf}
)(SmurfList)