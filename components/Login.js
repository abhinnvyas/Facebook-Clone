import Image from "next/image";
import { signIn } from "next-auth/client";

function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        className="mx-auto"
        src="https://links.papareact.com/t4i"
        width={400}
        height={400}
        objectFit="contain"
      />
      <h1
        onClick={signIn}
        className="p-5 bg-blue-500 rounded-full text-white font-bold text-center
      cursor-pointer  shadow-xl hover:shadow-2xl active:scale-90 transition transform ease-out"
      >
        Login with Facebook
      </h1>
    </div>
  );
}

export default Login;
