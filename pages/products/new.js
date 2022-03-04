import {
  Grid,
  Box,
  Title,
  Card,
  Text,
  Input,
  Select,
  Button,
} from "@mantine/core";
import { useState, React } from "react";
// import { RichTextEditor } from "@mantine/rte";
import { IoCloudUpload } from "react-icons/io5";

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
              <Text>Naziv</Text>
              <Input />
              <Text mt={10}>Opis</Text>
              {/* NextJS iz nekog razloga ima problem sa ucitavanjem RTE editora istraziti detaljnije ili ga zamjeniti alternativom... mozda samo input obicni staviti */}
              {/* <RichTextEditor value={value} onChange={onChange} /> */}
              <Input />
            </Box>
          </Card>
          <Card mt={16} shadow={"xs"}>
            <Text>Fotografije</Text>
            <Button fullWidth mt={16} leftIcon={<IoCloudUpload />}>
              Ucitaj fotografiju
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card shadow={"xs"}>
            <Text>Status</Text>
            <Select
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
        </Grid.Col>
      </Grid>
    </Box>
  );
}
