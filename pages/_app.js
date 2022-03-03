import "../styles/globals.css";
import { MantineProvider } from "@mantine/core";
import AppShellContainer from "../components/AppShellContainer";

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider>
      <AppShellContainer>
        <Component {...pageProps} />
      </AppShellContainer>
    </MantineProvider>
  );
}

export default MyApp;
