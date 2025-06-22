import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [],
  // It doesn't matter if you have this "callbacks" property commented or not, in either case `middleware.ts` won't run.
  //
  // callbacks: {
  //   authorized: async () => {
  //     console.log("Hello world from auth.ts");
  //     return true;
  //   },
  // },
});
