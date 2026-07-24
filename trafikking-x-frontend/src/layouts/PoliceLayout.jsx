import BaseLayout from "./BaseLayout";

export default function PoliceLayout({ children }) {
  return (
    <BaseLayout sidebar={null}>
      {children}
    </BaseLayout>
  );
}