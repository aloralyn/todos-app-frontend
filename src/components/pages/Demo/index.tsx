import React from "react";
import { useSelector } from "react-redux";
import DemoNavBar from "../../molecules/DemoNavBar";
import UserNavBar from "../../molecules/UserNavBar";
import DemoTemplate from "../../templates/Demo";
import { AppState } from "../../../store";

const Demo: React.FunctionComponent = () => {
  const userIsLoggedIn = useSelector((state: AppState) => {
    return state.user.isLoggedIn;
  });

  return (
    <>
      {userIsLoggedIn ? <UserNavBar /> : <DemoNavBar />}
      <DemoTemplate />
    </>
  );
};

export default Demo;
