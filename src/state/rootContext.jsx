"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const RootContex = createContext(null);

export const RootProvider = ({ children }) => {
  const router = useRouter();
  const [preventNavigation, setPreventNavigation] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [lastUrl, setLastUrl] = useState(null);

  const navigate = (url) => {
    if (!preventNavigation) {
      router.push(url);
      setLastUrl(null);
      setShowModal(false);
    } else {
      setShowModal(true);
      setLastUrl(url);
    }
  };

  useEffect(() => {
    if (!preventNavigation && lastUrl) {
      router.push(lastUrl);
      setLastUrl(null);
      setShowModal(false)
    }
  }, [preventNavigation, lastUrl]);

  return (
    <RootContex.Provider
      value={{
        preventNavigation,
        setPreventNavigation,
        navigate,
        showModal,
        setShowModal,
        setLastUrl,
      }}
    >
      {children}
    </RootContex.Provider>
  );
};

export const useRootContext = () => {
  const context = useContext(RootContex);
  if (!context) {
    throw new Error("error related to context");
  }
  return context;
};
