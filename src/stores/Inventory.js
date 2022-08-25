import { defineStore } from "pinia";

export const useInventoryStore = defineStore("inventory", () => {
  const inventory = [
    {
      id: 1,
      productCode: "0001",
      name: "product01",
      actualAmount: 0,
      minimumAmount: 4,
      price: 1.0,
    },
    {
      id: 2,
      productCode: "0002",
      name: "product02",
      actualAmount: 1,
      minimumAmount: 4,
      price: 1.0,
    },
    {
      id: 3,
      productCode: "0003",
      name: "product03",
      actualAmount: 2,
      minimumAmount: 4,
      price: 1.0,
    },
    {
      id: 4,
      productCode: "0004",
      name: "product04",
      actualAmount: 3,
      minimumAmount: 4,
      price: 1.0,
    },
    {
      id: 5,
      productCode: "0005",
      name: "product05",
      actualAmount: 4,
      minimumAmount: 4,
      price: 1.0,
    },
    {
      id: 6,
      productCode: "0006",
      name: "product06",
      actualAmount: 5,
      minimumAmount: 4,
      price: 1.0,
    },
    {
      id: 7,
      productCode: "0007",
      name: "product07",
      actualAmount: 6,
      minimumAmount: 4,
      price: 1.0,
    },
  ];
  return { inventory };
});
