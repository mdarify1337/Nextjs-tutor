self.__BUILD_MANIFEST = {"__rewrites":{"afterFiles":[],"beforeFiles":[{"has":[{"type":"header","key":"Next-Url","value":"\\/f1(?:\\/(.*))?[\\/#\\?]?"}],"source":"/f1/f2","destination":"/f1/(.)f2"},{"has":[{"type":"header","key":"Next-Url","value":"\\/f1(?:\\/(.*))?[\\/#\\?]?"}],"source":"/f3","destination":"/f1/(..)f3"},{"has":[{"type":"header","key":"Next-Url","value":"\\/f1\\/f2(?:\\/(.*))?[\\/#\\?]?"}],"source":"/f4","destination":"/f1/f2/(..)(..)f4"},{"has":[{"type":"header","key":"Next-Url","value":"\\/photo-feed(?:\\/(.*))?[\\/#\\?]?"}],"source":"/photo-feed/:id","destination":"/photo-feed/(.):id"}],"fallback":[]},"/_app":["static/chunks/pages/_app.js"],"/_error":["static/chunks/pages/_error.js"],"sortedPages":["/_app","/_error"]};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()