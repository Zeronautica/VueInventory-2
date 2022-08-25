<script setup>
import InventoryForm from "../components/InventoryForm.vue";
import { reactive } from "vue";
import { useRoute } from "vue-router";
import { useInventoryStore } from "../stores/Inventory.js";
const store = useInventoryStore();
const route = useRoute();
const selectedItem = store.inventory.find(
  (item) => item.id === parseInt(route.params.id)
);
</script>
<template>
  <InventoryForm
    :item="
      reactive({
        id: selectedItem.id,
        productCode: selectedItem.productCode,
        name: selectedItem.name,
        actualAmount: selectedItem.actualAmount,
        minimumAmount: selectedItem.minimumAmount,
        price: selectedItem.price,
      })
    "
    @submit="
      (item) => (store.inventory[store.inventory.indexOf(selectedItem)] = item)
    "
  ></InventoryForm>
</template>
