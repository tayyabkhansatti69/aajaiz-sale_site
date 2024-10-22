"use strict";
exports.id = 393;
exports.ids = [393];
exports.modules = {

/***/ 4393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/CopyRight.js




const CopyRight = ({
  brandName
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "dizme_tm_section",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "dizme_tm_copyright",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "inner",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "left wow fadeInLeft",
            "data-wow-duration": "1s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              children: ["Developed with love by", " ", /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "https://themeforest.net/user/codeefly",
                target: "_blank",
                rel: "noreferrer",
                children: brandName && brandName
              }), " ", "\xA9 ", new Date().getFullYear()]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "right wow fadeInRight",
            "data-wow-duration": "1s",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                  href: "/terms",
                  children: "Terms & Condition"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                  href: "/policy",
                  children: "Privacy Policy"
                })
              })]
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ const components_CopyRight = (CopyRight);
;// CONCATENATED MODULE: ./src/useClickOutside.js


let useClickOutside = handler => {
  let domNode = (0,external_react_.useRef)();
  (0,external_react_.useEffect)(() => {
    let maybeHandler = event => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};

/* harmony default export */ const src_useClickOutside = (useClickOutside);
;// CONCATENATED MODULE: ./src/components/popup/ImageView.js





const ImgViews = ({
  close,
  src
}) => {
  let domNode = src_useClickOutside(() => {
    close(false);
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mfp-bg mfp-ready",
      onClick: () => close(false)
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
      tabIndex: -1,
      style: {
        overflow: "hidden auto"
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mfp-content",
          ref: domNode,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "mfp-iframe-scaler",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "mfp-img",
              src: src
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mfp-preloader",
          children: "Loading..."
        })]
      })
    })]
  });
};

const ImageView = () => {
  const {
    0: img,
    1: setImg
  } = (0,external_react_.useState)(false);
  const {
    0: imgValue,
    1: setImgValue
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    setTimeout(() => {
      const a = document.querySelectorAll("a");
      a.forEach(a => {
        if (a.href.includes("img/")) {
          if (a.getAttribute("download") === null) {
            a.addEventListener("click", e => {
              e.preventDefault();
              setImgValue(a.href);
              setImg(true);
            });
          }
        }
      });
    }, 1500);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
    children: img && /*#__PURE__*/jsx_runtime_.jsx(ImgViews, {
      close: () => setImg(false),
      src: imgValue
    })
  });
};

/* harmony default export */ const popup_ImageView = (ImageView);
;// CONCATENATED MODULE: ./src/components/popup/VideoPopup.js





const VideoPopup_ = ({
  close,
  videoID
}) => {
  let domNode = src_useClickOutside(() => {
    close(false);
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mfp-bg mfp-ready",
      onClick: () => close(false)
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
      tabIndex: -1,
      style: {
        overflow: "hidden auto"
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "mfp-container mfp-s-ready mfp-iframe-holder",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mfp-content",
          ref: domNode,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "mfp-iframe-scaler",
            children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
              title: "Close (Esc)",
              type: "button",
              className: "mfp-close",
              onClick: () => close(),
              children: "\xD7"
            }), /*#__PURE__*/jsx_runtime_.jsx("iframe", {
              src: videoID,
              title: "YouTube video player",
              frameBorder: "0",
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowFullScreen: true
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mfp-preloader",
          children: "Loading..."
        })]
      })
    })]
  });
};

const VideoPopup = () => {
  const {
    0: video,
    1: setVideo
  } = (0,external_react_.useState)(false);
  const {
    0: videoValue,
    1: setVideoValue
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    setTimeout(() => {
      const a = document.querySelectorAll("a");
      a.forEach(a => {
        if (a.href.includes("www.youtube.com") || a.href.includes("vimeo.com") || a.href.includes("soundcloud.com")) {
          a.addEventListener("click", e => {
            e.preventDefault();
            setVideoValue(a.href);
            setVideo(true);
          });
        }
      });
    }, 1500);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
    children: video && /*#__PURE__*/jsx_runtime_.jsx(VideoPopup_, {
      close: () => setVideo(false),
      videoID: videoValue
    })
  });
};

/* harmony default export */ const popup_VideoPopup = (VideoPopup);
// EXTERNAL MODULE: ./src/utilits.js
var utilits = __webpack_require__(2259);
// EXTERNAL MODULE: ./src/layout/Cursor.js
var Cursor = __webpack_require__(6456);
;// CONCATENATED MODULE: ./src/layout/Header.js



/* eslint-disable @next/next/no-html-link-for-pages */
const Header = ({
  logo
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "dizme_tm_header",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "inner",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "logo",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#",
            children: logo && /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: logo ? logo : "img/logo/logo.png",
              alt: "image"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "menu",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "anchor_nav",
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "current",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "/#home",
                children: "Home"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "/#about",
                children: "About"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "/#service",
                children: "Partner"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "/#service",
                children: "Donor"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "/#service",
                children: "Recipient"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                href: "/#contact",
                children: "Contact"
              })
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const layout_Header = (Header);
;// CONCATENATED MODULE: ./src/layout/MobileMenu.js
/* eslint-disable @next/next/no-html-link-for-pages */




const MobileMenu = ({
  logo
}) => {
  const {
    0: toggle,
    1: setToggle
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "dizme_tm_mobile_menu",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mobile_menu_inner",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "mobile_in",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "logo",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: logo ? logo : "img/logo/logo.png",
              alt: "image"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "trigger",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: `hamburger hamburger--slider ${toggle ? "is-active" : ""}`,
            onClick: () => setToggle(!toggle),
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "hamburger-box",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "hamburger-inner"
              })
            })
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "dropdown",
      style: {
        display: toggle ? "block" : "none"
      },
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "dropdown_inner",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "anchor_nav",
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "current",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "/#home",
              onClick: () => setToggle(false),
              children: "Home"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              onClick: () => setToggle(false),
              href: "/#about",
              children: "About"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              onClick: () => setToggle(false),
              href: "/#service",
              children: "Partner"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              onClick: () => setToggle(false),
              href: "/#service",
              children: "Donor"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              onClick: () => setToggle(false),
              href: "/#service",
              children: "Recipient"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              onClick: () => setToggle(false),
              href: "/#contact",
              children: "Contact"
            })
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const layout_MobileMenu = (MobileMenu);
// EXTERNAL MODULE: ./src/layout/PreLoader.js
var PreLoader = __webpack_require__(4141);
;// CONCATENATED MODULE: ./src/layout/Progressbar.js




const Progressbar = () => {
  (0,external_react_.useEffect)(() => {
    let scrollUp = document.getElementById("scroll-top"),
        lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      let st = window.scrollY;

      if (st > 110) {
        scrollUp.classList.add("active");
      } else {
        scrollUp.classList.remove("active");
      }
    });
  }, []);

  const onClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "progressbar",
    children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
      href: "#",
      id: "scroll-top",
      onClick: () => onClick(),
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "text",
        style: {
          bottom: "150.75px"
        },
        children: "To Top"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "line"
    })]
  });
};

/* harmony default export */ const layout_Progressbar = (Progressbar);
;// CONCATENATED MODULE: ./src/layout/Layout.js













const Layout = ({
  children,
  dark
}) => {
  const {
    0: siteInfo,
    1: setSiteInfo
  } = (0,external_react_.useState)({});
  (0,external_react_.useEffect)(async () => {
    setSiteInfo(await (0,utilits/* fatchData */.A6)("/static/siteSetting.json"));
    (0,utilits/* dataImage */.CC)();
  }, []);
  (0,external_react_.useEffect)(() => {
    (0,utilits/* wowJsAnimation */.OE)();
    (0,utilits/* aTagClick */.jd)();
    window.addEventListener("scroll", utilits/* scroll_ */.Ht);
    window.addEventListener("scroll", utilits/* stickyNav */.h4);
    window.addEventListener("scroll", utilits/* scrollTop */.SM);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PreLoader/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(popup_ImageView, {}), /*#__PURE__*/jsx_runtime_.jsx(popup_VideoPopup, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "dizme_tm_all_wrap",
      "data-magic-cursor": "show",
      children: [/*#__PURE__*/jsx_runtime_.jsx(layout_MobileMenu, {
        logo: siteInfo && siteInfo.logo && siteInfo.logo[dark ? "dark" : "light"]
      }), /*#__PURE__*/jsx_runtime_.jsx(layout_Header, {
        logo: siteInfo && siteInfo.logo && siteInfo.logo[dark ? "dark" : "light"]
      }), children, /*#__PURE__*/jsx_runtime_.jsx(components_CopyRight, {
        brandName: siteInfo && siteInfo.brandName
      }), /*#__PURE__*/jsx_runtime_.jsx(Cursor/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(layout_Progressbar, {})]
    })]
  });
};

/* harmony default export */ const layout_Layout = (Layout);

/***/ })

};
;