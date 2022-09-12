import React, {useEffect, useState} from 'react';
import {View} from "react-native";
import {connect} from "react-redux";
import {NormalText} from "../../components";
import Wiki from "../Wiki/View";
import {NavigationContainer} from "@react-navigation/native";
import Home from "../Home/View";
import { createStackNavigator } from '@react-navigation/stack';

function Router({...props}) {
    const Stack = createStackNavigator()

    const HomeStack = () =>{
        return(
            <Stack.Screen
                name="home"
                options={({navigation})=>({
                    title: '',
                    headerStyle: {
                        height: 0,
                    },
                })}
            >
                {(props) => <Home {...props}/>}
            </Stack.Screen>
        )
    }
    return (
        <View style={{flex:1}}>
            <NavigationContainer>
                <Stack.Navigator>
                    {HomeStack()}
                </Stack.Navigator>
            </NavigationContainer>
        </View>
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
export default connect(mapState, mapDispatch)(Router);