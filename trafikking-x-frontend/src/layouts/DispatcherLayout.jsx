import BaseLayout from "./BaseLayout";

export default function DispatcherLayout({ children }) {
  return (
    <BaseLayout sidebar={null}>
      {children}
    </BaseLayout>
  );
}