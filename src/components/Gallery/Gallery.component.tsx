import {
  GalleryContainer,
  GalleryTitle,
  GallerySubtitle,
  GalleryGrid,
  GalleryItem,
  GalleryImage,
} from "./Gallery.styles";

const images = [
  "https://raw.githubusercontent.com/kidus-t-w/catering/refs/heads/main/public/assets/gallery/gallery-1.png",
  "https://raw.githubusercontent.com/kidus-t-w/catering/refs/heads/main/public/assets/gallery/gallery-2.png",
  "https://raw.githubusercontent.com/kidus-t-w/catering/refs/heads/main/public/assets/gallery/gallery-3.png",
  "https://raw.githubusercontent.com/kidus-t-w/catering/refs/heads/main/public/assets/gallery/gallery-4.png",
  "https://raw.githubusercontent.com/kidus-t-w/catering/refs/heads/main/public/assets/gallery/gallery-5.png",
  "https://raw.githubusercontent.com/kidus-t-w/catering/refs/heads/main/public/assets/gallery/gallery-6.png",
  "https://raw.githubusercontent.com/kidus-t-w/catering/refs/heads/main/public/assets/gallery/gallery-7.png",
  "https://raw.githubusercontent.com/kidus-t-w/catering/refs/heads/main/public/assets/gallery/gallery-8.png",
  "https://raw.githubusercontent.com/kidus-t-w/catering/refs/heads/main/public/assets/gallery/gallery-9.png",
  "https://raw.githubusercontent.com/kidus-t-w/catering/refs/heads/main/public/assets/gallery/gallery-10.png",
  "https://raw.githubusercontent.com/kidus-t-w/catering/refs/heads/main/public/assets/gallery/gallery-11.png",
  "https://raw.githubusercontent.com/kidus-t-w/catering/refs/heads/main/public/assets/gallery/gallery-12.png",
  "https://raw.githubusercontent.com/kidus-t-w/catering/refs/heads/main/public/assets/gallery/gallery-13.png",
  "https://raw.githubusercontent.com/kidus-t-w/catering/refs/heads/main/public/assets/gallery/gallery-14.png",
  "https://raw.githubusercontent.com/kidus-t-w/catering/refs/heads/main/public/assets/gallery/gallery-15.png",
  "https://raw.githubusercontent.com/kidus-t-w/catering/refs/heads/main/public/assets/gallery/gallery-16.png",
  "https://raw.githubusercontent.com/kidus-t-w/catering/refs/heads/main/public/assets/gallery/gallery-17.png",
  "https://raw.githubusercontent.com/kidus-t-w/catering/refs/heads/main/public/assets/gallery/gallery-18.png",
  "https://raw.githubusercontent.com/kidus-t-w/catering/refs/heads/main/public/assets/gallery/gallery-19.png",
  "https://raw.githubusercontent.com/kidus-t-w/catering/refs/heads/main/public/assets/gallery/gallery-20.png",
];

const GallerySection = () => {
  return (
    <GalleryContainer>
      <GalleryTitle>GALLERY</GalleryTitle>
      <GallerySubtitle>
        Get a closer look at just some of the events and culinary creations our
        team had the pleasure of bringing to life.
      </GallerySubtitle>
      <GalleryGrid>
        {images.map((image, index) => (
          <GalleryItem key={index}>
            <GalleryImage src={image} alt={`Gallery image ${index + 1}`} />
          </GalleryItem>
        ))}
      </GalleryGrid>
    </GalleryContainer>
  );
};

export default GallerySection;
