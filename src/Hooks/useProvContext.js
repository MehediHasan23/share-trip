import { useContext } from "react";
import { allContext } from "../Context/AuthProvider";


const useProvContext = () => {
  return useContext(allContext);
};

export default useProvContext;