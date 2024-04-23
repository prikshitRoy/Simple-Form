import SignUp from "@/app/(auth)/sign-up/page";
import SignIn from "@/app/(auth)/sign-in/page";

export default function AuthHeader() {
  return (
    <>
      <SignIn />
      <SignUp />
    </>
  );
}
