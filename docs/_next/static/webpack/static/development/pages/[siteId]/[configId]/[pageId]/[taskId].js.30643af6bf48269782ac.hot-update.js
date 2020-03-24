webpackHotUpdate("static\\development\\pages\\[siteId]\\[configId]\\[pageId]\\[taskId].js",{

/***/ "./components/IssuesList.tsx":
/*!***********************************!*\
  !*** ./components/IssuesList.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models */ "./components/models.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\projects\\projectq\\a11y-dashboard-next\\components\\IssuesList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




;

var styles = function styles(theme) {
  return Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    messageListItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    errorPanelHeader: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText
    },
    errorExpandIcon: {
      color: theme.palette.error.contrastText
    },
    warningPanelHeader: {
      backgroundColor: theme.palette.warning.main,
      color: theme.palette.warning.contrastText
    },
    warningExpandIcon: {
      color: theme.palette.warning.contrastText
    },
    noticePanelHeader: {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.info.contrastText
    },
    noticeExpandIcon: {
      color: theme.palette.info.contrastText
    },
    selectorContainer: {
      fontStyle: 'italic',
      wordBreak: 'break-word',
      wordWrap: 'break-word'
    }
  });
};

;

var groupByMessage = function groupByMessage(issues) {
  var groupedObj = issues.reduce(function (prev, cur) {
    var message = cur.message,
        selector = cur.selector,
        element = cur.element,
        code = cur.code;
    var criterion = code.criterion,
        techniques = code.techniques;
    var handle = criterion.handle,
        num = criterion.num;
    var issueMessage = prev[message] || {
      criterion: "".concat(num, ". ").concat(handle),
      message: message,
      techniques: techniques,
      items: [],
      count: 0
    };
    issueMessage.items.push({
      selector: selector,
      element: element
    });
    issueMessage.count = issueMessage.items.length;
    prev[message] = issueMessage;
    return prev;
  }, {});
  return _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default()(groupedObj);
};

var groupBySection = function groupBySection(issues, keyFn) {
  var groupedObj = issues.reduce(function (prev, cur) {
    var keyObj = keyFn(cur);
    var keyStr = keyObj.num;
    var groupedIssue = prev[keyStr] || {
      section: keyObj,
      issues: [],
      count: 0
    };
    groupedIssue.issues.push(cur);
    groupedIssue.count = groupedIssue.issues.length;
    prev[keyStr] = groupedIssue;
    return prev;
  }, {});
  return _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_1___default()(groupedObj);
};

var getTechniquePrefix = function getTechniquePrefix(technique) {
  var matches = technique.match(/([A-z]{1,})\d*/);
  if (matches.length < 2) return null;

  switch (matches[1].toUpperCase()) {
    case 'ARIA':
      return 'aria';

    case 'SCR':
      return 'client-side-script';

    case 'C':
      return 'css';

    case 'F':
      return 'failures';

    case 'FLASH':
      return 'flash';

    case 'G':
      return 'general';

    case 'H':
      return 'html';

    case 'PDF':
      return 'pdf';

    case 'SL':
      return 'silverlight';

    case 'SM':
      return 'smil';

    case 'T':
      return 'text';

    default:
      return null;
  }
};

var getTechniqueLink = function getTechniqueLink(technique) {
  var prefix = getTechniquePrefix(technique);
  var url = "https://www.w3.org/WAI/WCAG21/Techniques/".concat(prefix, "/").concat(technique);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    target: "_blank",
    href: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, technique);
};

var messageList = function messageList(issueMessages, stylesProps) {
  var classes = stylesProps.classes;
  return __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, issueMessages.map(function (im, imIndex) {
    return __jsx("li", {
      key: imIndex,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      component: "span",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, im.criterion, ": ", im.message), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      component: "div",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, "Techniques: ", im.techniques.map(function (t, i) {
      return __jsx("span", {
        key: i,
        style: {
          marginRight: "0.5em"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, getTechniqueLink(t));
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, im.items.map(function (item, itemIndex) {
      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
        key: itemIndex,
        className: classes.messageListItem,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        noWrap: true,
        color: "primary",
        component: "em",
        className: classes.selectorContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, item.selector), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
        gutterBottom: true,
        component: "div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, __jsx("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, item.element)));
    })));
  }));
};

var sectionPanel = function sectionPanel(groupedIssue, issueType, stylesProps) {
  var hasSubgroup = groupedIssue.hasSubgroup,
      section = groupedIssue.section,
      issues = groupedIssue.issues,
      count = groupedIssue.count;
  var num = section.num,
      handle = section.handle,
      title = section.title;
  var classes = stylesProps.classes;
  var panelHeaderClassName;
  var expandIconClassName;

  if (issueType == _models__WEBPACK_IMPORTED_MODULE_4__["IssueType"].Error) {
    panelHeaderClassName = classes.errorPanelHeader;
    expandIconClassName = classes.errorExpandIcon;
  } else if (issueType == _models__WEBPACK_IMPORTED_MODULE_4__["IssueType"].Warning) {
    panelHeaderClassName = classes.warningPanelHeader;
    expandIconClassName = classes.warningExpandIcon;
  } else if (issueType == _models__WEBPACK_IMPORTED_MODULE_4__["IssueType"].Notice) {
    panelHeaderClassName = classes.noticePanelHeader;
    expandIconClassName = classes.noticeExpandIcon;
  }

  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ExpansionPanel"], {
    style: {
      width: '100%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ExpansionPanelSummary"], {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: expandIconClassName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }),
    "aria-controls": "panel-".concat(num, "-content"),
    id: "panel-".concat(num, "-header"),
    className: panelHeaderClassName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    component: "span",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, num, ". ", handle, " ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, "(", count, ")"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ExpansionPanelDetails"], {
    style: {
      flexDirection: 'column'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "Info: ", __jsx("em", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, title)), hasSubgroup ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, issues.map(function (gi) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      disableGutters: true,
      key: gi.section.num,
      component: "li",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    }, sectionPanel(gi, issueType, stylesProps));
  })) : messageList(groupByMessage(issues), stylesProps)));
};

var IssuesList = function IssuesList(props) {
  var issues = props.issues,
      issueType = props.issueType,
      stylesProps = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["issues", "issueType"]);

  var groupedIssues = groupBySection(issues, function (issue) {
    return issue.code.principle;
  }).map(function (gp) {
    return {
      section: gp.section,
      hasSubgroup: true,
      issues: groupBySection(gp.issues, function (issue) {
        return issue.code.guideline;
      }),
      count: gp.issues.length
    };
  });
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, groupedIssues.map(function (gi) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      disableGutters: true,
      key: gi.section.num,
      component: "li",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }, sectionPanel(gi, issueType, stylesProps));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(styles)(IssuesList));

/***/ })

})
//# sourceMappingURL=[taskId].js.30643af6bf48269782ac.hot-update.js.map