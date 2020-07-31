import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignUpScreen = ( { navigation } ) => {
    
    const { state, signUp } = useContext( AuthContext );
    
    
    return (
        <View style={ styles.container }>
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={ state.errorMessage }
                submitButtonText="Sign Up"
                onSubmit={ signUp }
            />
            <NavLink
                routeName={ 'SignIn' }
                text="Already have an account? Sign in instead"/>
        </View>
    );
    
};

const styles = StyleSheet.create( {
                                      container: {
                                          flex: 1,
                                          justifyContent: 'center',
                                          marginBottom: 200
                                      }
                                  } );

export default SignUpScreen;