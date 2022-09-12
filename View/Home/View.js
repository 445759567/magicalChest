import React, {useEffect, useState} from 'react';
import {View} from "react-native";
import {connect} from "react-redux";
import {NormalText} from "../../components";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Wiki from "../Wiki/View";

function Home({...props}) {

    const Tab = createBottomTabNavigator();
    return (
        <View style={{flex:1}}>
            <Tab.Navigator
                activeColor='red'
            >

                <Tab.Screen
                    name="wiki"
                    // component={Wiki}
                    options={({navigation})=>({
                        tabBarLabel: 'home',
                        title: 'Home',
                        headerStyle: {
                            height: 80,
                        },
                    })}
                >
                    {(props) => <Wiki {...props} />}
                </Tab.Screen>
                <Tab.Screen
                    name="another"
                    // component={Wiki}
                    options={({navigation})=>({
                        tabBarLabel: 'home',
                        title: 'Home',
                        headerStyle: {
                            height: 80,
                        },
                    })}
                >
                    {(props) => <Wiki {...props} />}
                </Tab.Screen>
            </Tab.Navigator>
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
export default connect(mapState, mapDispatch)(Home);