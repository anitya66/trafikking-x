import BaseLayout from "./BaseLayout";

export default function HospitalLayout({ children }) {
  return (
    <BaseLayout sidebar={null}>
      {children}
    </BaseLayout>
  );
}