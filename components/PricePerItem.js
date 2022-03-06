import { useState } from "react";
import { Popover, Text, Button, ActionIcon } from "@mantine/core";
import { IoHelp } from "react-icons/io5";

export default function PricePerItem() {
  const [opened, setOpened] = useState(false);
  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      target={
        <ActionIcon
          radius="xl"
          variant="light"
          onClick={() => setOpened((o) => !o)}
        >
          <IoHelp />
        </ActionIcon>
      }
      width={260}
      position="bottom"
      withArrow
    >
      <div style={{ display: "flex" }}>
        <Text size="sm">
          Nabavna cijena se koristi za proracun profita. Kupac ovu cijenu ne
          vidi.
        </Text>
      </div>
    </Popover>
  );
}
