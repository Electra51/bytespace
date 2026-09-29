import AuthLayout from "@/components/common/AuthLayout";
import LoginForm from "@/pages/Login";

const LoginPage = () => {
  return (
    <AuthLayout
      visualTitle="Sign in with ease"
      visualDescription="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;
