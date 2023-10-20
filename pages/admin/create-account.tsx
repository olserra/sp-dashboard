import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";

import ImgSource from "../../public/assets/img/logo-sp.png";
import {
  Input,
  Label,
  Button,
  WindmillContext,
} from "@roketid/windmill-react-ui";

function CrateAccount() {
  const { mode } = useContext(WindmillContext);
  const imgSource =
    mode === "dark"
      ? "/assets/img/create-account-office-dark.jpeg"
      : "/assets/img/create-account-office.jpeg";

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col justify-center items-center overflow-y-auto md:flex-row">
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
                Create account
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
                  placeholder="***************"
                  type="password"
                  crossOrigin={undefined}
                />
              </Label>
              <Label className="mt-4">
                <span>Confirm password</span>
                <Input
                  className="mt-1"
                  placeholder="***************"
                  type="password"
                  crossOrigin={undefined}
                />
              </Label>

              <Label className="mt-6" check>
                <Input type="checkbox" crossOrigin={undefined} />
                <span className="ml-2">
                  I agree to the{" "}
                  <span className="underline">privacy policy</span>
                </span>
              </Label>

              <Link href="/admin/login" passHref={true}>
                <Button block className="mt-4">
                  Create account
                </Button>
              </Link>

              <p className="mt-4">
                <Link href="/admin/login">
                  <p className="text-sm font-medium text-teal-600 dark:text-teal-400 hover:underline">
                    Already have an account? Login
                  </p>
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default CrateAccount;
