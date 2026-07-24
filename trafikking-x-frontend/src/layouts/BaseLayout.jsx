import React from "react";

const BaseLayout = ({
  sidebar,
  children,
}) => {
  return (
    <div className="min-h-screen bg-background flex">

      {sidebar}

      <main className="flex-1 overflow-auto">
        {children}
      </main>

    </div>
  );
};

export default BaseLayout;