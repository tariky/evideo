import {
  Box,
  Button,
  Group,
  Title,
  Card,
  Input,
  Table,
  Image,
  Checkbox,
  ActionIcon,
  Divider,
} from "@mantine/core";
import { IoArrowBack, IoArrowForward, IoSearch } from "react-icons/io5";

export default function index() {
  // Ovo se moze ukoloniti jer sam hardkodovo vrijednosti u rows konstanti
  const elements = [
    { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
  ];
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>
        <Checkbox />
      </td>
      <td>
        {/* Prikaz slike iz nekoga meni nepoznatnog razloga ima desnu marginu, potrebno dalje istrazivanje */}
        <Image
          radius="md"
          src="https://cdn.shopify.com/s/files/1/0012/0707/4917/products/188_065d1763-cdfb-4621-89f5-d55ebd6bc090_350x350.jpg?v=1626683108"
          alt="Random unsplash image"
          width={50}
          height={50}
          fit="contain"
        />
      </td>
      <td>Test123</td>
      <td>Draft</td>
      <td>5</td>
      <td>Majica</td>
      <td>Apple</td>
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
        my={9}
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
        shadow={"sm"}
        sx={(theme) => ({
          width: "100%",
        })}
      >
        <Input placeholder="Pretraga proizvoda" icon={<IoSearch />} />
        <Table mt={16}>
          <thead>
            <tr>
              <th>
                <Checkbox />
              </th>
              <th></th>
              <th>Naziv</th>
              <th>Status</th>
              <th>Inventura</th>
              <th>Tip</th>
              <th>Dobavljac</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
        <Divider my={16} />
        <Group direction="row" position="center" spacing={"xs"}>
          <ActionIcon size="xl" radius="md" variant="filled">
            <IoArrowBack />
          </ActionIcon>
          <ActionIcon size="xl" radius="md" variant="filled">
            <IoArrowForward />
          </ActionIcon>
        </Group>
      </Card>
    </Group>
  );
}
