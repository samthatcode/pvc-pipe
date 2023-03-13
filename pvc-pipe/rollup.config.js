// rollup.config.js
export default {
    input: 'src/index.js',
    output: {
      file: 'pvc-pipe/dist/bundle.js',
      format: 'cjs'
    },
    external: ['react-paystack'] // Add the external module here
  }
  