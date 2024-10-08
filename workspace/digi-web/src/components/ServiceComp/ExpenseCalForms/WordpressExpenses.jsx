import { Formik, Field, Form } from "formik";
import {
  Container,
  Button,
  Select,
  Input,
  FormControl,
  FormLabel,
  VStack,
  Text,
} from "@chakra-ui/react";

const WordPressExpenses = () => {
  return (
    <Container
      borderRadius={8}
      bg="blue.100"
      centerContent
      py={10}
      mt={10}
      shadow="md"
      maxW={{ base: "80%", md: "600px" }}
    >
      <Text fontSize="2xl" mb={4}>
        Wordpress Expense Calculator
      </Text>
      <Formik
        initialValues={{
          plan: "basic",
          transactions: 0,
          avgTransactionValue: 0,
          gatewayFee: 2.9,
        }}
        onSubmit={(values) => {
          const { plan, transactions, avgTransactionValue, gatewayFee } =
            values;

          // Shopify monthly subscription fees
          const planCosts = {
            basic: 29,
            shopify: 79,
            advanced: 299,
          };

          const monthlyPlanCost = planCosts[plan];
          const transactionFees =
            transactions * avgTransactionValue * (gatewayFee / 100);
          const totalCost = monthlyPlanCost + transactionFees;

          alert(`Total Shopify Expenses: $${totalCost.toFixed(2)}`);
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>Select Shopify Plan</FormLabel>
                <Field as={Select} name="plan" onChange={handleChange}>
                  <option value="basic">Basic Shopify ($29/month)</option>
                  <option value="shopify">Shopify ($79/month)</option>
                  <option value="advanced">
                    Advanced Shopify ($299/month)
                  </option>
                </Field>
              </FormControl>

              <FormControl>
                <FormLabel>Number of Transactions</FormLabel>
                <Field
                  as={Input}
                  type="number"
                  name="transactions"
                  placeholder="Enter number of transactions"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Average Transaction Value ($)</FormLabel>
                <Field
                  as={Input}
                  type="number"
                  name="avgTransactionValue"
                  placeholder="Enter average transaction value"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Payment Gateway Fee (%)</FormLabel>
                <Field
                  as={Input}
                  type="number"
                  name="gatewayFee"
                  placeholder="Enter payment gateway fee"
                />
              </FormControl>

              <Button colorScheme="blue" type="submit">
                Calculate Expenses
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default WordPressExpenses;
