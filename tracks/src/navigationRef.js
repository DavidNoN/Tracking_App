import React from 'react';
import { CommonActions } from '@react-navigation/native';
import { NavigationActions } from '@react-navigation/compat';


let navigator;

export const setNavigator = ( nav ) => {
    navigator = nav;
}

export const navigate = (name, params) => {
    navigator.dispatch(
        CommonActions.navigate({
                                   name,
                                   params
                               })
    );
};

export const HomeNavigate = ( name, routeName, params ) => {
    navigator.dispatch(
        CommonActions.navigate( name,
    {
        screen: routeName,
            params
    }
)
);
};