import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await axios.post(
            `${apiUrl}/authentication/login`,
            {
              email: credentials.email,
              password: credentials.password,
            },
            {
              headers: {
                accept: "application/json",
                "content-type": "application/json",
              },
            }
          );

          const user = res.data;
          console.log("Login response:", user);

          if (res.status === 200 && user && user.token) {
            return { ...user, token: user.token };
          } else {
            return null;
          }
        } catch (error) {
          console.error("Error during authorization:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
    newUser: "/register",
    error: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export async function GET(req, res) {
  return NextAuth(req, res, authOptions);
}

export async function POST(req, res) {
  return NextAuth(req, res, authOptions);
}
