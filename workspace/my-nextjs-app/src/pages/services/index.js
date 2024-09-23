import DomainChecker from "@/components/ServiceComp/DomainChecker/DomainChecker";
import ShopifyExpense from "@/components/ServiceComp/ExpenseCalForms/ShopifyExpense";
import Sidebar from "@/components/HomeComp/Sidebar/Sidebar";
import { ChakraProvider } from "@chakra-ui/react";
import ServiceWrapper from "@/components/ServiceComp/ServiceWrapper";

const index = () => {
  return (
    <ChakraProvider>
      <Sidebar />
      <ServiceWrapper />
    </ChakraProvider>
  );
};
export default index;
