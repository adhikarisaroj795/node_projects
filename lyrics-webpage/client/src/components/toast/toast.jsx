import React, { useEffect, useState } from "react";
import "./toast.css";

const Toast = ({ message, type }) => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (message) {
      const newToast = { id: Date.now(), message, type };
      setToasts((prevToasts) => [...prevToasts, newToast]);

      const timer = setTimeout(() => {
        setToasts((prevToasts) =>
          prevToasts.filter((toast) => toast.id !== newToast.id)
        );
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [message, type]);

  const getIcon = (type) => {
    switch (type) {
      case "success":
        return <i className="fa-solid fa-circle-check"></i>;
      case "error":
        return <i className="fa-solid fa-circle-xmark"></i>;
      case "invalid":
        return <i className="fa-solid fa-circle-exclamation"></i>;
      default:
        return null;
    }
  };

  return (
    <div id="toastBox">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast ${toast.type}`}>
          {getIcon(toast.type)} {toast.message}
        </div>
      ))}
    </div>
  );
};

export default Toast;
