import clsx from "clsx";
import { createPortal } from "react-dom";

export function UiModal({
  width = "md",
  className,
  children,
  isOpen = false,
  onClose,
}) {

  if (!isOpen) {
    return null;
  }

  const handleClick = (e) => {
    const inModal = e.target.closest('[data-id=modal]')
    if(inModal) return;
    onClose()
  }
  const modal = (
    <div
    onClick={handleClick}
      className={clsx(
        "fixed inset-0 bg-slate-900/60 backdrop-blur pt-10 pb-10 overflow-auto",
        className
      )}
    >
      <div
      data-id='modal'
        className={clsx(
          "bg-white rounded  min-h-[320px] mx-auto relative",
          "flex flex-col",
          {
            md: "max-w-[640px] w-full",
            full: "mx-5",
          }[width]
        )}
      >
        <button
          className="w-8 h-8 flex items-center 
        justify-center bg-white/10 absolute 
        top-0 left-[calc(100%+12px)] rounded hover:bg-white/40 transition-colors"
        onClick={onClose}
        >
          <CrossLightIcon className="w-6 h-6 text-white" />
        </button>
        {children}
      </div>
    </div>
  );


  return createPortal(modal, document.getElementById('modals'))
}

UiModal.Header = function UiModalHeader({ children, className }) {
  return (
    <div className={clsx(className, "px-6 pt-6 pb-4 text-2xl")}>{children}</div>
  );
};
UiModal.Body = function UiModalHeader({ children, className }) {
  return <div className={clsx(className, "px-6")}>{children}</div>;
};
UiModal.Footer = function UiModalHeader({ children, className }) {
  return (
    <div className={clsx(className, "p-6 flex gap-4 justify-end mt-auto")}>
      {children}
    </div>
  );
};

function CrossLightIcon({ className }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      viewBox="0 -960 960 960"
      width="48"
      fill="white"
    >
      <path
        d="m249-207-42-42 231-231-231-231 42-42 231 231
       231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
      />
    </svg>
  );
}
