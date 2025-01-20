import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react"; // Wrap the app with NextAuth provider
// import { LoadingProvider } from "../context/LoadingContext"; // Import LoadingProvider
import "../app/globals.css"; // Import global styles

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <SessionProvider session={pageProps.session}>
//       <LoadingProvider>
//         <Component {...pageProps} />
//       </LoadingProvider>
//     </SessionProvider>
//   );
// }

// export default MyApp;
