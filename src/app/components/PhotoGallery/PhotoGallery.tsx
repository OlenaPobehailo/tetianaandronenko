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
        key: '1',
    },
    {
        src: img2.src,
        width: 400,
        height: 400,
        key: '2',
    },
    {
        src: img3.src,
        width: 600,
        height: 600,
        key: '3',
    },
    {
        src: img4.src,
        width: 400,
        height: 400,
        key: '14',
    },

    {
        src: img5.src,
        width: 400,
        height: 600,
        key: '5',
    },
    {
        src: img6.src,
        width: 800,
        height: 800,
        key: '6',
    },
    {
        src: img7.src,
        width: 600,
        height: 600,
        key: '7',
    },
    {
        src: img8.src,
        width: 1600,
        height: 1200,
        key: '8',
    },
]

export default function PhotoGallery(props: IPhotoGalleryProps) {
    const [showModal, setShowModal] = useState(false)
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)
    const [windowWidth, setWindowWidth] = useState<number | undefined>(
        undefined
    )
    const [isWidthExceeded, setIsWidthExceeded] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)
        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const openModal = (src: string) => {
        setSelectedPhoto(src)
        setShowModal(true)
    }

    const closeModal = () => {
        setSelectedPhoto(null)
        setShowModal(false)
    }

    return (
        <div>
            <Gallery
                photos={photos}
                onClick={(event, { photo }) => openModal(photo.src)}
            />

            {showModal && (
                <div className={css.modal}>
                    <div className={css.modalContent}>
                        <span className={css.close} onClick={closeModal}>
                            &times;
                        </span>
                        {selectedPhoto && (
                            <Image
                                src={selectedPhoto}
                                alt="Selected Photo"
                                objectFit="cover"
                                width={
                                    windowWidth ? windowWidth * 0.9 : undefined
                                }
                                height={300}
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
