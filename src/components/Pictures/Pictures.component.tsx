import {
  PictureContainer,
  PictureGrid,
  PictureItem,
  PictureImage,
} from "./Pictures.styles";

const pictures = [
  "/assets/pictures/picture-1.png",
  "/assets/pictures/picture-2.png",
  "/assets/pictures/picture-3.png",
  "/assets/pictures/picture-4.png",
  "/assets/pictures/picture-5.png",
  "/assets/pictures/picture-6.png",
  "/assets/pictures/picture-7.png",
  "/assets/pictures/picture-8.png",
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
