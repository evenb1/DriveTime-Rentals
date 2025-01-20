// import React, { createContext, useContext, useState } from "react";

// // Define context types
// interface LoadingContextProps {
//   isLoading: boolean;
//   setLoading: (loading: boolean) => void;
// }

// // Create context
// const LoadingContext = createContext<LoadingContextProps | undefined>(
//   undefined
// );

// // Create provider
// export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [isLoading, setIsLoading] = useState(false);

//   const setLoading = (loading: boolean) => {
//     setIsLoading(loading);
//   };

//   return (
//     <LoadingContext.Provider value={{ isLoading, setLoading }}>
//       {children}
//     </LoadingContext.Provider>
//   );
// };

// // Create hook
// export const useLoading = () => {
//   const context = useContext(LoadingContext);
//   if (!context) {
//     throw new Error("useLoading must be used within a LoadingProvider");
//   }
//   return context;
// };
