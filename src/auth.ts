import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],
  callbacks: {
    authorized: async ({ request }) => {
      console.log("Hello world from auth.ts");
      console.log("Request url: " + request.url);
      return true;
    },
  },
});
