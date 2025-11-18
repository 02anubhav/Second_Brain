import { createUser } from "@/app/actions";
import Button from "@/app/components/ui/button";
import Input from "@/app/components/ui/input";
import Container from "@/common/container";
import LogoIcon from "@/icons/logo-icon";

export default async function Signup() {
  return (
    <form action={createUser}>
      <Container className="flex justify-center items-center h-screen">
        <div className="flex flex-col gap-4  max-w-md mx-auto mt-20 backdrop-blur-md bg-white/30 p-8 rounded-lg shadow-lg ">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border border-gray-200 p-1.5 rounded-xl mb-4 shadow-sm">
              <LogoIcon className="size-10" />
            </div>
            <h1 className="text-2xl font-bold font-manrope mb-2 text-center">
              Sign Up
            </h1>
            <p className="text-gray-500 text-center mb-4">
              Welcome back! Please sign in to your account.
            </p>
          </div>
          <div>
            <h1 className="text-gray-500 mb-2">username</h1>
            <Input name="username" type="text" placeholder="username" />
          </div>
          <div>
            <h1 className="text-gray-500 mb-2">password</h1>
            <Input name="password" placeholder="password" type="password" />
          </div>
          <Button type="submit" className="mt-4" variant="primary" size="lg" text="Sign Up" />
        </div>
      </Container>
    </form>
  );
}
