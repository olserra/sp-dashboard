import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import ImgSource from "../../public/assets/img/logo-sp.png";

import {
  Label,
  Input,
  Button,
  WindmillContext,
} from "@roketid/windmill-react-ui";

function ForgotPassword() {
  const { mode } = useContext(WindmillContext);
  const imgSource =
    mode === "dark"
      ? "/assets/img/forgot-password-office-dark.jpeg"
      : "/assets/img/forgot-password-office.jpeg";

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
                Forgot password
              </h1>

              <Label>
                <span>Email</span>
                <Input
                  className="mt-1"
                  placeholder="Jane Doe"
                  crossOrigin={undefined}
                />
              </Label>

              <Link href="/admin" passHref={true}>
                <Button tag={"button"} block className="mt-4">
                  Recover password
                </Button>
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
