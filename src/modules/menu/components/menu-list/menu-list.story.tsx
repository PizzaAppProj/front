import type { Meta, StoryObj } from "@storybook/react";
import { MenuList } from "./menu-list.component";
import pizzaMenu from "@app/mocks/pizza.json";
import { MockedProvider } from "@apollo/client/testing";

const meta: Meta<typeof MenuList> = {
  title: "Menu/Menu List",
  component: MenuList,
  args: {
    items: [
      {
        image: "menu/menu-1691077891",
        id: "f8168a6a-fec1-4b21-85dd-606d3b112e88",
        category_id: "f8168a6a-fec1-4b21-85dd-606d3b112e88",
        ingredients:
          "(подвійна порція грибів), Гриби, Моцарела, Пепероні, Соус Альфредо",
        price: 215,
        title: "Піца Мангеттен",
        weight: 555,
      },
      {
        image: "menu/menu-1691077899",
        id: "fcbcbc35-c00f-45c3-9c68-cda7f7baeab4",
        category_id: "f8168a6a-fec1-4b21-85dd-606d3b112e88",
        ingredients: "Моцарела, Пепероні, Соус PizzaStack",
        price: 250,
        title: "Піца Пепероні",
        weight: 560,
      },
      {
        image: "menu/menu-1691077820",
        id: "1dcf9a0d-56a8-420b-b918-18d187d644c4",
        category_id: "f8168a6a-fec1-4b21-85dd-606d3b112e88",
        ingredients: "Шинка, Гриби, Моцарела, Соус PizzaStack,",
        price: 215,
        title: "Піца Шинка та гриби",
        weight: 545,
      },
      {
        image: "menu/menu-1691077831",
        id: "393a1087-c9db-4f70-b16d-c0e06cbc8262",
        category_id: "f8168a6a-fec1-4b21-85dd-606d3b112e88",
        ingredients: "Курка, Цибуля, Бекон, Гриби, Моцарела, Соус Барбекю",
        price: 255,
        title: "Піца Барбекю",
        weight: 552,
      },
      {
        image: "menu/menu-1691077841",
        id: "3fb9604c-534b-4d9d-ac39-177b3adaa52b",
        category_id: "f8168a6a-fec1-4b21-85dd-606d3b112e88",
        ingredients: "Цибуля, Бекон, Шинка, Гриби, Моцарела, Соус Альфредо",
        price: 250,
        title: "Піца Карбонара",
        weight: 540,
      },
      {
        image: "menu/menu-1691077853",
        id: "7f7acc09-849b-48da-8634-f2133d73f5c3",
        category_id: "f8168a6a-fec1-4b21-85dd-606d3b112e88",
        ingredients:
          "Курка, Фрикадельки, Цибуля, Бекон, Болгарський перець, Моцарела, Соус Барбекю",
        price: 250,
        title: "Піца Гриль Мікс",
        weight: 569,
      },
      {
        image: "menu/menu-1691077862",
        id: "a0f05a2b-613e-4a25-bf83-b1a21c545e69",
        category_id: "f8168a6a-fec1-4b21-85dd-606d3b112e88",
        ingredients:
          "Кукурудза, Цибуля, Гриби, Ковбаски баварські, Моцарела, Соус Барбекю",
        price: 215,
        title: "Піца Техас",
        weight: 550,
      },
      {
        image: "menu/menu-1691077872",
        category_id: "f8168a6a-fec1-4b21-85dd-606d3b112e88",
        id: "a9dd9d80-b7c6-4213-afbd-80668fb78030",
        ingredients: "Моцарела, Пепероні, Помідори, Соус Барбекю",
        price: 215,
        title: "Піца Пепероні з томатами",
        weight: 554,
      },
      {
        image: "menu/menu-1691077883",
        id: "e07bf23e-4bfa-4f7e-8527-e6f7a8efee7a",
        category_id: "f8168a6a-fec1-4b21-85dd-606d3b112e88",
        ingredients: "(подвійна порція моцарели), Моцарела, Соус PizzaStack",
        price: 250,
        title: "Піца Маргаріта",
        weight: 552,
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof MenuList>;

export const Primary: Story = {
  render: (args) => (
    <MockedProvider>
      <MenuList {...args} />
    </MockedProvider>
  ),
};
