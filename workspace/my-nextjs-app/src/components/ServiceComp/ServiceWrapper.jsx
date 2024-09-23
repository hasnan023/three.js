import { Center, Heading, Select } from "@chakra-ui/react";
import DomainChecker from "./DomainChecker/DomainChecker";
import { useState, useEffect } from "react";
import ShopifyExpense from "./ExpenseCalForms/ShopifyExpense";
import WordPressExpenses from "./ExpenseCalForms/WordpressExpenses";

const ServiceWrapper = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleValue = (e) => {
    setSelectedOption(e.target.value);
    console.log(selectedOption);
  };

  useEffect(() => {
    console.log(selectedOption); // Logs the updated selectedOption value
  }, [selectedOption]);
  return (
    <>
      <DomainChecker />
      <Center>
        <Select
          maxW={{ base: "80%", md: "600px" }}
          boxShadow="md"
          mt={5}
          placeholder="Explore to calculate"
          alignItems="center"
          variant="filled"
          value={selectedOption}
          onChange={handleValue}
        >
          <option value="Shopify">Shopify</option>
          <option value="Wordpress">Wordpress</option>
          <option value="React">React</option>
          <option value="Consultancy">Consultancy</option>
          <option value="Photography">Photography</option>
        </Select>
      </Center>
      {selectedOption === "Shopify" && <ShopifyExpense />}
      {selectedOption === "Wordpress" && <WordPressExpenses />}
    </>
  );
};
export default ServiceWrapper;
