/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = utils;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_index__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(2);




function utils() {
  var extract_params = function(params_string) {
    var params = {};
    var raw_params = params_string.split("&");

    var j = 0;
    for (var i = raw_params.length - 1; i >= 0; i--) {
      var url_params = raw_params[i].split("=");
      if (url_params.length == 2) {
        params[url_params[0]] = url_params[1];
      } else if (url_params.length == 1) {
        params[j] = url_params[0];
        j += 1;
      } else {
        //param not readable. pass.
      }
    }

    return params;
  };

  return {
    router: function(route, data) {
      route = route || location.hash.slice(1) || "home";

      var temp = route.split("?");
      var route_split = temp.length;
      var function_to_invoke = temp[0] || false;

      if (route_split > 1) {
        var params = extract_params(temp[1]);
      }

      //fire away...
      if (function_to_invoke) {
        __WEBPACK_IMPORTED_MODULE_0__views_index__["a" /* default */][function_to_invoke](data, params);
      }
    },

    render: function(element_id, content, convert_markdown) {
      convert_markdown = convert_markdown || false;
      if (!convert_markdown) {
        document.getElementById(element_id).innerHTML = content;
      } else {
        var converter = new showdown.Converter();
        document.getElementById(element_id).innerHTML = converter.makeHtml(
          content
        );
      }
      document.getElementById(element_id).scrollIntoView();
    },

    //This function is for illustration as there is really no need for ajax here...
    request: function(
      api_stub,
      success_callback,
      error_callback,
      callback_params
    ) {
      api_stub = api_stub || "";
      callback_params = callback_params || {};

      __WEBPACK_IMPORTED_MODULE_1__controllers_index__["a" /* default */].show_loader("page-content");

      var url = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */].api_server + api_stub;

      var x = new XMLHttpRequest();
      x.onreadystatechange = function() {
        if (x.readyState == XMLHttpRequest.DONE) {
          if (x.status == 200) {
            __WEBPACK_IMPORTED_MODULE_1__controllers_index__["a" /* default */][success_callback](x.responseText, callback_params);
          } else {
            __WEBPACK_IMPORTED_MODULE_1__controllers_index__["a" /* default */][error_callback](x.status, callback_params);
          }
        }
      };
      //other methods can be implemented here
      x.open("GET", url, true);
      x.send();
    },

    get_link: function(post) {
      var link = "#post?" + post.post;
      if (post.external_link) {
        link = post.external_link;
      }
      return link;
    }
  };
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hello__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__posts__ = __webpack_require__(9);




/* harmony default export */ __webpack_exports__["a"] = ({
  hello_text: __WEBPACK_IMPORTED_MODULE_0__hello__["a" /* default */],
  loader: __WEBPACK_IMPORTED_MODULE_1__loader__["a" /* default */],
  all_posts: __WEBPACK_IMPORTED_MODULE_2__posts__["a" /* default */].all_posts,
  recent_posts: __WEBPACK_IMPORTED_MODULE_2__posts__["a" /* default */].recent_posts
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  api_server: "http://localhost:8080/"
  //'api_server': 'http://vcap.me:8080/'
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__templates_index__ = __webpack_require__(1);


const home_page = function(data, params) {
  var all_posts = JSON.parse(data);

  var posts_to_show = 1;
  var template_context = [];
  for (var i = 0; i < posts_to_show; i++) {
    var post = all_posts[i];
    var item = {
      link: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* default */])().get_link(post),
      title: post.post.replace(/-/g, " "),
      snippet: post.snippet,
      published_on: post.added_on
    };
    template_context.push(item);
  }

  //get recent posts
  var recent_posts = __WEBPACK_IMPORTED_MODULE_1__templates_index__["a" /* default */].recent_posts(template_context);

  //get hello text
  var hello_text = __WEBPACK_IMPORTED_MODULE_1__templates_index__["a" /* default */].hello_text();

  var final_content = hello_text + recent_posts;
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* default */])().render("page-content", final_content);
};

const home_page_error = function(data, params) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* default */])().render("page-content", data);
};
const show_loader = function(element) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* default */])().render(element, __WEBPACK_IMPORTED_MODULE_1__templates_index__["a" /* default */].loader());
};
/* harmony default export */ __webpack_exports__["a"] = ({
  show_loader,
  home_page,
  home_page_error
});


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post__ = __webpack_require__(5);



/* harmony default export */ __webpack_exports__["a"] = ({
  search_post: __WEBPACK_IMPORTED_MODULE_1__post__["a" /* default */].search_post,
  show_all_posts: __WEBPACK_IMPORTED_MODULE_1__post__["a" /* default */].show_all_posts,
  show_all_posts_error: __WEBPACK_IMPORTED_MODULE_1__post__["a" /* default */].show_all_posts_error,
  show_post: __WEBPACK_IMPORTED_MODULE_1__post__["a" /* default */].show_post,
  show_loader: __WEBPACK_IMPORTED_MODULE_0__home__["a" /* default */].show_loader,
  home_page: __WEBPACK_IMPORTED_MODULE_0__home__["a" /* default */].home_page,
  home_page_error: __WEBPACK_IMPORTED_MODULE_0__home__["a" /* default */].home_page_error
});


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__templates_index__ = __webpack_require__(1);



const show_post = function(data, params) {
  //var content = templates.post(templates_context);
  var content = data;
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* default */])().render("page-content", content, true);
};

const show_post_error = function(data, params) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* default */])().render("page-content", data);
};

const show_all_posts = function(data, params) {
  var all_posts = JSON.parse(data);

  var template_context = [];
  var temp = all_posts.length;
  for (var i = 0; i < temp; i++) {
    var post = all_posts[i];
    var item = {
      link: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* default */])().get_link(post),
      title: post.post.replace(/-/g, " "),
      published_on: post.added_on,
      tags: post.tags.join(", ")
    };
    template_context.push(item);
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* default */])().render("page-content", __WEBPACK_IMPORTED_MODULE_1__templates_index__["a" /* default */].all_posts(template_context));
};

const show_all_posts_error = function(data, params) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* default */])().render("page-content", data);
};

const search_post = function(data, params) {
  __WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* default */].render("page-content", data);
};
/* harmony default export */ __webpack_exports__["a"] = ({
  search_post,
  show_all_posts,
  show_all_posts_error,
  show_post
});


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils__ = __webpack_require__(0);
 //initialise globals
var templates = {};
var controllers = {};
var views = {};

window.onload = function() {
  console.log("Application loaded at " + Date.now());

  //register router
  window.addEventListener("hashchange", function() {
    debugger;
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* default */])().router();
  });

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* default */])().router();
};


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(data) {
  var content = `
        <div id="hello_text">
            <h2>Hello...</h2>
            <img src="src/images/will.jpg" align="left" style="width:70px;">
            <p>
                Thank you for visiting my blog. I am Will. I am a passionate about techie, and love to share and learning . So be curious and follow me!
            </p>
        </div>
    `;

  return content;
});


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(data) {
  var content = `
        <center>
            <img src="src/images/loader.gif">
        </center>
    `;
  return content;
});


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const recent_posts = function(data) {
  var content = `
        <div id="recent_posts" class="">
            <h2>Recent Posts</h2>
    `;
  for (var i = 0; i < 1; i++) {
    var post = data[i];
    content = content +
      `
            <h3><a href="` +
      post.link +
      `">` +
      post.title +
      `</a></h3>
            <i class="post_date">posted on ` +
      post.published_on +
      `</i><br>
            <p>` +
      post.snippet +
      `</p>
        `;
  }
  content = content + "</div>";

  return content;
};

const all_posts = function(data) {
  var content = `
        <div id="all_posts" class="">
            <h2>All Posts</h2>
    `;
  const no_of_posts = data.length;
  for (var i = 0; i < no_of_posts; i++) {
    var post = data[i];
    content = content +
      `
            <h3><a href="` +
      post.link +
      `">` +
      post.title +
      `</a></h3>
            <i>posted on ` +
      post.published_on +
      `</i><br>
            <i>tags: ` +
      post.tags +
      `</i>
            <br><br>
        `;
  }
  content = content + "</div>";

  return content;
};
/* harmony default export */ __webpack_exports__["a"] = ({
  all_posts,
  recent_posts
});


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function(data, params) {
  var api_stub = "posts/index.json";

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* default */])().request(api_stub, "show_all_posts", "show_all_posts_error");
});


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils__ = __webpack_require__(0);

/* harmony default export */ __webpack_exports__["a"] = (function(data, params) {
  var api_stub = "posts/index.json";

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* default */])().request(api_stub, "home_page", "home_page_error");
});


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__all_posts__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(11);




/* harmony default export */ __webpack_exports__["a"] = ({
  all_posts: __WEBPACK_IMPORTED_MODULE_0__all_posts__["a" /* default */],
  post: __WEBPACK_IMPORTED_MODULE_1__post__["a" /* default */],
  home: __WEBPACK_IMPORTED_MODULE_2__home__["a" /* default */]
});


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function(data, params) {
  var api_stub = "posts/" + params[0] + ".md";

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* default */])().request(api_stub, "show_post", "show_post_error");
});


/***/ })
/******/ ]);