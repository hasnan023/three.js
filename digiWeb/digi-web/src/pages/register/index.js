import Sidebar from "@/components/HomeComp/Sidebar/Sidebar";
import Register from "@/components/AuthComp/Register";
import { ChakraProvider } from "@chakra-ui/react";

const index = () => {
  return (
    <ChakraProvider>
      {/* <Sidebar /> */}
      <Register />
    </ChakraProvider>
  );
};
export default index;
