import {
  GalleryContainer,
  GalleryTitle,
  GallerySubtitle,
  GalleryGrid,
  GalleryItem,
  GalleryImage,
} from './Gallery.styles';

const images = [
  '/assets/gallery/gallery-1.png',
  '/assets/gallery/gallery-2.png',
  '/assets/gallery/gallery-3.png',
  '/assets/gallery/gallery-4.png',
  '/assets/gallery/gallery-5.png',
  '/assets/gallery/gallery-6.png',
  '/assets/gallery/gallery-7.png',
  '/assets/gallery/gallery-8.png',
  '/assets/gallery/gallery-9.png',
  '/assets/gallery/gallery-10.png',
  '/assets/gallery/gallery-11.png',
  '/assets/gallery/gallery-12.png',
  '/assets/gallery/gallery-13.png',
  '/assets/gallery/gallery-14.png',
  '/assets/gallery/gallery-15.png',
  '/assets/gallery/gallery-16.png',
  '/assets/gallery/gallery-17.png',
  '/assets/gallery/gallery-18.png',
  '/assets/gallery/gallery-19.png',
  '/assets/gallery/gallery-20.png',
];

const GallerySection = () => {
  return (
    <GalleryContainer>
      <GalleryTitle>GALLERY</GalleryTitle>
      <GallerySubtitle>
        Get a closer look at just some of the events and culinary creations our team had the pleasure of bringing to life.
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
