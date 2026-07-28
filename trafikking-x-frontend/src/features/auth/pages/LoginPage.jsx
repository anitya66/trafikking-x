import AuthLayout from "../components/AuthLayout";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout
      title="TRAFIKKING X"
      subtitle="AI-Powered Emergency Response Ecosystem. Sign in to access the command center and coordinate emergency operations in real time."
    >
      <LoginForm />
    </AuthLayout>
  );
}