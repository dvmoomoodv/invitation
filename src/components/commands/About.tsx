import {
  AboutWrapper,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
   <div>
          <pre>
            <br />
            | 지치고 힘들어 움츠렸던 삶 속에서<br />
            | 서로가 건넨 손과 말 한마디로 인연이 되어<br />
            | 풋풋한 사랑을 키워왔습니다.<br />
            |<br />
            | 걸어도 걸어도 더딘 삶을 하나의 마음으로 외로움, 두려움 없이
            <br />
            | 넓은 바다를 마음에 품고, 흰수염 고래가 헤엄치듯<br />
            | 저희의 사랑의 큰 한걸음 시작의 자리에 초대합니다.<br />
            |<br />
            | 귀한 걸음으로 축하해주시면 감사함을 간직하며 살겠습니다.<br />
            |<br />
            | 이무현, 백사랑 올림<br />
            <br />
          </pre>
        </div>
    </AboutWrapper>
  );
};

export default About;
