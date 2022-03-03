import { ThemeIcon, Group, Navbar, Text, UnstyledButton } from "@mantine/core";
import Link from "next/link";
import { IoHome, IoPricetag } from "react-icons/io5";
import { useState } from "react";

const RouteItemSingle = ({ title, url, icon, color }) => {
  return (
    <Link href={url}>
      <UnstyledButton>
        <Group
          sx={(theme) => ({
            padding: "1rem",
            backgroundColor: theme.colors.gray[0],
            "&:hover": {
              backgroundColor: theme.colors.gray[1],
            },
          })}
        >
          <ThemeIcon color={color}>{icon}</ThemeIcon>
          <Text>{title}</Text>
        </Group>
      </UnstyledButton>
    </Link>
  );
};

const RouteItemNested = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <UnstyledButton onClick={() => setIsOpen(!isOpen)}>
        <Group
          sx={(theme) => ({
            padding: "1rem",
            backgroundColor: theme.colors.gray[0],
            "&:hover": {
              backgroundColor: theme.colors.gray[1],
            },
          })}
        >
          <ThemeIcon color="blue">
            <IoPricetag />
          </ThemeIcon>
          <Text>Proizvodi</Text>
        </Group>
      </UnstyledButton>
      {isOpen ? (
        <Group direction="column" spacing={"sm"} mt="md">
          <Link href={"/"}>
            <Text
              weight={700}
              sx={(theme) => ({
                paddingLeft: "1rem",
                width: "100%",
              })}
            >
              Proizvodi
            </Text>
          </Link>
          <Link href={"/"}>
            <Text
              weight={700}
              sx={(theme) => ({
                paddingLeft: "1rem",
                width: "100%",
              })}
            >
              Skladiste
            </Text>
          </Link>
        </Group>
      ) : null}
    </>
  );
};

export default function SidebarNavigation() {
  const routes = [
    {
      title: "Komandna ploca",
      url: "/",
      icon: <IoHome />,
      color: "red",
    },
  ];
  return (
    <Navbar width={{ base: 300 }} height={500}>
      {routes.map((route, index) => {
        return (
          <RouteItemSingle
            key={index}
            title={route.title}
            color={route.color}
            icon={route.icon}
            url={route.url}
          />
        );
      })}
      {/* Dev only */}
      <RouteItemNested />
    </Navbar>
  );
}
