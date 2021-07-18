module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ["prismjs", {
        "languages": ["javascript", "css", "markup","java","cpp","c","xml","sql","yml"],
        "plugins": ["line-numbers","copy-to-clipboard"],
        "theme":"okaidia",
        "css": true
    }]
  ]
}