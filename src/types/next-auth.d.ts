import type { JWT } from "next-auth/jwt";
import type { Session,User } from "next-auth";

type UserID = string

declare module 'next-auth/jwt' {
  interface JWT {
    id: UserID;
    username: string | null;
  }
}

declare module 'next-auth' {
  interface Session {
    id: UserID;
    username: string | null;
  }
}
