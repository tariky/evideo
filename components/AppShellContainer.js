import { AppShell, Navbar, Header, Title } from "@mantine/core";
import SidebarNavigation from "./SidebarNavigation";

export default function AppShellContainer({ children }) {
  return (
    <AppShell
      padding="md"
      sx={(theme) => ({
        // height: "100vh - 60",
      })}
      navbar={<SidebarNavigation />}
      header={
        <Header height={60} padding="xs">
          <Title order={2}>Evideo - PreAlpha</Title>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
}
