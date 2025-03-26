import React, { useEffect, useState } from "react";
import Header from "../components/Header";

import "./MainPage.css";
import LoaderFullPage from "../components/LoaderFullPage";
import UserForm from "../components/UserInfo";

function MainPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // simulate a 2-second loading delay
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoaderFullPage />;
  }
  return (
    <div>
      <Header />;
    </div>
  );
}

export default MainPage;
