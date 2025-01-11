import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Example user lookup (replace with your database logic)
        const user = {
          id: "1",
          name: "John Doe",
          email: credentials?.email,
          image: null,
        };

        if (user && credentials?.password === "password123") {
          return user;
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt", 
    maxAge: 60 * 60, 
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; 
        token.email = user.email; 
      }

     
      const expiryTime = 60 * 60; 
      if (!token.exp) {
        token.exp = Math.floor(Date.now() / 1000) + expiryTime; 
      }
      
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id; 
        session.user.email = token.email; 
      }
      return session;
    },
  },
 
  cookies: {
    sessionToken: {
      name: "next-auth.session-token", // Customize the cookie name if needed
      options: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Make sure this is true in production
        path: "/",
        sameSite: "lax", // Adjust if needed
      },
    },
  },

});
