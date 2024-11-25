import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession`, and received as a prop on the `SessionProvider`.
   */
  interface Session {
    user: {
      id: string; // Unique user ID
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string; // Unique user ID
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string; // Unique user ID
  }
}
