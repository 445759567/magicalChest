import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from "react-native";
import {connect} from "react-redux";
import {NormalText} from "../../components";

function Wiki({...props}) {
    return (
        <SafeAreaView>
            <NormalText>Wiki: </NormalText>
        </SafeAreaView>
    );
}

const mapState = (state) => {
    return {
        //signIn: state.account.signIn,
    }
}
const mapDispatch = (dispatch) => {
    return {
        // setCompanyId(res){
        //     const action = setCompanyIdAction(res)
        //     dispatch(action)
        // },
    }
}
export default connect(mapState, mapDispatch)(Wiki);