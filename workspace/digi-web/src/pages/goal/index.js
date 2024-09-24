import GoalWrapper from "@/components/goalComp/goalWrapper";
import Sidebar from "@/components/HomeComp/Sidebar/Sidebar";
import { ChakraProvider } from "@chakra-ui/react";

const index = () => {
  return (
    <ChakraProvider>
      <Sidebar />
      <GoalWrapper />
    </ChakraProvider>
  );
};
export default index;
