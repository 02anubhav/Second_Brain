"use client";
import Button from "@/app/components/ui/button";
import Input from "@/app/components/ui/input";
import Container from "@/common/container";
import LogoIcon from "@/icons/logo-icon";
import { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSignup = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/v1/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      alert(data.message);
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong");
    }
  };

  return (
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
          <Input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <h1 className="text-gray-500 mb-2">password</h1>
          <Input
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          className="mt-4"
          variant="primary"
          size="lg"
          onClick={handleSignup}
          text="Sign Up"
        />
      </div>
    </Container>
  );
}
