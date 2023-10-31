import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>wedding.attendees</User>@
      <WebsiteName>wedding-terminal.dvmoomoodv.com</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
