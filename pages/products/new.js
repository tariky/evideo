import {
  Grid,
  Box,
  Title,
  Card,
  Text,
  Input,
  Select,
  Button,
  Checkbox,
  Divider,
  NumberInput,
  TextInput,
} from "@mantine/core";
import { useState, React } from "react";
// import { RichTextEditor } from "@mantine/rte";
import { IoCloudUpload, IoSave } from "react-icons/io5";
import PricePerItem from "../../components/PricePerItem";

export default function NewProduct() {
  // const [value, onChange] = useState("<p>Test</p>");

  /* 
  Svaka card sekcija ispod treba biti u odvojenoj komponenti i samo pomocu props spustati podatke
  sve te komponente bi trebale biti dumb komponente - tj. da ne sadrzavaju nikakvu logiku vec
  samo sluze za prikaz
  */
  return (
    <Box>
      <Title order={2} mb={16}>
        Test
      </Title>
      <Grid gutter={16}>
        <Grid.Col span={8}>
          <Card shadow={"xs"}>
            <Box>
              <TextInput label="Naziv" />
              {/* NextJS iz nekog razloga ima problem sa ucitavanjem RTE editora istraziti detaljnije ili ga zamjeniti alternativom... mozda samo input obicni staviti */}
              {/* <RichTextEditor value={value} onChange={onChange} /> */}
              <TextInput label="Opis" />
            </Box>
          </Card>
          <Card mt={16} shadow={"xs"}>
            <Text>Fotografije</Text>
            <Button fullWidth mt={16} leftIcon={<IoCloudUpload />}>
              Ucitaj fotografiju
            </Button>
          </Card>
          <Card shadow={"xs"} mt={16}>
            <Title order={5} mb={16}>
              Cijene
            </Title>
            <Grid gutter={16}>
              <Grid.Col span={6}>
                <TextInput label="Cijena" />
                <Checkbox mt={8} label="Cijena sa porezom" />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput label="Nabavna cijena" rightSection={<PricePerItem />} />
              </Grid.Col>
            </Grid>
          </Card>
          <Card mt={16} shadow={"xs"}>
            <Title order={5} mb={16}>
              Skladište
            </Title>
            <Grid>
              <Grid.Col span={6}>
                <TextInput label="SKU" />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput label="Barcode" />
              </Grid.Col>
            </Grid>
            <Divider my={16} />
            <Grid>
              <Grid.Col span={6}>
                <NumberInput label="Komada na stanju" />
              </Grid.Col>
              <Grid.Col span={6}>
                <TextInput label="Tezina proizvoda" />
              </Grid.Col>
            </Grid>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card shadow={"xs"}>
            <Select
            label="Status"
              defaultValue="skica"
              data={[
                {
                  value: "skica",
                  label: "Skica",
                },
                {
                  value: "aktivno",
                  label: "Aktivno",
                },
              ]}
            />
          </Card>
          <Card shadow={"xs"} mt={16}>
            <Title order={5} mb={16}>
              Organizacija
            </Title>
            <Select
              label="Kategorija"
              placeholder="Pick one"
              data={[
                { value: "react", label: "React" },
                { value: "ng", label: "Angular" },
                { value: "svelte", label: "Svelte" },
                { value: "vue", label: "Vue" },
              ]}
            />
            <Select
              label="Dobavljac"
              placeholder="Pick one"
              data={[
                { value: "react", label: "React" },
                { value: "ng", label: "Angular" },
                { value: "svelte", label: "Svelte" },
                { value: "vue", label: "Vue" },
              ]}
            />
          </Card>
          <Button
            mt={16}
            color="green"
            fullWidth
            size="lg"
            leftIcon={<IoSave />}
          >
            Spremi
          </Button>
        </Grid.Col>
      </Grid>
    </Box>
  );
}
