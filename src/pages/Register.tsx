import Link from "next/link";

const RegisterForm = () => {
  return (
    <>
      <div className="mb-8 md:mb-3 lg:mb-8">
        <p className="text-lg font-normal text-persian-blue-800">
          Create an Account
        </p>

        <h1 className="mt-2 max-w-113.25 font-satoshi text-[30px] lg:text-[44px] font-semibold leading-[120%] tracking-[-1%] text-shuttle-gray-950">
          Welcome to ByteSpace
        </h1>
      </div>

      <form className="mt-10 space-y-3 lg:space-y-8 xl:space-y-6">
        <div>
          <label
            htmlFor="full_name"
            className="block text-sm font-medium text-shuttle-gray-950"
          >
            Full name
          </label>

          <input
            id="full_name"
            name="full_name"
            type="text"
            defaultValue="jamie Davis"
            className="mt-2 w-full rounded-xl border border-shuttle-gray-100 px-4 py-3 text-lg text-shuttle-gray-400 outline-none transition focus:border-electric-lime-400 focus:ring-2 focus:ring-electric-lime-400"
          />
        </div>

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
            Continue
          </button>
        </div>
      </form>

      <p className="mt-15 md:mt-26.5 text-center text-base leading-[160%] text-black-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-base font-normal text-persian-blue-800 hover:underline"
        >
          Login
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
