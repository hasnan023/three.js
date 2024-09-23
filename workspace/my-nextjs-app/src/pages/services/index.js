import DomainChecker from "@/components/DomainChecker/DomainChecker";
import ShopifyExpense from "@/components/ShopifyExpense/ShopifyExpense";
import Sidebar from "@/components/Sidebar/Sidebar";
import { ChakraProvider } from "@chakra-ui/react";

const index = () => {
  return (
    <ChakraProvider>
      <Sidebar />
      <DomainChecker />
      <ShopifyExpense />
    </ChakraProvider>
  );
};
export default index;
