// azirdesign/components/add-card-form.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function AddCardForm({ user }) {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { children: [
    "Add Card Form for user: ",
    user.email
  ] }) });
}
var add_card_form_default = AddCardForm;

// azirdesign/components/app-sidebar.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function AppSidebar({ meta }) {
  return /* @__PURE__ */ jsx2("div", { children: /* @__PURE__ */ jsx2("div", { children: "Sidebar" }) });
}

// azirdesign/components/field.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var Field = ({ label, description, children }) => {
  return /* @__PURE__ */ jsxs2("div", { children: [
    label && /* @__PURE__ */ jsx3("div", { children: label }),
    children,
    description && /* @__PURE__ */ jsx3("div", { children: description })
  ] });
};

// azirdesign/components/form.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var Form = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx4("form", { ...props, children });
};

// azirdesign/components/image-preview-cell.tsx
import { useState, useEffect } from "react";
import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var ImagePreviewCell = ({
  src,
  alt = "Vista previa",
  thumbnailSize = 48
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs3("div", { className: "h-full w-full", children: [
    /* @__PURE__ */ jsx5(
      "button",
      {
        type: "button",
        "aria-label": alt,
        className: "h-full w-full border-none bg-transparent p-0",
        style: { lineHeight: 0 },
        onClick: () => imageLoaded && setIsOpen(true),
        children: hasError ? /* @__PURE__ */ jsx5("div", { className: "flex h-12 w-12 items-center justify-center rounded border bg-gray-100 text-gray-400", children: /* @__PURE__ */ jsx5(ImageIcon, { size: 24 }) }) : /* @__PURE__ */ jsx5(
          Image,
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
    isOpen && imageLoaded && /* @__PURE__ */ jsx5(
      "div",
      {
        role: "dialog",
        "aria-modal": "true",
        tabIndex: -1,
        onClick: () => setIsOpen(false),
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm",
        children: /* @__PURE__ */ jsx5(
          Image,
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
import { forwardRef } from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var Link = forwardRef(({ children, href, title, className }, ref) => /* @__PURE__ */ jsx6("a", { ref, href, className, title, children }));
Link.displayName = "Link";

// azirdesign/components/nav-main.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
function NavMain({
  items
}) {
  return /* @__PURE__ */ jsx7("div", { children: /* @__PURE__ */ jsx7("div", { children: "Navigation Main" }) });
}

// azirdesign/components/nav-projects.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
function NavProjects({
  projects
}) {
  return /* @__PURE__ */ jsx8("div", { children: /* @__PURE__ */ jsx8("div", { children: "Navigation Projects" }) });
}

// azirdesign/components/nav-refine.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
function NavRefine() {
  return /* @__PURE__ */ jsx9("div", { children: /* @__PURE__ */ jsx9("div", { children: "Navigation Refine" }) });
}

// azirdesign/components/nav-user.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
function NavUser({ className }) {
  return /* @__PURE__ */ jsx10("div", { className, children: /* @__PURE__ */ jsx10("div", { children: "User Menu" }) });
}

// azirdesign/components/page-header.tsx
import { jsx as jsx11, jsxs as jsxs4 } from "react/jsx-runtime";
var PageHeader = ({
  title,
  subTitle,
  isBack = false,
  extra,
  children
}) => {
  return /* @__PURE__ */ jsxs4("div", { children: [
    isBack && /* @__PURE__ */ jsx11("button", { children: "<-" }),
    /* @__PURE__ */ jsx11("h2", { children: title }),
    subTitle && /* @__PURE__ */ jsx11("div", { children: subTitle }),
    extra,
    children
  ] });
};

// azirdesign/components/team-switcher.tsx
import * as React2 from "react";
import { jsx as jsx12, jsxs as jsxs5 } from "react/jsx-runtime";
function TeamSwitcher({
  teams
}) {
  const [activeTeam, setActiveTeam] = React2.useState(teams[0]);
  if (!activeTeam) {
    return null;
  }
  return /* @__PURE__ */ jsx12("div", { children: /* @__PURE__ */ jsxs5("div", { children: [
    "Active Team: ",
    activeTeam.name
  ] }) });
}
export {
  add_card_form_default as AddCardForm,
  AppSidebar,
  Field,
  Form,
  image_preview_cell_default as ImagePreviewCell,
  Link,
  NavMain,
  NavProjects,
  NavRefine,
  NavUser,
  PageHeader,
  TeamSwitcher
};
