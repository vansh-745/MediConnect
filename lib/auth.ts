import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getServerSession } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Add your authentication logic here
        // For example, verify against your database
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Return null if user data could not be retrieved
        return {
          id: "1",
          email: credentials.email,
          name: "User Name",
          role: "patient"
        };
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.role = token.role;
      }
      return session;
    }
  }
};

export const getSession = async () => {
  const session = await getServerSession(authOptions);
  return session;
}; 