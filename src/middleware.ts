import { auth } from "@/auth";

export default auth(() => {
  console.log("Hello world from app/middleware.ts");
});
