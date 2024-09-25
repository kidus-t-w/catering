import {
  PictureContainer,
  PictureGrid,
  PictureItem,
  PictureImage,
} from "./Pictures.styles";

const pictures = [
  "https://github.com/kidus-t-w/catering/blob/main/public/assets/pictures/picture-1.png?raw=true",
  "https://github.com/kidus-t-w/catering/blob/main/public/assets/pictures/picture-2.png?raw=true",
  "https://github.com/kidus-t-w/catering/blob/main/public/assets/pictures/picture-3.png?raw=true",
  "https://github.com/kidus-t-w/catering/blob/main/public/assets/pictures/picture-4.png?raw=true",
  "https://github.com/kidus-t-w/catering/blob/main/public/assets/pictures/picture-5.png?raw=true",
  "https://github.com/kidus-t-w/catering/blob/main/public/assets/pictures/picture-6.png?raw=true",
  "https://github.com/kidus-t-w/catering/blob/main/public/assets/pictures/picture-7.png?raw=true",
  "https://github.com/kidus-t-w/catering/blob/main/public/assets/pictures/picture-8.png?raw=true",
];

const Pictures = () => {
  return (
    <PictureContainer>
      <PictureGrid>
        {pictures.map((image, index) => (
          <PictureItem key={index}>
            <PictureImage src={image} alt={image} />
          </PictureItem>
        ))}
      </PictureGrid>
    </PictureContainer>
  );
};

export default Pictures;
