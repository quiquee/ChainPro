<template>
  <div class="cpMenu">
    <div><vue-file-toolbar-menu :content="text_menu" /></div>
    <div><vue-file-toolbar-menu :content="icon_menu" /></div>
  </div>
</template>
<script>
import VueFileToolbarMenu from "vue-file-toolbar-menu";

export default {
  props: {
    message: String,
  },
  data() {
    return { happy: false };
  },
  components: {
    VueFileToolbarMenu,
  },

  computed: {
    text_menu() {
      return [
        {
          text: "File",
          menu: [
            { text: "Export", click: () => alert("Action 1") },
            { text: "Import", click: () => alert("Action 2") },
          ],
        },

        {
          text: "Account",
          menu: [
            { text: "Show Details", click: () => alert("Action 1") },
            { text: "Add New", click: () => alert("Action 1") },
            { text: "Delete", click: () => alert("Action 2") },
            { text: "Edit", click: () => alert("Action 2") },
          ],
        },
        {
          text: "Payments",
          menu: [
            { text: "Send", click: () => alert("Action 2") },
            { text: "Show History", click: () => alert("Action 2") },
          ],
        },
      ];
    },
    icon_menu() {
      return [
        {
          text: "Account",
          active: this.happy,
          icon: this.happy ? "sentiment_very_satisfied" : "sentiment_satisfied",
          click: () => {
            this.happy = !this.happy;
          },
        },
        {
          text: "Wallet",
          icon: "account_balance_wallet_outlined",
          click: () => {
            if (this.$route.path !== "/conndetails")
              this.$router.push({ path: "/conndetails" });
          },
        },
        {
          text: "Owner",
          icon: "account_box_outlined",
        },
        {
          text: "Tree",
          icon: "account_tree_outlined",

          click: () => {
            if (this.$route.path !== "/sheet")
            this.$router.push({ path: "/sheet" });
          },
        },
        {
          text: "Add Node",
          icon: "add_business_outlined",
        },
        {
          text: "Message",
          icon: "add_comment_rounded",
        },
      ];
    },
  },
};
</script>
<style scoped>
.cpMenu {
  --bar-font-size: 12px;
  --bar-button-active-color: rgb(24, 26, 25);
  --bar-button-active-bkg: rgb(243, 247, 245);
  --bar-button-open-color: rgb(10, 10, 10);
  --bar-button-open-bkg: rgb(243, 247, 245);
}
</style>