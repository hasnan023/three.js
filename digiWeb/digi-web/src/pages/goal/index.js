import GoalWrapper from "@/components/GoalComp/GoalWrapper";
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
