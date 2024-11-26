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

        // Validate user credentials (replace with actual validation)
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
        token.email = user.email; // Optionally add email to token
      }

      // Set token expiry time (1 hour) here
      const expiryTime = 60 * 60; // 1 hour in seconds
      if (!token.exp) {
        token.exp = Math.floor(Date.now() / 1000) + expiryTime; // JWT expiration in seconds
      }
      
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id; // Add user ID to session
        session.user.email = token.email; // Optionally add email to session
      }
      return session;
    },
  },
  session: {
    strategy: "jwt", // Use stateless JWT for session management
    maxAge: 60 * 60, // Set session expiration time to 1 hour (60 minutes * 60 seconds)
  },
  // pages: {
  //   signIn: "/auth/signin", // Optional: Customize sign-in page if needed
  // },
});
