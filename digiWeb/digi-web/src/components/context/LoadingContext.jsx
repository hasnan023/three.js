// src/context/LoadingContext.js
import { createContext, useContext, useState } from "react";
import { Spinner, Center, Box } from "@chakra-ui/react";

const LoadingContext = createContext();

export const useLoading = () => {
  return useContext(LoadingContext);
};

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoading = () => setIsLoading(true);
  const hideLoading = () => setIsLoading(false);

  return (
    <LoadingContext.Provider value={{ isLoading, showLoading, hideLoading }}>
      {isLoading && (
        <Center position="fixed" top="0" left="0" width="100%" height="100%">
          <Box>
            <Spinner size="xl" thickness="4px" />
          </Box>
        </Center>
      )}
      {children}
    </LoadingContext.Provider>
  );
};
