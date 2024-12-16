"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LockIcon } from "lucide-react";
import Link from "next/link";

export default function NotLoggedIn() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(timer); // Clear the interval when countdown reaches 0
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Clean up the timer on component unmount
  }, []);

  useEffect(() => {
    // Redirect when countdown reaches 0
    if (countdown === 0) {
      router.push("/auth/signin");
    }
  }, [countdown, router]);

  const handleSignIn = () => {
    router.push("/auth/signin");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
            <LockIcon className="mr-2 h-6 w-6 text-yellow-500" />
            Not Logged In
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600 mb-4">
            You need to be logged in to access this content.
          </p>
          <p className="text-center text-gray-500 text-sm">
            Redirecting to sign-in page in {countdown} seconds...
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">
            <Link href="/">Home Page</Link>
          </Button>
          <Button onClick={handleSignIn}>Sign In Now</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
