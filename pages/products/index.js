import { Box, Button, Group, Title, Card, Input, Table } from "@mantine/core";
import { IoSearch } from "react-icons/io5";

export default function index() {
  const elements = [
    { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
  ];
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));
  return (
    <Group
      direction="column"
      sx={(theme) => ({
        width: "100%",
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        })}
      >
        <Title order={2}>Proizvodi</Title>
        <Button>Dodaj proizvod</Button>
      </Box>
      <Card
        sx={(theme) => ({
          width: "100%",
        })}
      >
        <Input placeholder="Pretraga proizvoda" icon={<IoSearch />} />
        <Table mt={16}>
          <thead>
            <tr>
              <th>Element position</th>
              <th>Element name</th>
              <th>Symbol</th>
              <th>Atomic mass</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Card>
    </Group>
  );
}
