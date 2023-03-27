import { useEffect, useReducer, useState } from 'react';
import { AuthContext, authReducer } from './';
import { IUser } from '../../interfaces/user';
import testloAPI from '../../api/testloAPI';
import Cookies from 'js-cookie';
import axios from 'axios';
export interface AuthState {
    isLoggedIn: boolean;
    user?: IUser;
}

const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    user: undefined
};

interface Props {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

    useEffect(() => {
        checkToken();
    }, [])


    const checkToken = async () => {
        try {
            const { data } = await testloAPI.get(`/user/validate-token`);

            Cookies.set('token', data.token);

            dispatch({
                type: '[Auth] - Login',
                payload: data
            });

            return true;

        } catch (error) {
            Cookies.remove('token');
        }

    }

    const loginUser = async (email: string, password: string): Promise<boolean> => {
        try {
            const { data } = await testloAPI.post('/user/login', { email, password });

            const { user, token } = data;

            Cookies.set('token', token);

            dispatch({
                type: '[Auth] - Login',
                payload: user
            });

            return true;

        } catch (error) {
            console.log(error)
            return false;
        }
    }

    const registerUser = async (name: string, email: string, password: string): Promise<{ hasError: boolean; message?: string }> => {


        try {

            const { data } = await testloAPI.post('/user/register', { name, email, password });

            const { user, token } = data;

            Cookies.set('token', token);

            dispatch({
                type: '[Auth] - Login',
                payload: user
            });

            return {
                hasError: false,
                message: 'Usuario creado correctamente'
            }

        } catch (error) {
            if (axios.isAxiosError(error)) {
                return {
                    hasError: true,
                    message: error.response?.data.message
                }
            }
            return {
                hasError: true,
                message: 'Error desconocido, no se pudo crear el usuario'
            }
        }
    }

    return (
        <AuthContext.Provider value={{
            ...state,
            // methods
            loginUser,
            registerUser

        }}>
            {children}
        </AuthContext.Provider>
    )
}