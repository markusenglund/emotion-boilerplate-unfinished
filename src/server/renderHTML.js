export default function createHTML(app, css, ids, preloadedState) {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>SSR and HMR boilerplate</title>
      <style>${css}</style>
    </head>
    <body>
      <div id="app">${app}</div>
    </body>
    <script>
      window.PRELOADED_STATE = ${JSON.stringify(preloadedState)}
      window.EMOTION_IDS = ${JSON.stringify(ids)}
    </script>
    <script src="/public/bundle.js"></script>
  </html>
`;
}
