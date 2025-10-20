"use client"

import React, { useCallback, useMemo, useRef, useState } from "react"
import ImagePreviewCell from "../image-preview-cell"
import Cropper from "react-easy-crop"
import { X, Upload, Crop as CropIcon, Loader2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog"
import { Button } from "../ui/button"
import { Slider } from "@radix-ui/react-slider"

export type ImageInputProps = {
  value?: string | null
  onChange: (url: string | null) => void
  label?: string
  disabled?: boolean
  uploadUrl?: string
  cropSize?: number
  formFieldName?: string
  className?: string
}

async function getCroppedBlob(
  imageSrc: string,
  pixelCrop: { x: number; y: number; width: number; height: number },
  outputSize = 300
): Promise<Blob> {
  const img = await new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image()
    image.crossOrigin = "anonymous"
    image.onload = () => resolve(image)
    image.onerror = reject
    image.src = imageSrc
  })

  // Determine output width and height
  let outputWidth = outputSize
  let outputHeight = outputSize
  if (outputSize === 296) {
    outputWidth = 560
    outputHeight = 296
  }

  const canvas = document.createElement("canvas")
  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error("No canvas context")

  canvas.width = outputWidth
  canvas.height = outputHeight
  ctx.imageSmoothingQuality = "high"
  ctx.drawImage(
    img,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    outputWidth,
    outputHeight
  )

  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) return reject(new Error("Canvas is empty"))
        resolve(blob)
      },
      "image/jpeg",
      0.92
    )
  })
}

function classNames(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ")
}

export default function ImageInput({
  value,
  onChange,
  label = "Imagen",
  disabled,
  uploadUrl,
  cropSize = 300,
  formFieldName = "file",
  className,
}: ImageInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(value ?? null)
  const [localFileUrl, setLocalFileUrl] = useState<string | null>(null)
  const resolvedUploadUrl =
    uploadUrl ?? "https://semillapp-api-production-08ab.up.railway.app/upload"

  // Cropper state
  const [isCropOpen, setIsCropOpen] = useState(false)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<{
    x: number
    y: number
    width: number
    height: number
  } | null>(null)

  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  React.useEffect(() => {
    setPreviewUrl(value ?? null)
  }, [value])

  const onSelectFile = useCallback((file: File) => {
    if (!file) return
    const url = URL.createObjectURL(file)
    setLocalFileUrl(url)
    setIsCropOpen(true)
    setZoom(1)
    setCrop({ x: 0, y: 0 })
    setError(null)
  }, [])

  const onInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files?.[0]
    if (file) onSelectFile(file)
  }

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      e.stopPropagation()
      if (disabled) return
      const file = e.dataTransfer.files?.[0]
      if (file && file.type.startsWith("image/")) onSelectFile(file)
    },
    [disabled, onSelectFile]
  )

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const onCropComplete = useCallback(
    (
      _area: { x: number; y: number; width: number; height: number },
      areaPixels: { x: number; y: number; width: number; height: number }
    ) => {
      setCroppedAreaPixels(areaPixels)
    },
    []
  )

  const doUpload = useCallback(async () => {
    if (!croppedAreaPixels) return
    setIsUploading(true)
    setError(null)
    try {
      const src = localFileUrl ?? previewUrl
      if (!src) throw new Error("No hay imagen seleccionada")

      const blob = await getCroppedBlob(src, croppedAreaPixels, cropSize)
      const formData = new FormData()
      formData.append(formFieldName, blob, "image.jpg")

      const res = await fetch(resolvedUploadUrl, {
        method: "POST",
        body: formData,
      })
      if (!res.ok) throw new Error(`Upload failed (${res.status})`)
      const json: { url?: string } = await res.json()
      if (!json.url) throw new Error("Response missing url")

      setPreviewUrl(json.url)
      onChange(json.url)
      setIsCropOpen(false)
    } catch (err) {
      const error = err as Error | { message?: string }
      console.log("Error uploading image:", error.message)
      setError(error?.message ?? "Error subiendo la imagen")
    } finally {
      setIsUploading(false)
      if (localFileUrl) URL.revokeObjectURL(localFileUrl)
      setLocalFileUrl(null)
    }
  }, [
    croppedAreaPixels,
    cropSize,
    formFieldName,
    localFileUrl,
    previewUrl,
    onChange,
    resolvedUploadUrl,
  ])

  const clearImage = () => {
    setPreviewUrl(null)
    onChange(null)
    setError(null)
  }

  const dropLabel = useMemo(() => {
    let cropText = `se recorta a ${cropSize}×${cropSize}`
    if (cropSize === 296) cropText = "se recorta a 560×296"
    return (
      <div className="flex flex-col items-center justify-center gap-1 text-center">
        <div className="rounded-full border p-1.5">
          <Upload className="h-3.5 w-3.5" />
        </div>
        <div className="text-xs font-medium">
          Selecciona o arrastra una imagen
        </div>
        <div className="text-muted-foreground text-[11px]">
          PNG, JPG • {cropText}
        </div>
      </div>
    )
  }, [cropSize])

  return (
    <div className={classNames("w-full", className)}>
      {label && (
        <label className="text-foreground mb-2 block text-sm font-medium">
          {label}
        </label>
      )}

      <div className="flex items-start gap-4">
        {previewUrl && (
          <div className="bg-muted relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border">
            <div className="h-full w-full object-cover">
              <ImagePreviewCell src={previewUrl} alt="preview" />
            </div>
            <button
              type="button"
              onClick={clearImage}
              disabled={disabled}
              className="bg-background/95 hover:bg-background absolute top-1 right-1 rounded-full border p-1 shadow"
              title="Quitar imagen"
              aria-label="Quitar imagen"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

        <div className="flex flex-1 flex-col gap-2">
          {!previewUrl ? (
            <div
              onDrop={onDrop}
              onDragOver={onDragOver}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (!disabled && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault()
                  inputRef.current?.click()
                }
              }}
              className={classNames(
                "relative flex h-20 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-dashed px-3",
                disabled ? "cursor-not-allowed opacity-60" : "hover:bg-muted/50"
              )}
              onClick={() => !disabled && inputRef.current?.click()}
            >
              {dropLabel}
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={onInputChange}
                className="hidden"
                disabled={disabled}
              />
            </div>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              type="button"
              onClick={() => inputRef.current?.click()}
              disabled={disabled}
            >
              <Upload className="mr-2 h-3.5 w-3.5" /> Cambiar imagen
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={onInputChange}
                className="hidden"
                disabled={disabled}
              />
            </Button>
          )}

          {previewUrl && (
            <Button
              variant="secondary"
              size="sm"
              type="button"
              onClick={() => setIsCropOpen(true)}
              disabled={disabled}
            >
              <CropIcon className="mr-2 h-3.5 w-3.5" /> Recortar
            </Button>
          )}
        </div>
      </div>

      {error && <div className="text-destructive mt-2 text-sm">{error}</div>}

      <Dialog
        open={isCropOpen}
        onOpenChange={(open) => {
          if (!isUploading) setIsCropOpen(open)
        }}
      >
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>Recortar imagen</DialogTitle>
          </DialogHeader>

          <div className="bg-muted relative aspect-square w-full overflow-hidden rounded-lg">
            {localFileUrl || previewUrl ? (
              <Cropper
                image={localFileUrl ?? (previewUrl as string)}
                crop={crop}
                zoom={zoom}
                aspect={cropSize === 296 ? 560 / 296 : 1}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
                restrictPosition
                showGrid
              />
            ) : (
              <div className="text-muted-foreground flex h-full items-center justify-center text-sm">
                Selecciona una imagen para recortar
              </div>
            )}
          </div>

          <div className="mt-4 space-y-2">
            <div className="text-muted-foreground text-xs">Zoom</div>
            <Slider
              value={[zoom]}
              min={1}
              max={4}
              step={0.1}
              onValueChange={(v) => setZoom(v[0] ?? 1)}
            />
            <div className="text-muted-foreground text-xs">
              Salida final:{" "}
              {cropSize === 296 ? "560×296" : `${cropSize}×${cropSize}`}px
            </div>
          </div>

          <DialogFooter className="gap-2">
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                setIsCropOpen(false)
                if (localFileUrl) URL.revokeObjectURL(localFileUrl)
                setLocalFileUrl(null)
                setCroppedAreaPixels(null)
              }}
              disabled={isUploading}
            >
              <X className="mr-2 h-4 w-4" /> Cancelar
            </Button>
            <Button
              type="button"
              onClick={doUpload}
              disabled={
                isUploading ||
                !croppedAreaPixels ||
                !(localFileUrl || previewUrl)
              }
            >
              {isUploading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Subiendo…
                </>
              ) : (
                <>Aceptar</>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
