import Image from "next/image";
import Link from "next/link";

const LoginForm = () => {
  return (
    <>
      <div className="mb-8 md:mb-3 lg:mb-8">
        <p className="text-lg font-normal text-persian-blue-800">Sign In</p>

        <h1 className="mt-2 max-w-113.25 font-satoshi text-[30px] lg:text-[44px] font-semibold leading-[120%] tracking-[-1%] text-shuttle-gray-950">
          Welcome Back
        </h1>
      </div>

      <form className="mt-10 space-y-3 lg:space-y-8 xl:space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-shuttle-gray-950"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            defaultValue="designer@example.com"
            className="mt-2 w-full rounded-xl border border-shuttle-gray-100 px-4 py-3 text-lg text-shuttle-gray-400 outline-none transition focus:border-electric-lime-400 focus:ring-2 focus:ring-electric-lime-400"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-shuttle-gray-950"
          >
            Password
          </label>

          <input
            id="password"
            name="password"
            type="password"
            defaultValue="********"
            className="mt-2 w-full rounded-xl border border-shuttle-gray-100 px-4 py-3 text-lg text-shuttle-gray-400 outline-none transition focus:border-electric-lime-400 focus:ring-2 focus:ring-electric-lime-400"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="mt-4 flex items-center justify-center rounded-full bg-electric-lime-400 px-6 py-3 text-lg font-medium leading-[120%] text-shuttle-gray-950"
          >
            Sign In
          </button>
        </div>
      </form>

      <div className="mb-8 md:mb-10 mt-12 md:mt-16.25 flex items-center gap-3">
        <div className="h-px flex-1 bg-black-200" />

        <span className="text-lg leading-[160%] text-black-400">or</span>

        <div className="h-px flex-1 bg-black-200" />
      </div>

      <div className="mb-12 md:mb-15.25 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Continue with Google"
          className="flex h-12 w-12 md:h-18 md:w-18 items-center justify-center rounded-2xl md:rounded-3xl border border-black-200 transition-colors duration-200 hover:bg-gray-50"
        >
          <Image
            src="/images/google.svg"
            alt=""
            width={34}
            height={34}
            className="h-6 w-6 md:h-8.5 md:w-8.5"
          />
        </button>

        <button
          type="button"
          aria-label="Continue with Facebook"
          className="flex h-12 w-12 md:h-18 md:w-18 items-center justify-center rounded-2xl md:rounded-3xl border border-black-200 transition-colors duration-200 hover:bg-gray-50"
        >
          <Image
            src="/images/fb.svg"
            alt=""
            width={34}
            height={34}
            className="h-6 w-6 md:h-8.5 md:w-8.5"
          />
        </button>
      </div>

      <p className="text-center text-base leading-[160%] text-black-400">
        New user?{" "}
        <Link
          href="/register"
          className="text-base font-normal text-persian-blue-800 hover:underline"
        >
          Create an account
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
