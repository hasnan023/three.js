import Login from "@/components/AuthComp/Login";
import Sidebar from "@/components/HomeComp/Sidebar/Sidebar";
import { ChakraProvider } from "@chakra-ui/react";

const index = () => {
  return (
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  );
};
export default index;
