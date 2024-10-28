// import { supabase } from './supabaseClient';

// export const signUpWithEmail = async (email: string, password: string) => {
//     const { data, error } = await supabase.auth.signUp({ email, password });
//     return { user: data?.user, error };
// };

// export const logInWithEmail = async (email: string, password: string) => {
//     const { data, error } = await supabase.auth.signInWithPassword({ email, password });
//     return { user: data?.user, error };
// };

// export const signInWithOAuth = async (provider: 'google' | 'apple') => {
//     const { error } = await supabase.auth.signInWithOAuth({ provider });
//     return { error };
// };