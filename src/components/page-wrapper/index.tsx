import React from "react";

import { StyledPageWrapper } from "./styled";

type PageWrapperProps = {
  children: React.ReactNode;
};

function PageWrapper({ children }: PageWrapperProps) {
  return <StyledPageWrapper>{children}</StyledPageWrapper>;
}

export default PageWrapper;
