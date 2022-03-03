import { ActionIcon, Group, Navbar, Text, UnstyledButton } from "@mantine/core";
import { IoHome } from "react-icons/io5";

export default function SidebarNavigation() {
  return (
    <Navbar width={{ base: 300 }} height={500}>
      <UnstyledButton fullWidth>
        <Group
          sx={(theme) => ({
            padding: "1rem",
            backgroundColor: theme.colors.gray[0],
            "&:hover": {
              backgroundColor: theme.colors.gray[1],
            },
          })}
        >
          <ActionIcon color="red" variant="filled">
            <IoHome />
          </ActionIcon>
          <Text>Pocetna</Text>
        </Group>
      </UnstyledButton>
    </Navbar>
  );
}
