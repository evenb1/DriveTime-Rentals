// /utils/authHelpers.ts

import { supabase } from '../lib/supabaseClient';

// Sign-in with email and password
export const signInWithEmail = async (email: string, password: string) => {
  const { user, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return user;
};

// Sign-up with email and password
export const signUpWithEmail = async (email: string, password: string) => {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) throw error;
  return user;
};

// Sign-in with OAuth (Google, Apple, etc.)
export const signInWithProvider = async (provider: 'google' | 'apple') => {
  const { user, error } = await supabase.auth.signInWithOAuth({
    provider,
  });
  if (error) throw error;
  return user;
};

// Sign-out
export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};