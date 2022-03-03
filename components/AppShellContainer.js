import { AppShell, Navbar, Header } from "@mantine/core";
import SidebarNavigation from "./SidebarNavigation";

export default function AppShellContainer({ children }) {
  return (
    <AppShell
      padding="md"
      style={{ height: "100vh" }}
      navbar={
        <SidebarNavigation />
      }
      header={
        <Header height={60} padding="xs">
          {/* Header content */}
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
