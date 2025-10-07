"use client";

import { useState, useEffect } from "react";
import { FaCheck, FaTimes, FaInfo, FaExclamationTriangle } from "react-icons/fa";

const Toast = ({ message, type = "success", duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onClose?.();
      }, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case "success":
        return <FaCheck className="w-4 h-4" />;
      case "error":
        return <FaExclamationTriangle className="w-4 h-4" />;
      case "info":
        return <FaInfo className="w-4 h-4" />;
      default:
        return <FaCheck className="w-4 h-4" />;
    }
  };

  const getTypeClasses = () => {
    switch (type) {
      case "success":
        return "bg-green-500 text-white";
      case "error":
        return "bg-red-500 text-white";
      case "info":
        return "bg-blue-500 text-white";
      default:
        return "bg-green-500 text-white";
    }
  };

  return (
    <div
      className={`toast ${getTypeClasses()} ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div className="flex items-center gap-3">
        {getIcon()}
        <span className="font-medium">{message}</span>
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(() => {
              onClose?.();
            }, 300);
          }}
          className="ml-2 hover:opacity-80 transition-opacity"
        >
          <FaTimes className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default Toast; 