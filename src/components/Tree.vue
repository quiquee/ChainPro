<template>
  <div class="tree">
    <div class="tree-list">
      <node-tree :node="treeData"></node-tree>
    </div>
  </div>
</template>

<script>
import NodeTree from "./NodeTree";

export default {
  props: {
    treeData: Object
  },
  components: {
    NodeTree
  }
};
</script>

<style>
.tree-list ul {
  padding-left: 6px;
  margin: 2px 0;  
  border-width: 1px;
  border-style: dotted;
}
</style>