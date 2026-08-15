import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    /** Leave empty for same-domain or fallback to env in production */
    baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL
});

export const { signIn, signUp, useSession } = authClient;