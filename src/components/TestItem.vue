<template>
  <div>
    <h1>TestItem</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("TestItem");
  },
  props: ["userId"]
};
</script>

<style></style>
