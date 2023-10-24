import React from "react";
import Link from "next/link";
import Image from "next/image";
import ImgSource from "../../public/assets/img/logo-sp.png";
import GoogleIcon from "../../public/assets/img/google.png";

import { Label, Input, Button } from "@roketid/windmill-react-ui";
import { signIn } from "next-auth/react";

function LoginPage() {
  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col items-center justify-center overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2 flex flex-col items-center justify-center">
            <Image
              aria-hidden="true"
              className=""
              src={ImgSource}
              alt={""}
              height={200}
              width={200}
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Login
              </h1>
              <Label>
                <span>Email</span>
                <Input
                  className="mt-1"
                  type="email"
                  placeholder="john@doe.com"
                  crossOrigin={undefined}
                />
              </Label>

              <Label className="mt-4">
                <span>Password</span>
                <Input
                  className="mt-1"
                  type="password"
                  placeholder="***************"
                  crossOrigin={undefined}
                />
              </Label>

              <Link href="/admin" passHref={true}>
                <Button className="mt-4" block>
                  Log in
                </Button>
              </Link>

              <Link href="/admin" passHref={true}>
                <Button
                  onClick={() => signIn("google")}
                  layout="outline"
                  className="mt-4"
                  block
                >
                  <Image
                    src={GoogleIcon}
                    alt="Google Icon"
                    height={20}
                    width={20}
                    className="mr-2"
                  />
                  Log in
                </Button>
              </Link>

              <div className="mt-4">
                <Link href="/admin/forgot-password">
                  <p className="text-sm font-medium text-teal-600 dark:text-teal-400 hover:underline">
                    Forgot your password?
                  </p>
                </Link>
              </div>
              <div className="mt-1">
                <Link href="/admin/create-account">
                  <p className="text-sm font-medium text-teal-600 dark:text-teal-400 hover:underline">
                    Create account
                  </p>
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
