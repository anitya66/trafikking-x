import BaseLayout from "./BaseLayout";

export default function AdminLayout({ children }) {
  return (
    <BaseLayout sidebar={null}>
      {children}
    </BaseLayout>
  );
}