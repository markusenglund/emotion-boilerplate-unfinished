export default function createHTML(app, preloadedState) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>SSR and HMR boilerplate</title>
    </head>
    <body>
      <div id="app">${app}</div>
    </body>
    <script>
      window.PRELOADED_STATE = ${JSON.stringify(preloadedState)}
    </script>
    <script src="/public/bundle.js"></script>
  </html>
`;
}
