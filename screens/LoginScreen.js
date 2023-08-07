import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, Text, Alert } from 'react-native';
import * as Yup from 'yup';

import colors from '../config/colors';
import Screen from '../components/Screen';
import { AppForm, AppFormField, AppSubmitButton } from '../components/forms';

import authApi from "../api/auth";
import useAuth from "../auth/useAuth";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const validationSchema = Yup.object().shape({
    username: Yup.string().required().min(6).label('Username'),
    password: Yup.string().required().min(6).label('Password')
});




const LoginScreen = (props) => {
    const auth = useAuth();
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({ username, password }) => {
        const result = await authApi.login(username, password);
        if (!result.ok) {
            Alert.alert('Error', result.data.error)
            return setLoginFailed(true);
        }
        setLoginFailed(false);
        auth.logIn(result.data);
    };

    return (
        <Screen passedStyle={{justifyContent: 'flex-start'}}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoText}>SwellFinder</Text>
            </View>
            
            <AppForm 
            style={styles.formContainer}
            initialValues={{username: '', password: ''}}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            >
                <AppFormField
                autoCapitalize='none'
                autoCorrect={false}
                icon="account"
                name="username"
                placeholder="Username"
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
