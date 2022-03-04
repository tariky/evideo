import { ThemeIcon, Group, Navbar, Text, UnstyledButton } from "@mantine/core";
import Link from "next/link";
import {
  IoHome,
  IoPricetag,
  IoCart,
  IoAnalyticsOutline,
  IoCogOutline,
} from "react-icons/io5";
import { useState } from "react";

const RouteItemSingle = ({ title, url, icon, color }) => {
  return (
    <Link href={url}>
      <UnstyledButton>
        <Group
          sx={(theme) => ({
            padding: ".75rem",
            "&:hover": {
              backgroundColor: theme.colors.gray[1],
            },
          })}
        >
          <ThemeIcon size={"sm"} color={color}>
            {icon}
          </ThemeIcon>
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
            padding: ".75rem",
            "&:hover": {
              backgroundColor: theme.colors.gray[1],
            },
          })}
        >
          <ThemeIcon size={"sm"} color="blue">
            <IoPricetag size={"12"} />
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
                paddingLeft: "1.5rem",
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
                paddingLeft: "1.5rem",
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
      title: "Komandna ploča",
      url: "/",
      icon: <IoHome size={"12"} />,
      color: "red",
    },
    {
      title: "Prodaja",
      url: "/",
      icon: <IoCart size={"12"} />,
      color: "green",
    },
    {
      title: "Proizvodi",
      url: "/products",
      icon: <IoPricetag size={"12"} />,
      color: "blue",
    },
    {
      title: "Analitika",
      url: "/",
      icon: <IoAnalyticsOutline size={"12"} />,
      color: "yellow",
    },
    {
      title: "Postavke",
      url: "/",
      icon: <IoCogOutline size={"12"} />,
      color: "dark",
    },
  ];
  return (
    <Navbar width={{ base: 300 }}>
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
      {/* TODO: napraviti da nestovana navigacija moze biti prikazana za sada nek stoji ovako, ali treba napraviti prije pustanja MVP verzije */}
      {/* <RouteItemNested /> */}
    </Navbar>
  );
}
