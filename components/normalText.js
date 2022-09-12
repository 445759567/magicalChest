import {StyleSheet, Text} from "react-native";
import React from "react";
import {connect} from "react-redux";


const styles = StyleSheet.create({
    lightMode:{
        color: '#6b6b6b',
        padding:0,
        margin:0,
    },
})

function NormalText ({italic, font, numberOfLines, fontSize, selectable, adjustsFontSizeToFit, ...props}) {
    return (
        <Text style={[styles.lightMode, { fontSize: fontSize}, props.style]} adjustsFontSizeToFit={adjustsFontSizeToFit} selectable={selectable} numberOfLines={numberOfLines}>
            {props.children}
        </Text>
    );
}
// const mapState = (state) => {
//     return{
//         darkMode: state.account.darkMode
//     }
// }

export default connect(null, null)(NormalText)