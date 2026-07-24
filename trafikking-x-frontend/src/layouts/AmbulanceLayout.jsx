import BaseLayout from "./BaseLayout";

export default function AmbulanceLayout({ children }) {
  return (
    <BaseLayout sidebar={null}>
      {children}
    </BaseLayout>
  );
}