'use client';

import Image from 'next/image';
import { useState } from 'react';
import Gallery from 'react-photo-gallery';
import Loader from '@/components/Loader';
import Modal from '@/components/Modal';
import { photos } from '@/constants/photos';
import { handleContextMenu } from '@/utils/handleContextMenu';
import css from './PhotoGallery.module.css';

export interface IPhotoGalleryProps {}

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
              onContextMenu={handleContextMenu}
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
            onContextMenu={handleContextMenu}
          />
        )}
        {loadingPhoto && <Loader />}
      </Modal>
    </div>
  );
};

export default PhotoGallery;
