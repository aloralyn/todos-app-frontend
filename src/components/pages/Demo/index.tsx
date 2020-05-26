import React, { useContext, useEffect } from "react";
import gql from "graphql-tag";
import { useLazyQuery } from "@apollo/react-hooks";
import DemoNavBar from "../../molecules/DemoNavBar";
import UserNavBar from "../../molecules/UserNavBar";
import DemoTemplate from "../../templates/Demo";
import { AppContext } from "../../../store/context";
import { Types } from "../../../store/reducers";
import { User } from "../../../generated/graphql";

const fetchUser = gql`
  query FetchUser($id: String!) {
    getUser(_id: $id) {
      _id
      name
      email
    }
  }
`;

const Demo: React.FunctionComponent = () => {
  const { state } = useContext(AppContext);
  const [getUser, { data }] = useLazyQuery(fetchUser);
  const { dispatch } = useContext(AppContext);
  const setUser = (user: User) =>
    dispatch({
      type: Types.SetUser,
      payload: {
        isLoggedIn: true,
        user: user,
      },
    });

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    const userID = auth && JSON.parse(auth).id;
    if (userID && !state.isLoggedIn) {
      getUser({
        variables: { id: userID },
      });
    }
  }, [getUser, state]);

  useEffect(() => {
    if (data && !state.user) {
      setUser(data);
    }
  });

  return (
    <>
      {state.isLoggedIn ? <UserNavBar /> : <DemoNavBar />}
      <DemoTemplate />
    </>
  );
};

export default Demo;
