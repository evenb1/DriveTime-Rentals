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
        // Example user lookup (replace this with database logic)
        const user = {
          id: "1",
          name: "John Doe",
          email: credentials?.email,
          image: null,
        };

        // Validate user credentials
        if (user && credentials?.password === "password123") {
          return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id; // Add user ID to the token
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id; // Add user ID to the session
      }
      return session;
    },
  },
  session: {
    strategy: "jwt", // Use stateless JWT for session management
  },
});
