<template>
  <div>
    <li class="node-tree">
      <div class="label">{{ node.name }}</div>
      <div class="label">{{ node.ethAddress }}</div>
      <div class="label">{{ node.path }}</div>
      <div class="label">{{ node.balance }}</div>
      <ul v-if="node.children && node.children.length">
        <node
          v-for="(child, index) in node.children"
          :node="child"
          :key="index"
        ></node>
        <li> ADD NEW
        </li>
      </ul>
    </li>
  </div>
</template>

<script>
export default {
  name: "node",
  props: {
    node: Object,
  },
};
</script>

<style scoped>
.row {
  padding-left: 4px;
  border-width: 1px;
  border-style: dashed;
}
.label {  
  display: inline-block;
  padding-right: 5px;
}

.node-tree {
  
  border: rgb(225, 245, 245);
  border-width: 1px;
  border-style: solid;
}
</style>