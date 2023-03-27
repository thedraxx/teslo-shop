import { IUser } from '@/interfaces';
import { createContext } from 'react';

export interface AuthContextProps {
    isLoggedIn: boolean;
    user?: IUser;

    // methods
    loginUser: (email: string, password: string) => Promise<boolean>;
    registerUser: (name: string, email: string, password: string) => Promise<{ hasError: boolean; message?: string }>;
}

export const AuthContext = createContext({} as AuthContextProps);