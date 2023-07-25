import React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import * as Yup from 'yup';

import colors from '../config/colors';
import Screen from '../components/Screen';
import { AppForm, AppFormField, AppSubmitButton } from '../components/forms';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(6).label('Password')
})




const LoginScreen = (props) => {
    return (
        <Screen passedStyle={{justifyContent: 'flex-start'}}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>SwellFinder</Text>
            </View>
            
            <AppForm 
            style={styles.formContainer}
            initialValues={{email: '', password: ''}}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
            >
                <AppFormField
                autoCapitalize='none'
                autoCorrect={false}
                icon='email'
                keyboardType='email-address'
                name='email'
                placeholder='Email'
                textContentType='emailAddress'
                />

                <AppFormField
                autoCapitalize='none'
                autoCorrect={false}
                icon='lock'
                name='password'
                placeholder='Password'
                secureTextEntry
                textContentType='password'
                />

                <AppSubmitButton title='Login' />
            </AppForm>
        </Screen>
    );
}




const styles = StyleSheet.create({
    logoContainer: {
        flex: 2,
        padding: screenWidth * .05,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoText: {
        fontFamily: 'Inter-Black',
        fontSize: screenHeight * .05,
        fontWeight: 'bold',
        color: colors.white
    },
    formContainer: {
        padding: 10,
        flex: 4,
        width: '100%'
    }
});

export default LoginScreen;
