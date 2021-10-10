import React from "react";
import { ToastContainer } from "react-toastify";

import { StyledPageWrapper } from "./styled";

type PageWrapperProps = {
  children: React.ReactNode;
};

function PageWrapper({ children }: PageWrapperProps) {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <StyledPageWrapper>{children}</StyledPageWrapper>
    </>
  );
}

export default PageWrapper;
