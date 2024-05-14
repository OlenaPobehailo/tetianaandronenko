'use client'

import { ReactNode, useEffect } from 'react'
import css from './Modal.module.css'
import { IoMdClose } from 'react-icons/io'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose()
            }
        }

        window.addEventListener('keydown', handleKeyPress)

        return () => {
            window.removeEventListener('keydown', handleKeyPress)
        }
    }, [onClose])

    const handleModalClick = (event: React.MouseEvent) => {
        if (event.target === event.currentTarget) {
            onClose()
        }
    }

    if (!isOpen) return null

    return (
        <div className={css.modal} onClick={onClose}>
            <div
                className={css.modalContent}
                onClick={(e) => e.stopPropagation()}
            >
                <button className={css.close} onClick={onClose}>
                    <IoMdClose />
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal
