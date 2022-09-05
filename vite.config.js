import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import imagePresets, { hdPreset, formatPreset, widthPreset, densityPreset } from 'vite-plugin-image-presets'

const withRoundBorders = (image) => {
  const { width, height } = image.options
  return image
    .resize({ width, height: width, fit: 'cover' })
    .composite([{ input: rectFor(width), blend: 'dest-in' }])
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(),
  imagePresets({
    hd: hdPreset({
      class: 'hd',
      widths: [440, 700],
      sizes: '(min-width: 700px) 700px, 100vw',
      formats: {
        webp: { quality: 44 },
        png: { quality: 50 },
      },
    }),
    full: formatPreset({
      class: 'full',
      formats: {
        webp: { quality: 80 },
        original: {},
      },
    }),
    original: formatPreset({
      class: 'og',
      formats: {
        original: {},
        webp: { quality: 80 },
      },
    }),
    thumbnail: densityPreset({
      class: 'thumb',
      baseHeight: 48,
      density: [1, 1.5, 2],
      formats: {
        webp: { quality: 80 },
        png: { quality: 44 },
      },
    }),
    round: densityPreset({
      class: 'density',
      height: 150, // avoid layout shift
      baseWidth: 150,
      density: [1, 1.5, 2],
      resizeOptions: {
        fit: 'cover',
      },
      withImage: withRoundBorders,
      formats: {
        webp: { quality: 40 },
        png: { quality: 40 },
      },
    }),
  })
  ]
})
