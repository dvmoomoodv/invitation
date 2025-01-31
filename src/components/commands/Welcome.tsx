import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
  _    _  ____  ____  ____  ____  _  _  ___     ___    __    ____  ____  
 ( \\/\\/ )( ___)(  _ \\(  _ \\(_  _)( \\( )/ __)   / __)  /__\\  (  _ \\(  _ \\ 
  )    (  )__)  )(_) ))(_) )_)(_  )  (( (_-.  ( (__  /(__)\\  )   / )(_) )
 (__/\\__)(____)(____/(____/(____)(_)\\_)\\___/   \\___)(__)(__)(_)\\_)(____/ 
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
  _    _  ____  ____  ____  ____  _  _  ___ 
 ( \\/\\/ )( ___)(  _ \\(  _ \\(_  _)( \\( )/ __)
  )    (  )__)  )(_) ))(_) )_)(_  )  (( (_-.
    (__/\\__)(____)(____/(____/(____)(_)\\_)\\___/   

  ___    __    ____  ____  
 / __)  /__\\  (  _ \\(  _ \\ 
( (__  /(__)\\  )   / )(_) )
 \\___)(__)(__)(_)\\_)(____/ 
 
          `}
          </PreNameMobile>
        </PreWrapper>
        
        <div>
          이무현♥백사랑 웨딩카드 홈페이지에 오신분들 환영합니다. (Version 1.0.0)
        </div>
        <Seperator>----</Seperator>
        <div>
          이 프로젝트 소스는 Github에서 확인 가능합니다 @satnaing 포트폴리오
          소스를 참고하였습니다.{" "}
          <Link href="https://github.com/dvmoomoodv/invitation">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          가능한 명령어는 `<Cmd>help</Cmd>` 명령어를 통해 확인이 가능합니다..
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                     ..ooo.
                     .888888888.
                     88"P""T"T888 8o
                 o8o 8.8"8 88o."8o 8o
                88 . o88o8 8 88."8 88P"o
               88 o8 88 oo.8 888 8 888 88
               88 88 88o888" 88"  o888 88
               88."8o."T88P.88". 88888 88
               888."888."88P".o8 8888 888
               "888o"8888oo8888 o888 o8P"
                "8888.""888P"P.888".88P
                 "88888ooo  888P".o888
                   ""8P"".oooooo8888P
          .oo888ooo.    88NICK888P8
        o88888"888"88o.  "8888"".88   .oo888oo..
         8888" "88 88888.       88".o88888888"888.
         "8888o.""o 88"88o.    o8".888"888"88 "88P
          T888C.oo. "8."8"8   o8"o888 o88" ".=888"
           88888888o "8 8 8  .8 .8"88 8"".o888o8P
            "8888C.o8o  8 8  8" 8 o" ...o"""8888
              "88888888 " 8 .8  8   88888888888"
                "8888888o  .8o=" o8o..o(8oo88"
                    "888" 88"    888888888""
                        o8P       "888"""
                  ...oo88
         "8oo...oo888""       
           ""888""
            
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
