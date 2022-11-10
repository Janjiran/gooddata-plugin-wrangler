import httpProxy from "http-proxy";
import { NextApiRequest, NextApiResponse } from "next";
import httpProxyMiddleware from 'next-http-proxy-middleware';

const target = "https://fashion-police.on.gooddata.com";

export const config = {
  api: {
    // Enable `externalResolver` option in Next.js
    externalResolver: true,
    bodyParser: false,
  },
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log("🚀 ~ file: gdc.ts ~ line 16 ~ req", req)
  return httpProxyMiddleware(req, res, {
    // You can use the `http-proxy` option
    changeOrigin: true,
    cookieDomainRewrite: 'localhost',
    secure: false,
    target: target,
    headers: {
        host: 'fashion-police.on.gooddata.com',
        origin: null,
    },
    onProxyReq(proxyReq, req, res) {
      proxyReq.setHeader("accept-encoding", "identity");
    },
    // In addition, you can use the `pathRewrite` option provided by `next-http-proxy-middleware`
    // pathRewrite: [{
    //   patternStr: '^/api/new',
    //   replaceStr: '/v2'
    // }, {
    //   patternStr: '^/api',
    //   replaceStr: ''
    // }],
  })
}

// export default (req, res) =>
//   new Promise((resolve, reject) => {
//     const proxy: httpProxy = httpProxy.createProxy({
//       changeOrigin: true,
//       cookieDomainRewrite: 'localhost',
//       secure: false,
//       target: target,
//       headers: {
//           host: 'fashion-police.on.gooddata.com',
//           // origin: null,
//       },
//     });

//     console.log(proxy)
    
//     proxy.once("proxyReq", (proxyReq) => {
//       console.log("🚀 ~ file: gdc.ts ~ line 20 ~ proxy.once ~ proxyReq", proxyReq)
//       proxyReq.setHeader("accept-encoding", "identity");
//     })
//   });

// /* eslint-disable */
// const proxy = require("http-proxy-middleware");

// const constants = require("./constants/constants");

// const backendUrl = constants.backend.address;
// module.exports = function(app) {
//     app.use(
//         proxy("/gdc", {
//             changeOrigin: true,
//             cookieDomainRewrite: "localhost",
//             secure: false,
//             target: backendUrl,
//             headers: {
//                 // host: domain.replace(/https:\/\//, ""),
//                 origin: null,
//             },
//             onProxyReq(proxyReq, req, res) {
//                 proxyReq.setHeader("accept-encoding", "identity");
//             },
//         }),
//     );
//     app.use(
//         proxy("/*.html", {
//             changeOrigin: true,
//             secure: false,
//             target: backendUrl,
//         }),
//     );
//     app.use(
//         proxy("/packages/*.{js,css}", {
//             changeOrigin: true,
//             secure: false,
//             target: backendUrl,
//         }),
//     );
// };
