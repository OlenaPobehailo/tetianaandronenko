'use client';
import Image from 'next/image';
import { useState } from 'react';
import Gallery from 'react-photo-gallery';
import { images } from '@/assets/images';
import Loader from '../Loader';
import Modal from '../Modal';
import css from './PhotoGallery.module.css';

const {
  model_1082,
  model_1083,
  model_1084,
  model_1088,
  model_1091,
  model_1093,
  model_1095,
  model_1098,
  model_1101,
  model_1103,
  model_1104,
  model_1106,
  model_1107,
  model_1108,
  model_1116,
  model_1122,
  model_1123,
  model_1126,
  model_1127,
  model_1130,
} = images;

export interface IPhotoGalleryProps {}

const photos = [
  {
    src: model_1082.src,
    width: 2,
    height: 3,
    alt: 'Black and white photo of a model sitting on the floor, wearing black pants and a white shirt',
    key: '0',
  },
  {
    src: model_1083.src,
    width: 2,
    height: 3,
    alt: 'Black and white photo of a smiling model sitting on the sofa',
    key: '1',
  },
  {
    src: model_1084.src,
    width: 2,
    height: 3,
    alt: 'Black and white photo of a model with large stylish earrings',
    key: '2',
  },

  {
    src: model_1088.src,
    width: 2,
    height: 3,
    alt: 'Black and white photo of a model sitting on the sofa',
    key: '3',
  },
  {
    src: model_1091.src,
    width: 2,
    height: 3,
    alt: 'Black and white photo of a smiling model in a white shirt',
    key: '4',
  },

  {
    src: model_1093.src,
    width: 2,
    height: 3,
    alt: 'Black and white photo of a model wearing black jacket and a white shirt with stylish accessories',
    key: '5',
  },
  {
    src: model_1095.src,
    width: 2,
    height: 3,
    alt: 'Photo of a model sitting in the armchair, wearing black pants and a white shirt',
    key: '6',
  },
  {
    src: model_1098.src,
    width: 2,
    height: 3,
    alt: 'Photo of a model standing near wooden bar stool. The model is wearing in a black suit and a white blouse',
    key: '7',
  },
  {
    src: model_1101.src,
    width: 2,
    height: 3,
    alt: 'Photo of a standing model. The model is wearing in a black suit and a white blouse',
    key: '8',
  },

  {
    src: model_1103.src,
    width: 2,
    height: 3,
    alt: 'Photo of a model sitting on the floor, wearing black suit and a white shirt',
    key: '9',
  },

  {
    src: model_1104.src,
    width: 2,
    height: 3,
    alt: 'Photo of a model sitting on a chair, wearing  a white shirt and a black pants',
    key: '10',
  },

  {
    src: model_1106.src,
    width: 2,
    height: 3,
    alt: 'Photo of a model sitting on the chair, wearing black pants and a white shirt,  , with bright sunlight streaming in through the window',
    key: '11',
  },
  {
    src: model_1107.src,
    width: 2,
    height: 3,
    alt: 'Photo of a standing model. The model is wearing in a black suit, a white blouse , and high-heeled shoes.',
    key: '12',
  },
  {
    src: model_1108.src,
    width: 2,
    height: 3,
    alt: 'A model with bare feet, dressed in a light dress, is sitting on the sofa',
    key: '13',
  },
  {
    src: model_1116.src,
    width: 2,
    height: 3,
    alt: 'A model with bare feet, dressed in a light dress, is sitting on the floor near the sofa',
    key: '14',
  },
  {
    src: model_1122.src,
    width: 2,
    height: 3,
    alt: 'A model dressed in a light dress, is seated, leaning back on the sofa.',
    key: '15',
  },
  {
    src: model_1123.src,
    width: 2,
    height: 3,
    alt: 'A smiling model dressed in a red dress, is seating on a wooden bar stool.',
    key: '16',
  },
  {
    src: model_1126.src,
    width: 2,
    height: 3,
    alt: 'A  model dressed in a red dress, wearing glasses.',
    key: '17',
  },
  {
    src: model_1127.src,
    width: 2,
    height: 3,
    alt: 'A model with bare feet, dressed in a white shirt and black pants, is sitting on the floor',
    key: '18',
  },
  {
    src: model_1130.src,
    width: 2,
    height: 3,
    alt: 'A model with bare feet, dressed in a white shirt and black pants, is standing by the window.',
    key: '19',
  },
];

const PhotoGallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingPhoto, setLoadingPhoto] = useState(true);

  const openModal = (event: React.MouseEvent, photo: { index: number }) => {
    const { index } = photo;

    setSelectedPhoto(photos[index].src);
    setShowModal(true);
    setLoadingPhoto(true);

    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setShowModal(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <div>
      {loading && <Loader />}
      <Gallery
        photos={photos}
        onClick={openModal}
        direction="row"
        margin={4}
        renderImage={({ photo, margin, onClick }) => (
          <div
            key={photo.key}
            className={css.galleryItem}
            style={{
              margin,
              height: photo.height,
              width: photo.width,
            }}
            onClick={event =>
              photo.key
                ? onClick!(event, {
                    index: parseInt(photo.key),
                  })
                : undefined
            }
          >
            <Image
              src={photo.src}
              alt={photo.alt || photo.src}
              className={css.imageContainer}
              style={{ cursor: 'pointer' }}
              onLoad={() => setLoading(false)}
              width={photo.width}
              height={photo.height}
            />
          </div>
        )}
      />

      <Modal isOpen={showModal} onClose={closeModal}>
        {selectedPhoto && (
          <Image
            className={css.imageContainer}
            src={selectedPhoto}
            alt={
              photos.find(photo => photo.src === selectedPhoto)?.alt ||
              selectedPhoto
            }
            style={{ width: '100%', height: 'auto' }}
            onLoad={() => setLoadingPhoto(false)}
            width="1000"
            height="1000"
          />
        )}
        {loadingPhoto && <Loader />}
      </Modal>
    </div>
  );
};

export default PhotoGallery;
