import React from "react";

const userContext = React.createContext();

const providerC = userContext.Provider;
const consumerC = userContext.consumer;
export { providerC, consumerC };
export userContext;