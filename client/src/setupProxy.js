const { createProxyMiddleware } = require("http-proxy-middleware");

// We have to only worry about for proxy in only development mode.
// Because in production mode there is not exist react app server.
// Because for production we have to build the entire react application. (npm run build).
// And Make the Only One bundle.js file.
module.exports = function (app) {
  app.use(
    "/auth/google",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
  app.use(
    "/api/*",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};
