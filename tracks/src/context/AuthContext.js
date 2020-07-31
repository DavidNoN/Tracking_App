import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-community/async-storage';
import { HomeNavigate, navigate } from '../navigationRef';

const authReducer = ( state, action ) => {
    switch ( action.type ) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signIn':
            return { errorMessage: '', token: action.payload };
        default:
            return state;
    }
};

const signUp = ( dispatch ) => async ( { email, password } ) => {
    try {
        const response = await trackerApi.post( '/signup', { email, password } );
        await AsyncStorage.setItem( 'token', response.data.token );
        dispatch( { type: 'signIn', payload: response.data.token } );
        
        HomeNavigate( 'App', 'Home', 'TrackList' )
    } catch ( error ) {
        console.log( error );
        dispatch( {
                      type: 'add_error',
                      payload: 'Something went wrong with Sign up!',
                  } );
    }
};


// const signUp = ( dispatch ) => async {
//     return   => {
//         try {
//             const response = await trackerApi.post( '/signup', { email, password } );
//             await AsyncStorage.setItem( 'token', response.data.token );
//             dispatch( { type: 'signUp', payload: response.data.token } );
//
//             navigate();
//         } catch ( err ) {
//             console.log( err.message );
//             dispatch( { type: 'add_error', payload: 'Something went wrong with sign up' } );
//         }
//     };
// };

const signIn = ( dispatch ) => async ( { email, password } ) => {
        try {
            const response = await trackerApi.post( '/signing', { email, password } );
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type: 'signIn', payload: response.data.token});
            navigate('TrackList');
        } catch ( error ) {
            console.log( error );
            dispatch( {
                          type: 'add_error',
                          payload: 'Something went wrong with sign in'
                      } );
        }
};

const signOut = ( dispatch ) => {
    return () => {
        //s somehow sign out
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signIn, signOut, signUp },
    { token: null, errMessage: '' }
);