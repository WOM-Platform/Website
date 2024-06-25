import {decode} from 'blurhash'

export function decodeBlurHash(blurHash: string, width: number, height: number) {
    const pixels = decode(blurHash, width, height);
    const canvas = document.createElement("canvas")
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')

    if (ctx) {
        const imageData = ctx.createImageData(width, height)
        imageData.data.set(pixels)
        ctx.putImageData(imageData, 0, 0);
    }

    return canvas.toDataURL();
}