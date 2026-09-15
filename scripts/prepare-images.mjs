import { createHash } from 'node:crypto'
import { readdir, readFile, rm, mkdir, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const sourceRoot = path.join(
  repositoryRoot,
  'Skinstudio Aesthetics Website Images-20260915T064914Z-1-001',
  'Skinstudio Aesthetics Website Images',
)
const publicImagesRoot = path.join(repositoryRoot, 'public', 'images')
const manifestPath = path.join(publicImagesRoot, 'image-manifest.json')

const images = [
  {
    source: 'Basic Deep Cleanse Facial/873344AA-3BCC-428E-B512-E137363CCDB4.png',
    output: 'treatments/basic-deep-cleanse-facial/deep-cleanse-facial-cleansing.webp',
    maxLongEdge: 1200,
    use: 'Basic deep cleanse facial treatment image',
  },
  {
    source: 'Bioneedling Spicule & Algea/306C7BB2-1F93-41A1-A10D-1B4F30583F2A.png',
    output: 'treatments/bioneedling-spicule-algae/algae-mask-application.webp',
    maxLongEdge: 1200,
    use: 'Bioneedling spicule and algae mask application',
  },
  {
    source: 'Bioneedling Spicule & Algea/74BF1161-6393-471D-A3C7-E272E8B16543.png',
    output: 'treatments/bioneedling-spicule-algae/algae-mask-close-up.webp',
    maxLongEdge: 1200,
    use: 'Bioneedling spicule and algae treatment close-up',
  },
  {
    source: 'Dermaplaning/8A2B610C-E75E-47DF-AB32-833877B2A721.png',
    output: 'treatments/dermaplaning/dermaplaning-treatment.webp',
    maxLongEdge: 1200,
    use: 'Dermaplaning treatment image',
  },
  {
    source: 'Dermaplaning/F29F7EC5-DE17-47E4-82C2-0E5EA88F1C14.png',
    output: 'treatments/dermaplaning/exfoliation-results.webp',
    maxLongEdge: 1200,
    use: 'Dermaplaning exfoliation result detail',
  },
  {
    source: 'HIFU/958407F3-A114-41A7-9549-4EA78320C750.png',
    output: 'treatments/hifu/hifu-facial-treatment.webp',
    maxLongEdge: 1200,
    use: 'HIFU facial treatment image',
  },
  {
    source: 'IPL Hair Removal/38AB7B0C-76F0-4216-8993-128B5D012E4F.png',
    output: 'treatments/ipl-hair-removal/ipl-hair-removal-leg.webp',
    maxLongEdge: 1200,
    use: 'IPL hair removal treatment on leg',
  },
  {
    source: 'IPL Skin Rejuvenation/1BEF4D0F-23F6-48B5-9B40-1A37467581FE.png',
    output: 'treatments/ipl-skin-rejuvenation/ipl-facial-treatment.webp',
    maxLongEdge: 1200,
    use: 'IPL skin rejuvenation facial treatment',
  },
  {
    source: 'IPL Skin Rejuvenation/E81AB706-74DC-47B7-B687-ED0A3615CEC1.png',
    output: 'treatments/ipl-skin-rejuvenation/ipl-facial-close-up.webp',
    maxLongEdge: 1200,
    use: 'IPL skin rejuvenation treatment close-up',
  },
  {
    source: 'LED Light Therapy/8081B0AB-F13B-4287-9467-97EAC7279158.png',
    output: 'treatments/led-light-therapy/led-light-therapy-side-view.webp',
    maxLongEdge: 1200,
    use: 'LED light therapy side view',
  },
  {
    source: 'LED Light Therapy/880A0B8E-8DDE-4F91-AADE-E45CC82A624A.png',
    output: 'treatments/led-light-therapy/led-light-therapy-close-up.webp',
    maxLongEdge: 1200,
    use: 'LED light therapy close-up',
  },
  {
    source: 'Mesotheraphy/8531CDF4-ADCC-4C44-B0E4-FEC787D931D6.png',
    output: 'treatments/mesotherapy/mesotherapy-needling-close-up.webp',
    maxLongEdge: 1200,
    use: 'Mesotherapy needling close-up',
  },
  {
    source: 'Mesotheraphy/A19249EA-147A-473C-B6B2-3B476B9B0181.png',
    output: 'treatments/mesotherapy/mesotherapy-serum-infusion.webp',
    maxLongEdge: 1200,
    use: 'Mesotherapy serum infusion treatment',
  },
  {
    source: 'Proforma Jet Plasma/370E4F13-BD34-4344-B68C-CC495F97840E.png',
    output: 'treatments/proforma-jet-plasma/jet-plasma-facial-treatment.webp',
    maxLongEdge: 1200,
    use: 'Proforma Jet Plasma facial treatment',
  },
  {
    source: 'Thalgo Antiageing Peel Marin/6098F654-0D46-447D-9E70-0C56C9A835B6.png',
    output: 'treatments/thalgo-anti-ageing-peel-marin/peel-preparation.webp',
    maxLongEdge: 1200,
    use: 'Thalgo anti-ageing Peel Marin preparation',
  },
  {
    source: 'Thalgo Antiageing Peel Marin/C0E89D66-3419-459C-84E4-857AE83C307A.png',
    output: 'treatments/thalgo-anti-ageing-peel-marin/peel-application.webp',
    maxLongEdge: 1200,
    use: 'Thalgo anti-ageing Peel Marin application',
  },
  {
    source: 'Treatment Room/559B5544-EBB4-4515-8D8F-C015819706F9.png',
    output: 'studio/treatment-room-overview.webp',
    maxLongEdge: 1600,
    use: 'Studio overview suitable for full-width or hero placement',
  },
  {
    source: 'Treatment Room/744E4EED-B5ED-4E75-8AD2-F1949CF47607.png',
    output: 'studio/treatment-room-basin-detail.webp',
    maxLongEdge: 1200,
    use: 'Studio basin detail',
  },
  {
    source: 'Treatment Room/7B02B0B3-78AF-497C-932D-842A9445CAF9.png',
    output: 'studio/treatment-room-mirror-detail.webp',
    maxLongEdge: 1200,
    use: 'Studio mirror and seating detail',
  },
  {
    source: 'Treatment Room/B281AAFE-69CC-45F6-A2FE-C58A5919BDB8.png',
    output: 'studio/treatment-room-seating-area.webp',
    maxLongEdge: 1200,
    use: 'Studio seating area detail',
  },
  {
    source: 'Treatment Room/BB75E499-4449-4280-A560-749F0205311C.png',
    output: 'studio/treatment-bed-detail.webp',
    maxLongEdge: 1200,
    use: 'Studio treatment bed detail',
  },
  {
    source: 'Treatment Room/D653C096-9FEB-453C-AAF1-3CB7E22DC6E9.png',
    output: 'studio/treatment-room-interior.webp',
    maxLongEdge: 1600,
    use: 'Studio interior suitable for full-width placement',
  },
  {
    source: 'Treatment Room/E6BB09D4-6D9B-4865-AFA8-4CC3A2FE897A.png',
    output: 'studio/aesthetic-device-detail.webp',
    maxLongEdge: 1200,
    use: 'Studio aesthetic device detail',
  },
]

function toPosix(filePath) {
  return filePath.split(path.sep).join('/')
}

async function findPngFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name)
      return entry.isDirectory()
        ? findPngFiles(entryPath)
        : entry.name.toLowerCase().endsWith('.png')
          ? [entryPath]
          : []
    }),
  )
  return files.flat().sort()
}

async function fingerprint(filePath) {
  const contents = await readFile(filePath)
  return createHash('sha256').update(contents).digest('hex')
}

function orientedDimensions(metadata) {
  const swapsAxes = [5, 6, 7, 8].includes(metadata.orientation ?? 1)
  return {
    width: swapsAxes ? metadata.height : metadata.width,
    height: swapsAxes ? metadata.width : metadata.height,
  }
}

async function main() {
  const sourceFiles = await findPngFiles(sourceRoot)
  const mappedSources = images.map(({ source }) => path.join(sourceRoot, ...source.split('/'))).sort()

  if (JSON.stringify(sourceFiles) !== JSON.stringify(mappedSources)) {
    throw new Error('Source inventory has changed. Update the explicit image mapping before generating assets.')
  }

  const fingerprintsBefore = new Map(
    await Promise.all(sourceFiles.map(async (filePath) => [filePath, await fingerprint(filePath)])),
  )

  await Promise.all([
    rm(path.join(publicImagesRoot, 'treatments'), { recursive: true, force: true }),
    rm(path.join(publicImagesRoot, 'studio'), { recursive: true, force: true }),
  ])

  const manifestImages = []

  for (const image of images) {
    const sourcePath = path.join(sourceRoot, ...image.source.split('/'))
    const outputPath = path.join(publicImagesRoot, ...image.output.split('/'))
    const [sourceMetadata, sourceStats] = await Promise.all([
      sharp(sourcePath).metadata(),
      stat(sourcePath),
    ])
    const sourceDimensions = orientedDimensions(sourceMetadata)

    if (!sourceDimensions.width || !sourceDimensions.height) {
      throw new Error(`Could not determine source dimensions for ${image.source}`)
    }

    await mkdir(path.dirname(outputPath), { recursive: true })
    await sharp(sourcePath)
      .autoOrient()
      .resize({
        width: image.maxLongEdge,
        height: image.maxLongEdge,
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: 80 })
      .toFile(outputPath)

    const [outputMetadata, outputStats] = await Promise.all([
      sharp(outputPath).metadata(),
      stat(outputPath),
    ])

    if (
      outputMetadata.format !== 'webp' ||
      !outputMetadata.width ||
      !outputMetadata.height ||
      Math.max(outputMetadata.width, outputMetadata.height) > image.maxLongEdge ||
      outputMetadata.width > sourceDimensions.width ||
      outputMetadata.height > sourceDimensions.height
    ) {
      throw new Error(`Generated image failed validation: ${image.output}`)
    }

    manifestImages.push({
      sourcePath: toPosix(path.relative(repositoryRoot, sourcePath)),
      generatedPath: toPosix(path.relative(repositoryRoot, outputPath)),
      source: {
        width: sourceDimensions.width,
        height: sourceDimensions.height,
        bytes: sourceStats.size,
        orientation: sourceMetadata.orientation ?? 1,
      },
      output: {
        width: outputMetadata.width,
        height: outputMetadata.height,
        bytes: outputStats.size,
        format: outputMetadata.format,
        quality: 80,
        maxLongEdge: image.maxLongEdge,
      },
      intendedUse: image.use,
    })
  }

  const fingerprintsAfter = new Map(
    await Promise.all(sourceFiles.map(async (filePath) => [filePath, await fingerprint(filePath)])),
  )
  for (const [filePath, fingerprintBefore] of fingerprintsBefore) {
    if (fingerprintsAfter.get(filePath) !== fingerprintBefore) {
      throw new Error(`Archival master changed during generation: ${filePath}`)
    }
  }

  const sourceBytes = manifestImages.reduce((total, image) => total + image.source.bytes, 0)
  const outputBytes = manifestImages.reduce((total, image) => total + image.output.bytes, 0)
  const manifest = {
    schemaVersion: 1,
    generator: 'scripts/prepare-images.mjs',
    settings: {
      format: 'webp',
      quality: 80,
      autoOrient: true,
      withoutEnlargement: true,
    },
    totals: {
      images: manifestImages.length,
      sourceBytes,
      outputBytes,
      savedBytes: sourceBytes - outputBytes,
      reductionPercent: Number((((sourceBytes - outputBytes) / sourceBytes) * 100).toFixed(2)),
    },
    images: manifestImages,
  }

  await mkdir(publicImagesRoot, { recursive: true })
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)

  console.log(`Validated ${manifestImages.length} generated WebP images.`)
  console.log(`Source total: ${sourceBytes.toLocaleString()} bytes`)
  console.log(`Output total: ${outputBytes.toLocaleString()} bytes`)
  console.log(`Reduction: ${manifest.totals.reductionPercent}%`)
  console.log(`Manifest: ${toPosix(path.relative(repositoryRoot, manifestPath))}`)
}

await main()