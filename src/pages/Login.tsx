import Image from "next/image";

const Login = () => {
  return (
    <div className="min-h-screen w-full px-4 py-8 sm:px-8 lg:px-16 xl:px-24">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-10 xl:gap-14">
        <div className="hidden flex-1 flex-col justify-center lg:flex">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.svg"
              alt="ByteSpace logo"
              width={29}
              height={32}
              className="w-auto h-auto"
            />
          </div>

          <div className="max-w-140 mt-13.25">
            <h1 className="font-poppins text-[20px] font-semibold leading-[120%] tracking-[-1%] bg-shuttle-gradient bg-clip-text text-transparent">
              Sign in with ease
            </h1>
            <p className="mt-4 max-w-118.75 text-lg text-shuttle-gray-50 leadin-[160%]">
              Experience a seamless and efficient sign-in process that grants
              you instant access to a world of knowledge.
            </p>
          </div>

          <div className="relative mt-10 max-w-130">
            <div className="overflow-hidden">
              <Image
                src="/images/register-image.png"
                alt="Register preview"
                width={640}
                height={520}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full max-w-144.75 max-h-196 rounded-3xl bg-white p-6  sm:p-8 lg:p-10">
          <div className="mb-8">
            <p className="text-lg font-normal text-persian-blue-800">
              Create an Account
            </p>
            <h2 className="mt-2 font-satoshi font-semibold max-w-113.25 text-[44px] leading-[120%] tracking-[-1%]  text-shuttle-gray-950">
              Welcome to ByteSpace
            </h2>
          </div>

          <form className="space-y-6">
            <div>
              <label className="mb-2 block text-base font-medium text-[#111827]/80">
                Email
              </label>
              <input
                type="email"
                defaultValue="designer@example.com"
                className="w-full rounded-[18px] border border-[#d4d4d4] bg-white px-4 py-4 text-lg text-[#111827] outline-none transition focus:border-[#003be2] focus:ring-2 focus:ring-[#003be2]/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-base font-medium text-[#111827]/80">
                Password
              </label>
              <input
                type="password"
                defaultValue="********"
                className="w-full rounded-[18px] border border-[#d4d4d4] bg-white px-4 py-4 text-lg text-[#111827] outline-none transition focus:border-[#003be2] focus:ring-2 focus:ring-[#003be2]/20"
              />
            </div>

            <button
              type="submit"
              className="mt-4 flex w-full items-center justify-center rounded-full bg-[#d6ff20] px-5 py-4 text-lg font-bold text-[#111827] shadow-[0_12px_24px_rgba(214,255,32,0.4)] transition hover:brightness-95"
            >
              Continue
            </button>
          </form>

          <p className="mt-8 text-center text-base text-[#111827]">
            New user?{" "}
            <span className="font-bold underline">Create an account</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
