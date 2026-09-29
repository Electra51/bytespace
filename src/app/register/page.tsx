import AuthLayout from "@/components/common/AuthLayout";
import RegisterForm from "@/pages/Register";

const RegisterPage = () => {
  return (
    <AuthLayout
      visualTitle="Sign up and come in"
      visualDescription="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
