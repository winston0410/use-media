const esbuild = require('esbuild')
const path = require('path')

const build = async () => {
  const service = await esbuild.startService()
  const distDir = path.resolve(__dirname, 'dist')

  try {
    await service.build({
      entryPoints: ['./src/index.jsx'],
      bundle: true,
      format: 'esm',
      platform: 'browser',
      external: ['react', 'react-dom'],
      outdir: path.resolve(distDir)
    })

  } catch (e) {
    console.log(e);
  } finally {
    service.stop()
  }

}

build()
