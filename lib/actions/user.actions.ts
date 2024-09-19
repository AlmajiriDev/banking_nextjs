'use server';

import { ID } from 'node-appwrite';
import { createAdminClient } from './appWrite';
import { cookies } from 'next/headers';
import { parseStringify } from '../utils';

export const signIn = async () => {
  try {
  } catch (error) {
    console.error('Error', error);
  }
};

export const signUp = async (userData: SignUpParams) => {
  try {
    const { account } = await createAdminClient();
    const { email, password, firstName, lastName } = userData;
    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`,
    );
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set('appwrite-session', session.secret, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
    });

    return parseStringify(newUserAccount)
  } catch (error) {
    console.error('Error', error);
  }
};

export async function getLoggedInUser() {}
