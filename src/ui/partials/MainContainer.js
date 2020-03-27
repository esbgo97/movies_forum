import React from 'react'
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import GlobalStyles from '../../utils/GlobalStyles';

const MainContainer = (props: any) => {
    return (<>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={GlobalStyles.scrollView}>

                {props.children}
            </ScrollView>
        </SafeAreaView>

    </>)
}

export default MainContainer