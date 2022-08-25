<script setup>
import InventoryForm from "../components/InventoryForm.vue";
import { reactive } from "vue";
import { useInventoryStore } from "../stores/Inventory.js";
const store = useInventoryStore();
</script>
<template>
  <InventoryForm
    :item="
      reactive({
        id: store.inventory.length + 1,
        productCode: '',
        name: '',
        actualAmount: 0,
        minimumAmount: 0,
        price: 0,
      })
    "
    @submit="(item) => store.inventory.push(item)"
  ></InventoryForm>
</template>
