module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[meetupId]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupDetail.js":
/*!********************************************!*\
  !*** ./components/meetups/MeetupDetail.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetupDetail.module.css */ \"./components/meetups/MeetupDetail.module.css\");\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/sebasnadu/code/SebasNadu/react-complete-guide-ex/25-NextJsProject/components/meetups/MeetupDetail.js\";\n\n\nconst MeetupDetail = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.detail,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: props.image,\n      alt: props.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: props.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"address\", {\n      children: props.address\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: props.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetail);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLmpzP2YyYmYiXSwibmFtZXMiOlsiTWVldHVwRGV0YWlsIiwicHJvcHMiLCJjbGFzc2VzIiwiZGV0YWlsIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLFlBQVksR0FBSUMsS0FBRCxJQUFXO0FBQzlCLHNCQUNFO0FBQVMsYUFBUyxFQUFFQywrREFBTyxDQUFDQyxNQUE1QjtBQUFBLDRCQUNFO0FBQUssU0FBRyxFQUFFRixLQUFLLENBQUNHLEtBQWhCO0FBQXVCLFNBQUcsRUFBRUgsS0FBSyxDQUFDSTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSxnQkFBS0osS0FBSyxDQUFDSTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFBLGdCQUFVSixLQUFLLENBQUNLO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFJRTtBQUFBLGdCQUFJTCxLQUFLLENBQUNNO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVFELENBVEQ7O0FBV2VQLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gXCIuL01lZXR1cERldGFpbC5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IE1lZXR1cERldGFpbCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWx9PlxuICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9e3Byb3BzLnRpdGxlfSAvPlxuICAgICAgPGgxPntwcm9wcy50aXRsZX08L2gxPlxuICAgICAgPGFkZHJlc3M+e3Byb3BzLmFkZHJlc3N9PC9hZGRyZXNzPlxuICAgICAgPHA+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.js\n");

/***/ }),

/***/ "./components/meetups/MeetupDetail.module.css":
/*!****************************************************!*\
  !*** ./components/meetups/MeetupDetail.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"detail\": \"MeetupDetail_detail__C_8IT\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLm1vZHVsZS5jc3M/ZTY0MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWwubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRldGFpbFwiOiBcIk1lZXR1cERldGFpbF9kZXRhaWxfX0NfOElUXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.module.css\n");

/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ \"./components/meetups/MeetupDetail.js\");\n\n\nvar _jsxFileName = \"/Users/sebasnadu/code/SebasNadu/react-complete-guide-ex/25-NextJsProject/pages/[meetupId]/index.js\";\n\n\n\n\nconst MeetupDetails = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: props.meetupData.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: props.meetupData.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      image: props.meetupData.image || \"No image\",\n      title: props.meetupData.title,\n      address: props.meetupData.address,\n      description: props.meetupData.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\nasync function getStaticPaths() {\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__[\"MongoClient\"].connect(\"mongodb+srv://SebasNadu:Jnaitsabes9@cluster0.yvg09bl.mongodb.net/meetups?retryWrites=true&w=majority\");\n  const db = client.db();\n  const meetupsCollection = db.collection(\"meetups\");\n  const meetups = await meetupsCollection.find({}, {\n    _id: 1\n  }).toArray();\n  client.close();\n  return {\n    fallback: \"blocking\",\n    paths: meetups.map(meetup => ({\n      params: {\n        meetupId: meetup._id.toString()\n      }\n    }))\n  };\n}\nasync function getStaticProps(context) {\n  // fetch data for a single meetup\n  const meetupId = context.params.meetupId;\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_2__[\"MongoClient\"].connect(\"mongodb+srv://SebasNadu:Jnaitsabes9@cluster0.yvg09bl.mongodb.net/meetups?retryWrites=true&w=majority\");\n  const db = client.db();\n  const meetupsCollection = db.collection(\"meetups\");\n  const selectedMeetup = await meetupsCollection.findOne({\n    _id: new mongodb__WEBPACK_IMPORTED_MODULE_2__[\"ObjectId\"](meetupId)\n  });\n  console.log(selectedMeetup);\n  client.close();\n  return {\n    props: {\n      meetupData: {\n        id: selectedMeetup._id.toString(),\n        title: selectedMeetup.title,\n        address: selectedMeetup.address,\n        image: selectedMeetup.image,\n        description: selectedMeetup.description\n      }\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetails);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzPzkyYTYiXSwibmFtZXMiOlsiTWVldHVwRGV0YWlscyIsInByb3BzIiwibWVldHVwRGF0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImFkZHJlc3MiLCJnZXRTdGF0aWNQYXRocyIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwibWVldHVwcyIsImZpbmQiLCJfaWQiLCJ0b0FycmF5IiwiY2xvc2UiLCJmYWxsYmFjayIsInBhdGhzIiwibWFwIiwibWVldHVwIiwicGFyYW1zIiwibWVldHVwSWQiLCJ0b1N0cmluZyIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInNlbGVjdGVkTWVldHVwIiwiZmluZE9uZSIsIk9iamVjdElkIiwiY29uc29sZSIsImxvZyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLE1BQU1BLGFBQWEsR0FBSUMsS0FBRCxJQUFXO0FBQy9CLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBLGtCQUFRQSxLQUFLLENBQUNDLFVBQU4sQ0FBaUJDO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBRUYsS0FBSyxDQUFDQyxVQUFOLENBQWlCRTtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUtFLHFFQUFDLHdFQUFEO0FBQ0UsV0FBSyxFQUFFSCxLQUFLLENBQUNDLFVBQU4sQ0FBaUJHLEtBQWpCLElBQTBCLFVBRG5DO0FBRUUsV0FBSyxFQUFFSixLQUFLLENBQUNDLFVBQU4sQ0FBaUJDLEtBRjFCO0FBR0UsYUFBTyxFQUFFRixLQUFLLENBQUNDLFVBQU4sQ0FBaUJJLE9BSDVCO0FBSUUsaUJBQVcsRUFBRUwsS0FBSyxDQUFDQyxVQUFOLENBQWlCRTtBQUpoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUEsa0JBREY7QUFjRCxDQWZEOztBQWlCTyxlQUFlRyxjQUFmLEdBQWdDO0FBQ3JDLFFBQU1DLE1BQU0sR0FBRyxNQUFNQyxtREFBVyxDQUFDQyxPQUFaLENBQ25CLHNHQURtQixDQUFyQjtBQUdBLFFBQU1DLEVBQUUsR0FBR0gsTUFBTSxDQUFDRyxFQUFQLEVBQVg7QUFFQSxRQUFNQyxpQkFBaUIsR0FBR0QsRUFBRSxDQUFDRSxVQUFILENBQWMsU0FBZCxDQUExQjtBQUVBLFFBQU1DLE9BQU8sR0FBRyxNQUFNRixpQkFBaUIsQ0FBQ0csSUFBbEIsQ0FBdUIsRUFBdkIsRUFBMkI7QUFBRUMsT0FBRyxFQUFFO0FBQVAsR0FBM0IsRUFBdUNDLE9BQXZDLEVBQXRCO0FBRUFULFFBQU0sQ0FBQ1UsS0FBUDtBQUVBLFNBQU87QUFDTEMsWUFBUSxFQUFFLFVBREw7QUFFTEMsU0FBSyxFQUFFTixPQUFPLENBQUNPLEdBQVIsQ0FBYUMsTUFBRCxLQUFhO0FBQzlCQyxZQUFNLEVBQUU7QUFBRUMsZ0JBQVEsRUFBRUYsTUFBTSxDQUFDTixHQUFQLENBQVdTLFFBQVg7QUFBWjtBQURzQixLQUFiLENBQVo7QUFGRixHQUFQO0FBTUQ7QUFFTSxlQUFlQyxjQUFmLENBQThCQyxPQUE5QixFQUF1QztBQUM1QztBQUNBLFFBQU1ILFFBQVEsR0FBR0csT0FBTyxDQUFDSixNQUFSLENBQWVDLFFBQWhDO0FBRUEsUUFBTWhCLE1BQU0sR0FBRyxNQUFNQyxtREFBVyxDQUFDQyxPQUFaLENBQ25CLHNHQURtQixDQUFyQjtBQUdBLFFBQU1DLEVBQUUsR0FBR0gsTUFBTSxDQUFDRyxFQUFQLEVBQVg7QUFFQSxRQUFNQyxpQkFBaUIsR0FBR0QsRUFBRSxDQUFDRSxVQUFILENBQWMsU0FBZCxDQUExQjtBQUVBLFFBQU1lLGNBQWMsR0FBRyxNQUFNaEIsaUJBQWlCLENBQUNpQixPQUFsQixDQUEwQjtBQUNyRGIsT0FBRyxFQUFFLElBQUljLGdEQUFKLENBQWFOLFFBQWI7QUFEZ0QsR0FBMUIsQ0FBN0I7QUFJQU8sU0FBTyxDQUFDQyxHQUFSLENBQVlKLGNBQVo7QUFFQXBCLFFBQU0sQ0FBQ1UsS0FBUDtBQUVBLFNBQU87QUFDTGpCLFNBQUssRUFBRTtBQUNMQyxnQkFBVSxFQUFFO0FBQ1YrQixVQUFFLEVBQUVMLGNBQWMsQ0FBQ1osR0FBZixDQUFtQlMsUUFBbkIsRUFETTtBQUVWdEIsYUFBSyxFQUFFeUIsY0FBYyxDQUFDekIsS0FGWjtBQUdWRyxlQUFPLEVBQUVzQixjQUFjLENBQUN0QixPQUhkO0FBSVZELGFBQUssRUFBRXVCLGNBQWMsQ0FBQ3ZCLEtBSlo7QUFLVkQsbUJBQVcsRUFBRXdCLGNBQWMsQ0FBQ3hCO0FBTGxCO0FBRFA7QUFERixHQUFQO0FBV0Q7QUFFY0osNEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgTW9uZ29DbGllbnQsIE9iamVjdElkIH0gZnJvbSBcIm1vbmdvZGJcIjtcblxuaW1wb3J0IE1lZXR1cERldGFpbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbFwiO1xuXG5jb25zdCBNZWV0dXBEZXRhaWxzID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3Byb3BzLm1lZXR1cERhdGEudGl0bGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvcHMubWVldHVwRGF0YS5kZXNjcmlwdGlvbn0gLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxNZWV0dXBEZXRhaWxcbiAgICAgICAgaW1hZ2U9e3Byb3BzLm1lZXR1cERhdGEuaW1hZ2UgfHwgXCJObyBpbWFnZVwifVxuICAgICAgICB0aXRsZT17cHJvcHMubWVldHVwRGF0YS50aXRsZX1cbiAgICAgICAgYWRkcmVzcz17cHJvcHMubWVldHVwRGF0YS5hZGRyZXNzfVxuICAgICAgICBkZXNjcmlwdGlvbj17cHJvcHMubWVldHVwRGF0YS5kZXNjcmlwdGlvbn1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgXCJtb25nb2RiK3NydjovL1NlYmFzTmFkdTpKbmFpdHNhYmVzOUBjbHVzdGVyMC55dmcwOWJsLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcbiAgKTtcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xuXG4gIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKHt9LCB7IF9pZDogMSB9KS50b0FycmF5KCk7XG5cbiAgY2xpZW50LmNsb3NlKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBmYWxsYmFjazogXCJibG9ja2luZ1wiLFxuICAgIHBhdGhzOiBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoe1xuICAgICAgcGFyYW1zOiB7IG1lZXR1cElkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKCkgfSxcbiAgICB9KSksXG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjb250ZXh0KSB7XG4gIC8vIGZldGNoIGRhdGEgZm9yIGEgc2luZ2xlIG1lZXR1cFxuICBjb25zdCBtZWV0dXBJZCA9IGNvbnRleHQucGFyYW1zLm1lZXR1cElkO1xuXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgXCJtb25nb2RiK3NydjovL1NlYmFzTmFkdTpKbmFpdHNhYmVzOUBjbHVzdGVyMC55dmcwOWJsLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCJcbiAgKTtcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpO1xuXG4gIGNvbnN0IHNlbGVjdGVkTWVldHVwID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZE9uZSh7XG4gICAgX2lkOiBuZXcgT2JqZWN0SWQobWVldHVwSWQpLFxuICB9KTtcblxuICBjb25zb2xlLmxvZyhzZWxlY3RlZE1lZXR1cCk7XG5cbiAgY2xpZW50LmNsb3NlKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbWVldHVwRGF0YToge1xuICAgICAgICBpZDogc2VsZWN0ZWRNZWV0dXAuX2lkLnRvU3RyaW5nKCksXG4gICAgICAgIHRpdGxlOiBzZWxlY3RlZE1lZXR1cC50aXRsZSxcbiAgICAgICAgYWRkcmVzczogc2VsZWN0ZWRNZWV0dXAuYWRkcmVzcyxcbiAgICAgICAgaW1hZ2U6IHNlbGVjdGVkTWVldHVwLmltYWdlLFxuICAgICAgICBkZXNjcmlwdGlvbjogc2VsZWN0ZWRNZWV0dXAuZGVzY3JpcHRpb24sXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });