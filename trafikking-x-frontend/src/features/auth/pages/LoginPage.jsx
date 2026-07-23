import AuthLayout from "../components/AuthLayout";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout
      title="Emergency Command Center"
      subtitle="Sign in to access TRAFIKKING X and manage emergency response operations in real time."
    >
      <LoginForm />
    </AuthLayout>
  );
}