"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/_libs/prisma/client */ \"(api)/./src/_libs/prisma/client.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(_libs_prisma_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n    theme: {\n        colorScheme: \"light\",\n        brandColor: \"#347AEC\",\n        logo: \"/_assets/images/icons/psyMI_logo.png\"\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default()({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                },\n                username: {\n                    label: \"Username\",\n                    type: \"username\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error(\"Please check the correctness of the data you entered\");\n                }\n                const user = await _libs_prisma_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].user.findUnique({\n                    where: {\n                        email: credentials.email\n                    }\n                });\n                if (!user || !user?.password) {\n                    throw new Error(\"The user does not exist, please check the correctness of the data you entered\");\n                }\n                const isCorrectPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(credentials.password, user.password);\n                if (!isCorrectPassword) {\n                    throw new Error(\"You have entered a wrong password\");\n                }\n                return user;\n            }\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_5___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET,\n            profile (profile) {\n                return {\n                    id: profile.sub,\n                    username: profile.given_name,\n                    email: profile.email,\n                    image: profile.picture,\n                    isRegistered: profile.isRegistered ? true : false\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            return {\n                ...token,\n                ...user\n            };\n        },\n        async session ({ session, token }) {\n            session.user.isRegistered = token.isRegistered;\n            return session;\n        }\n    },\n    debug: \"development\" === \"development\",\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/sign-up\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_4___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDZjtBQUNmO0FBQ3NDO0FBQ2pDO0FBQ3VCO0FBRWpELE1BQU1NLGNBQWM7SUFDekJDLFNBQVNQLHdFQUFhQSxDQUFDQywyREFBTUE7SUFDN0JPLE9BQU87UUFDTEMsYUFBYTtRQUNiQyxZQUFZO1FBQ1pDLE1BQU07SUFDUjtJQUNBQyxXQUFXO1FBQ1RULHNFQUFtQkEsQ0FBQztZQUNsQlUsTUFBTTtZQUNOQyxhQUFhO2dCQUNYQyxPQUFPO29CQUFFQyxPQUFPO29CQUFTQyxNQUFNO2dCQUFRO2dCQUN2Q0MsVUFBVTtvQkFBRUYsT0FBTztvQkFBWUMsTUFBTTtnQkFBVztnQkFDaERFLFVBQVU7b0JBQUVILE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRyxXQUFVTixXQUFXO2dCQUN6QixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUksVUFBVTtvQkFDakQsTUFBTSxJQUFJRyxNQUNSO2dCQUVKO2dCQUVBLE1BQU1DLE9BQU8sTUFBTXJCLDJEQUFNQSxDQUFDcUIsS0FBS0MsV0FBVztvQkFDeENDLE9BQU87d0JBQ0xULE9BQU9ELFlBQVlDO29CQUNyQjtnQkFDRjtnQkFFQSxJQUFJLENBQUNPLFFBQVEsQ0FBQ0EsTUFBTUosVUFBVTtvQkFDNUIsTUFBTSxJQUFJRyxNQUNSO2dCQUVKO2dCQUVBLE1BQU1JLG9CQUFvQixNQUFNdkIscURBQWN3QixDQUM1Q1osWUFBWUksVUFDWkksS0FBS0o7Z0JBR1AsSUFBSSxDQUFDTyxtQkFBbUI7b0JBQ3RCLE1BQU0sSUFBSUosTUFBTTtnQkFDbEI7Z0JBRUEsT0FBT0M7WUFDVDtRQUNGO1FBQ0FqQixpRUFBY0EsQ0FBQztZQUNic0IsVUFBVUMsUUFBUUMsSUFBSUM7WUFDdEJDLGNBQWNILFFBQVFDLElBQUlHO1lBQzFCQyxTQUFRQSxPQUFPO2dCQUNiLE9BQU87b0JBQ0xDLElBQUlELFFBQVFFO29CQUNaaEIsVUFBVWMsUUFBUUc7b0JBQ2xCckIsT0FBT2tCLFFBQVFsQjtvQkFDZnNCLE9BQU9KLFFBQVFLO29CQUNmQyxjQUFjTixRQUFRTSxlQUFlLE9BQU87Z0JBQzlDO1lBQ0Y7UUFDRjtLQUNEO0lBQ0RDLFdBQVc7UUFDVCxNQUFNQyxLQUFJLEVBQUVDLEtBQUssRUFBRXBCLElBQUksRUFBRTtZQUN2QixPQUFPO2dCQUFFLEdBQUdvQixLQUFLO2dCQUFFLEdBQUdwQixJQUFJO1lBQUM7UUFDN0I7UUFDQSxNQUFNcUIsU0FBUSxFQUFFQSxPQUFPLEVBQUVELEtBQUssRUFBRTtZQUM5QkMsUUFBUXJCLEtBQUtpQixlQUFlRyxNQUFNSDtZQUNsQyxPQUFPSTtRQUNUO0lBYUY7SUFDQUMsT0FBT2hCLGtCQUF5QjtJQUNoQ2UsU0FBUztRQUNQRSxVQUFVO0lBQ1o7SUFDQUMsT0FBTztRQUNMQyxRQUFRO0lBQ1Y7SUFDQUMsUUFBUXBCLFFBQVFDLElBQUlvQjtBQUN0QixFQUFFO0FBRUYsaUVBQWU3QyxnREFBUUEsQ0FBQ0UsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tIFwiQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlclwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiQC9fbGlicy9wcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRcIjtcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIoY2xpZW50KSxcbiAgdGhlbWU6IHtcbiAgICBjb2xvclNjaGVtZTogXCJsaWdodFwiLFxuICAgIGJyYW5kQ29sb3I6IFwiIzM0N0FFQ1wiLFxuICAgIGxvZ286IFwiL19hc3NldHMvaW1hZ2VzL2ljb25zL3BzeU1JX2xvZ28ucG5nXCIsXG4gIH0sXG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogXCJjcmVkZW50aWFsc1wiLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJlbWFpbFwiIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9LFxuICAgICAgICB1c2VybmFtZTogeyBsYWJlbDogXCJVc2VybmFtZVwiLCB0eXBlOiBcInVzZXJuYW1lXCIgfSxcbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgaWYgKCFjcmVkZW50aWFscz8uZW1haWwgfHwgIWNyZWRlbnRpYWxzPy5wYXNzd29yZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIFwiUGxlYXNlIGNoZWNrIHRoZSBjb3JyZWN0bmVzcyBvZiB0aGUgZGF0YSB5b3UgZW50ZXJlZFwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBjbGllbnQudXNlci5maW5kVW5pcXVlKHtcbiAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghdXNlciB8fCAhdXNlcj8ucGFzc3dvcmQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBcIlRoZSB1c2VyIGRvZXMgbm90IGV4aXN0LCBwbGVhc2UgY2hlY2sgdGhlIGNvcnJlY3RuZXNzIG9mIHRoZSBkYXRhIHlvdSBlbnRlcmVkXCJcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNDb3JyZWN0UGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShcbiAgICAgICAgICBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICAgICAgICB1c2VyLnBhc3N3b3JkXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCFpc0NvcnJlY3RQYXNzd29yZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBoYXZlIGVudGVyZWQgYSB3cm9uZyBwYXNzd29yZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgfSxcbiAgICB9KSxcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVULFxuICAgICAgcHJvZmlsZShwcm9maWxlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IHByb2ZpbGUuc3ViLFxuICAgICAgICAgIHVzZXJuYW1lOiBwcm9maWxlLmdpdmVuX25hbWUsXG4gICAgICAgICAgZW1haWw6IHByb2ZpbGUuZW1haWwsXG4gICAgICAgICAgaW1hZ2U6IHByb2ZpbGUucGljdHVyZSxcbiAgICAgICAgICBpc1JlZ2lzdGVyZWQ6IHByb2ZpbGUuaXNSZWdpc3RlcmVkID8gdHJ1ZSA6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgcmV0dXJuIHsgLi4udG9rZW4sIC4uLnVzZXIgfTtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBzZXNzaW9uLnVzZXIuaXNSZWdpc3RlcmVkID0gdG9rZW4uaXNSZWdpc3RlcmVkO1xuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgICAvLyBVc2luZyB0aGUgYC4uLnJlc3RgIHBhcmFtZXRlciB0byBiZSBhYmxlIHRvIG5hcnJvdyBkb3duIHRoZSB0eXBlIGJhc2VkIG9uIGB0cmlnZ2VyYFxuICAgIC8vIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0cmlnZ2VyLCBuZXdTZXNzaW9uIH0pIHtcbiAgICAvLyAgIC8vIE5vdGUsIHRoYXQgYHJlc3Quc2Vzc2lvbmAgY2FuIGJlIGFueSBhcmJpdHJhcnkgb2JqZWN0LCByZW1lbWJlciB0byB2YWxpZGF0ZSBpdCFcbiAgICAvLyAgIGlmICh0cmlnZ2VyID09PSBcInVwZGF0ZVwiICYmIG5ld1Nlc3Npb24/Lm5hbWUpIHtcbiAgICAvLyAgICAgLy8gWW91IGNhbiB1cGRhdGUgdGhlIHNlc3Npb24gaW4gdGhlIGRhdGFiYXNlIGlmIGl0J3Mgbm90IGFscmVhZHkgdXBkYXRlZC5cbiAgICAvLyAgICAgLy8gYXdhaXQgYWRhcHRlci51cGRhdGVVc2VyKHNlc3Npb24udXNlci5pZCwgeyBuYW1lOiBuZXdTZXNzaW9uLm5hbWUgfSlcblxuICAgIC8vICAgICAvLyBNYWtlIHN1cmUgdGhlIHVwZGF0ZWQgdmFsdWUgaXMgcmVmbGVjdGVkIG9uIHRoZSBjbGllbnRcbiAgICAvLyAgICAgc2Vzc2lvbi5uYW1lID0gbmV3U2Vzc2lvbi5uYW1lO1xuICAgIC8vICAgfVxuICAgIC8vICAgcmV0dXJuIHNlc3Npb247XG4gICAgLy8gfSxcbiAgfSxcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogXCJqd3RcIixcbiAgfSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46IFwiL3NpZ24tdXBcIixcbiAgfSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG4iXSwibmFtZXMiOlsiUHJpc21hQWRhcHRlciIsImNsaWVudCIsImJjcnlwdCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiYXV0aE9wdGlvbnMiLCJhZGFwdGVyIiwidGhlbWUiLCJjb2xvclNjaGVtZSIsImJyYW5kQ29sb3IiLCJsb2dvIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsInVzZXJuYW1lIiwiYXV0aG9yaXplIiwiRXJyb3IiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwiaXNDb3JyZWN0UGFzc3dvcmQiLCJjb21wYXJlIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX1NFQ1JFVCIsInByb2ZpbGUiLCJpZCIsInN1YiIsImdpdmVuX25hbWUiLCJpbWFnZSIsInBpY3R1cmUiLCJpc1JlZ2lzdGVyZWQiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInNlc3Npb24iLCJkZWJ1ZyIsInN0cmF0ZWd5IiwicGFnZXMiLCJzaWduSW4iLCJzZWNyZXQiLCJORVhUQVVUSF9TRUNSRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./src/_libs/prisma/client.js":
/*!************************************!*\
  !*** ./src/_libs/prisma/client.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvX2xpYnMvcHJpc21hL2NsaWVudC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsU0FBUyxJQUFJRCx3REFBWUE7QUFFL0IsaUVBQWVDLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9fbGlicy9wcmlzbWEvY2xpZW50LmpzPzNiMzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xuXG5jb25zdCBjbGllbnQgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudDsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiY2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/_libs/prisma/client.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();