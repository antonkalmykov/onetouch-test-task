import { StyledLoader, StyledImageWrapper } from "./styled";

import { ReactComponent as LoaderImage } from "../../assets/images/loader.svg";

type LoaderProps = {
  loading: boolean;
};

function Loader({ loading }: LoaderProps) {
  if (!loading) return null;

  return (
    <StyledLoader>
      <StyledImageWrapper>
        <LoaderImage />
      </StyledImageWrapper>
    </StyledLoader>
  );
}

export default Loader;
