'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Image as ImageIcon } from 'lucide-react'

type ImagePreviewCellProps = {
  src: string
  alt?: string
  thumbnailSize?: number
}

const ImagePreviewCell = ({
  src,
  alt = 'Vista previa',
  thumbnailSize = 48,
}: ImagePreviewCellProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  useEffect(() => {
    const img = new window.Image()
    img.src = src
    img.onload = () => {
      setImageLoaded(true)
      setHasError(false)
    }
    img.onerror = () => {
      setImageLoaded(false)
      setHasError(true)
    }
  }, [src])

  return (
    <div className="h-full w-full">
      <button
        type="button"
        aria-label={alt}
        className="h-full w-full border-none bg-transparent p-0"
        style={{ lineHeight: 0 }}
        onClick={() => imageLoaded && setIsOpen(true)}
      >
        {hasError ? (
          <div className="flex h-12 w-12 items-center justify-center rounded border bg-gray-100 text-gray-400">
            <ImageIcon size={24} />
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            width={thumbnailSize}
            height={thumbnailSize}
            className="h-full w-full cursor-pointer rounded border object-cover"
          />
        )}
      </button>

      {isOpen && imageLoaded && (
        <div
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        >
          <Image
            src={src}
            alt={alt + ' ampliada'}
            width={600}
            height={600}
            className="max-h-[90vh] max-w-[90vw] rounded object-contain"
          />
        </div>
      )}
    </div>
  )
}

export default ImagePreviewCell
