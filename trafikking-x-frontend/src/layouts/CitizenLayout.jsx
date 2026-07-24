import BaseLayout from "./BaseLayout";

export default function CitizenLayout({ children }) {
  return (
    <BaseLayout sidebar={null}>
      {children}
    </BaseLayout>
  );
}