import React, { ReactNode } from "react";

const ContainerLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="px-4 h-full w-full mx-auto md:px-3 lg:px-4 max-w-[1520px]">
      {children}
    </div>
  );
};

export default ContainerLayout;
