import AuthLayout from "../components/AuthLayout";
import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Join TRAFIKKING X and become part of the intelligent emergency response ecosystem."
    >
      <RegisterForm />
    </AuthLayout>
  );
}