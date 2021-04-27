import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    activeSubscription: Record<string, any> | boolean;
  }
}
