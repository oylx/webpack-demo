// document.addEventListener('click', () => {
//   import('./click.js').then(({ default: func }) => {
//     func()
//   })
// })
document.addEventListener('click', () => {
  import(/* webpackPrefetch: true */ './click.js').then(({ default: func }) => {
    func()
  })
})
