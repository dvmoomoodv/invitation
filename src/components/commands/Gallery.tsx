import {
  AboutWrapper, Image
} from "../styles/About.styled";



const About: React.FC = () => {

  const images = [
    '/gallery/photo1.jpg',
    '/gallery/photo2.jpg',
    '/gallery/photo3.jpg',
    '/gallery/photo4.jpg',
    '/gallery/photo5.jpg',
  ];


  return (
    <AboutWrapper data-testid="about">
   <div>
   {images.map((image, index) => (
        <div key={index} className="relative">
          <Image>
            <img src={image} alt={`Image ${index + 1}`} />
          </Image>
        </div>
      ))}
        </div>
    </AboutWrapper>
  );
};

export default About;
