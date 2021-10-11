import { StyledIframe } from "./styled";

type IframeProps = {
  src: string;
};

function Iframe({ src }: IframeProps) {
  return <StyledIframe src={src} />;
}

export default Iframe;
