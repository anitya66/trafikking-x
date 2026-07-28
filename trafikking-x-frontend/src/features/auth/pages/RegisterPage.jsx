import AuthLayout from "../components/AuthLayout";
import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Join TRAFIKKING X"
      subtitle="Create your account to access the AI-powered emergency response ecosystem and help coordinate life-saving operations in real time."
    >
      <RegisterForm />
    </AuthLayout>
  );
}