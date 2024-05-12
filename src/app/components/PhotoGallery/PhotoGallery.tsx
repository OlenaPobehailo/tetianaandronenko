'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Gallery from 'react-photo-gallery'
import css from './PhotoGallery.module.css'
import img1 from '@/app/assets/images/1-1600x1200.png'
import img2 from '@/app/assets/images/2-400x400.png'
import img3 from '@/app/assets/images/3-600x600.png'
import img4 from '@/app/assets/images/4-400x400.png'
import img5 from '@/app/assets/images/5-400x600.png'
import img6 from '@/app/assets/images/6-800x800.png'
import img7 from '@/app/assets/images/7-600x600.png'
import img8 from '@/app/assets/images/8-1600x1200.png'

export interface IPhotoGalleryProps {}

const photos = [
    {
        src: img1.src,
        width: 1600,
        height: 1200,
        key: '0',
    },
    {
        src: img2.src,
        width: 400,
        height: 400,
        key: '1',
    },
    {
        src: img3.src,
        width: 600,
        height: 600,
        key: '2',
    },
    {
        src: img4.src,
        width: 400,
        height: 400,
        key: '3',
    },

    {
        src: img5.src,
        width: 400,
        height: 600,
        key: '4',
    },
    {
        src: img6.src,
        width: 800,
        height: 800,
        key: '5',
    },
    {
        src: img7.src,
        width: 600,
        height: 600,
        key: '6',
    },
    {
        src: img8.src,
        width: 1600,
        height: 1200,
        key: '7',
    },

    {
        src: img4.src,
        width: 400,
        height: 400,
        key: '8',
    },
    {
        src: img2.src,
        width: 400,
        height: 400,
        key: '9',
    },
    {
        src: img1.src,
        width: 1600,
        height: 1200,
        key: '10',
    },
    {
        src: img3.src,
        width: 600,
        height: 600,
        key: '11',
    },

    {
        src: img6.src,
        width: 800,
        height: 800,
        key: '12',
    },
    {
        src: img8.src,
        width: 1600,
        height: 1200,
        key: '13',
    },
    {
        src: img7.src,
        width: 600,
        height: 600,
        key: '14',
    },
    {
        src: img5.src,
        width: 400,
        height: 600,
        key: '15',
    },
]

export default function PhotoGallery(props: IPhotoGalleryProps) {
    const [showModal, setShowModal] = useState(false)
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

    const [windowWidth, setWindowWidth] = useState<number | undefined>(
        undefined
    )
    const [windowHeight, setWindowHeight] = useState<number | undefined>(
        undefined
    )

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth
            const windowHeight = window.innerHeight

            const maxWidth = windowWidth * 0.85
            const maxHeight = windowHeight * 0.85

            const imageRatio = selectedPhoto
                ? photos.some((photo) => photo.src === selectedPhoto)
                    ? (photos.find((photo) => photo.src === selectedPhoto)
                          ?.width || 1) /
                      (photos.find((photo) => photo.src === selectedPhoto)
                          ?.height || 1)
                    : 1
                : 1

            let width = maxWidth
            let height = maxHeight

            if (imageRatio > 1) {
                width = Math.min(maxWidth, maxHeight * imageRatio)
            } else {
                height = Math.min(maxHeight, maxWidth / imageRatio)
            }

            setWindowWidth(width)
            setWindowHeight(height)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [selectedPhoto])

    const openModal = (event: React.MouseEvent, photo: { index: number }) => {
        const { index } = photo

        setSelectedPhoto(photos[index].src)
        setSelectedIndex(index)
        setShowModal(true)
    }

    const closeModal = () => {
        setSelectedPhoto(null)
        setSelectedIndex(null)
        setShowModal(false)
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
                            onClick(event, { index: photo.key })
                        }
                    >
                        <img
                            src={photo.src}
                            alt="Example Photo"
                            className={css.imageContainer}
                            style={{ cursor: 'pointer' }}
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
                            <img
                                src={selectedPhoto}
                                alt="Selected Photo"
                                className={css.imageContainer}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
