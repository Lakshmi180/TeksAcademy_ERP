import { useContext } from "react";
import { UsersContext } from "../context/UsersContext/UsersContextProvider";


export const  useUserContext= () => {
    const context = useContext(UsersContext);
    if (!context) {
      throw Error(
        "UsersContext must be used inside an UsersContextProvider"
      );
    }
    return context;
  };