import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';

const SignInScreen = () => {
    
    const { state, signIn } = useContext( Context );
    
    return (
        <View style={ styles.container }>
            <AuthForm
                headerText="Sign In to your Account"
                errorMessage={ state.errorMessage }
                onSubmit={ signIn }
                submitButtonText="Sign In"
            />
            <NavLink text="Don't have an account? Sign up instead"
                     routeName="SignUp"/>
        </View>
    );
};


const styles = StyleSheet.create( {
                                      container: {
                                          flex: 1,
                                          justifyContent: 'center',
                                          marginBottom: 250
                                      }
                                  } );

export default SignInScreen;