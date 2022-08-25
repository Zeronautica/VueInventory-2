<script setup>
const props = defineProps({
  item: Object,
});
defineEmits(["submit"]);
</script>
<template>
  <table>
    <thead>
      <tr>
        <th>product code</th>
        <th>productnaam</th>
        <th>aantal aanwezig</th>
        <th>aantal vereist</th>
        <th>prijs</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <input
            type="text"
            v-model="item.productCode"
            placeholder="voer productcode in"
          />
        </td>
        <td>
          <input
            type="text"
            v-model="item.name"
            placeholder="voer productnaam in"
          />
        </td>
        <td><input type="number" v-model="item.actualAmount" /></td>
        <td><input type="number" v-model="item.minimumAmount" /></td>
        <td><input type="number" v-model="item.price" /></td>
      </tr>
    </tbody>
  </table>
  <div>
    <RouterLink to="/">Annuleren</RouterLink>
    <RouterLink @click="$emit('submit', item)" to="/">
      {{ $route.name === "create" ? "Toevoegen" : "Aanpassen" }}
    </RouterLink>
  </div>
</template>
<style scoped>
div {
  margin-top: 50px;
  text-align: center;
}
a {
  display: inline-block;
  padding: 0 1rem;
  margin: 0 40px;
}
</style>
