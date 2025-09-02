var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// azirdesign/index.ts
var index_exports = {};
__export(index_exports, {
  AddCardForm: () => add_card_form_default,
  AppSidebar: () => AppSidebar,
  Field: () => Field,
  Form: () => Form,
  ImagePreviewCell: () => image_preview_cell_default,
  Link: () => Link,
  NavMain: () => NavMain,
  NavProjects: () => NavProjects,
  NavRefine: () => NavRefine,
  NavUser: () => NavUser,
  PageHeader: () => PageHeader,
  TeamSwitcher: () => TeamSwitcher
});
module.exports = __toCommonJS(index_exports);

// azirdesign/components/add-card-form.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function AddCardForm({ user }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
    "Add Card Form for user: ",
    user.email
  ] }) });
}
var add_card_form_default = AddCardForm;

// azirdesign/components/app-sidebar.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function AppSidebar({ meta }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { children: "Sidebar" }) });
}

// azirdesign/components/field.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Field = ({ label, description, children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { children: label }),
    children,
    description && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { children: description })
  ] });
};

// azirdesign/components/form.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var Form = ({ children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("form", { ...props, children });
};

// azirdesign/components/image-preview-cell.tsx
var import_react = require("react");
var import_image = __toESM(require("next/image"));
var import_lucide_react = require("lucide-react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var ImagePreviewCell = ({
  src,
  alt = "Vista previa",
  thumbnailSize = 48
}) => {
  const [isOpen, setIsOpen] = (0, import_react.useState)(false);
  const [hasError, setHasError] = (0, import_react.useState)(false);
  const [imageLoaded, setImageLoaded] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);
  (0, import_react.useEffect)(() => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      setImageLoaded(true);
      setHasError(false);
    };
    img.onerror = () => {
      setImageLoaded(false);
      setHasError(true);
    };
  }, [src]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "h-full w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "button",
      {
        type: "button",
        "aria-label": alt,
        className: "h-full w-full border-none bg-transparent p-0",
        style: { lineHeight: 0 },
        onClick: () => imageLoaded && setIsOpen(true),
        children: hasError ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "flex h-12 w-12 items-center justify-center rounded border bg-gray-100 text-gray-400", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react.Image, { size: 24 }) }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          import_image.default,
          {
            src,
            alt,
            width: thumbnailSize,
            height: thumbnailSize,
            className: "h-full w-full cursor-pointer rounded border object-cover"
          }
        )
      }
    ),
    isOpen && imageLoaded && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "div",
      {
        role: "dialog",
        "aria-modal": "true",
        tabIndex: -1,
        onClick: () => setIsOpen(false),
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm",
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          import_image.default,
          {
            src,
            alt: alt + " ampliada",
            width: 600,
            height: 600,
            className: "max-h-[90vh] max-w-[90vw] rounded object-contain"
          }
        )
      }
    )
  ] });
};
var image_preview_cell_default = ImagePreviewCell;

// azirdesign/components/link.tsx
var import_react2 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
var Link = (0, import_react2.forwardRef)(({ children, href, title, className }, ref) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("a", { ref, href, className, title, children }));
Link.displayName = "Link";

// azirdesign/components/nav-main.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function NavMain({
  items
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { children: "Navigation Main" }) });
}

// azirdesign/components/nav-projects.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function NavProjects({
  projects
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { children: "Navigation Projects" }) });
}

// azirdesign/components/nav-refine.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function NavRefine() {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { children: "Navigation Refine" }) });
}

// azirdesign/components/nav-user.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function NavUser({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { children: "User Menu" }) });
}

// azirdesign/components/page-header.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var PageHeader = ({
  title,
  subTitle,
  isBack = false,
  extra,
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { children: [
    isBack && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("button", { children: "<-" }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { children: title }),
    subTitle && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { children: subTitle }),
    extra,
    children
  ] });
};

// azirdesign/components/team-switcher.tsx
var React2 = __toESM(require("react"));
var import_jsx_runtime12 = require("react/jsx-runtime");
function TeamSwitcher({
  teams
}) {
  const [activeTeam, setActiveTeam] = React2.useState(teams[0]);
  if (!activeTeam) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
    "Active Team: ",
    activeTeam.name
  ] }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AddCardForm,
  AppSidebar,
  Field,
  Form,
  ImagePreviewCell,
  Link,
  NavMain,
  NavProjects,
  NavRefine,
  NavUser,
  PageHeader,
  TeamSwitcher
});
