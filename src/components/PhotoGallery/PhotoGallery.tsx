'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Gallery from 'react-photo-gallery'
import css from './PhotoGallery.module.css'
import { images } from '@/assets/images'

const {
    model_1082,
    model_1083,
    model_1084,
    model_1087,
    model_1088,
    model_1090,
    model_1091,
    model_1093,
    model_1095,
    model_1098,
    model_1101,
    model_1103,
    model_1106,
    model_1107,
    model_1108,
    model_1116,
    model_1120,
    model_1122,
    model_1123,
    model_1126,
    model_1127,
    model_1130,
} = images

export interface IPhotoGalleryProps {}

const photos = [
    {
        src: model_1082.src,
        width: 2,
        height: 3,
        key: '0',
    },
    {
        src: model_1083.src,
        width: 2,
        height: 3,
        key: '1',
    },
    {
        src: model_1084.src,
        width: 2,
        height: 3,
        key: '2',
    },
    {
        src: model_1087.src,
        width: 2,
        height: 3,
        key: '3',
    },

    {
        src: model_1088.src,
        width: 2,
        height: 3,
        key: '4',
    },
    {
        src: model_1088.src,
        width: 2,
        height: 3,
        key: '5',
    },
    {
        src: model_1090.src,
        width: 2,
        height: 3,
        key: '6',
    },
    {
        src: model_1091.src,
        width: 2,
        height: 3,
        key: '7',
    },

    {
        src: model_1093.src,
        width: 2,
        height: 3,
        key: '8',
    },
    {
        src: model_1095.src,
        width: 2,
        height: 3,
        key: '9',
    },
    {
        src: model_1098.src,
        width: 2,
        height: 3,
        key: '10',
    },
    {
        src: model_1101.src,
        width: 2,
        height: 3,
        key: '11',
    },

    {
        src: model_1103.src,
        width: 2,
        height: 3,
        key: '12',
    },
    {
        src: model_1106.src,
        width: 2,
        height: 3,
        key: '13',
    },
    {
        src: model_1107.src,
        width: 2,
        height: 3,
        key: '14',
    },
    {
        src: model_1116.src,
        width: 2,
        height: 3,
        key: '15',
    },
    {
        src: model_1120.src,
        width: 2,
        height: 3,
        key: '16',
    },
    {
        src: model_1122.src,
        width: 2,
        height: 3,
        key: '17',
    },
    {
        src: model_1123.src,
        width: 2,
        height: 3,
        key: '18',
    },
    {
        src: model_1126.src,
        width: 2,
        height: 3,
        key: '19',
    },
    {
        src: model_1127.src,
        width: 2,
        height: 3,
        key: '20',
    },
    {
        src: model_1130.src,
        width: 2,
        height: 3,
        key: '21',
    },
]

export default function PhotoGallery(props: IPhotoGalleryProps) {
    const [showModal, setShowModal] = useState(false)
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)

    const openModal = (event: React.MouseEvent, photo: { index: number }) => {
        const { index } = photo

        setSelectedPhoto(photos[index].src)
        setShowModal(true)
        document.body.classList.add('modal-open')
    }

    const closeModal = () => {
        setSelectedPhoto(null)
        setShowModal(false)
        document.body.classList.remove('modal-open')
    }
    return (
        <div>
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
                        onClick={(event) =>
                            photo.key
                                ? onClick!(event, {
                                      index: parseInt(photo.key),
                                  })
                                : undefined
                        }
                    >
                        <Image
                            src={photo.src}
                            alt="Example Photo"
                            className={css.imageContainer}
                            style={{ cursor: 'pointer' }}
                            width={photo.width}
                            height={photo.height}
                        />
                    </div>
                )}
            />

            {showModal && (
                <div className={css.modal}>
                    <div className={css.modalContent}>
                        <span className={css.close} onClick={closeModal}>
                            &times;
                        </span>
                        {selectedPhoto && (
                            <div>
                                <Image
                                    className={css.imageContainer}
                                    src={selectedPhoto}
                                    alt="Selected Photo"
                                    style={{ width: '100%', height: '100%' }}
                                    width="1000"
                                    height="1000"
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}