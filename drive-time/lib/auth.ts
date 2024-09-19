// lib/auth.ts
import { supabase } from './supabaseClient';

export const signUpWithEmail = async (email: string, password: string) => {
    const { user, error } = await supabase.auth.signUp({ email, password });
    return { user, error };
};

export const logInWithEmail = async (email: string, password: string) => {
    const { user, error } = await supabase.auth.signIn({ email, password });
    return { user, error };
};

export const signInWithOAuth = async (provider: 'google' | 'apple') => {
    const { user, error } = await supabase.auth.signIn({ provider });
    return { user, error };
};