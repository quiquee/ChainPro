<template>
  <li>
    <tree :tree-data="tree"></tree>    
    <span class="node">
      <span
        class="typeicon"
        v-html="isFolder ? 'FOLDER' : 'NOFOLDER'"
        @click="toggle"
        @dblclick="changeType"
      />

      <!-- If not a newly created -->
      <span v-if="name != 'new stuff'">
        <span class="nodename">
          {{ name }}
        </span>

        <span
          class="address"
          onclick="navigator.clipboard.writeText(this.innerText);"
        >
          {{ shortAddress }}
        </span>

        <span class="path">
          {{ model.path }}
        </span>

        <span class="status"> {{ status }} {{ balanceString }} </span>
      </span>

      <!-- If newly created -->
      <span v-else>
        <input
          class="nodename"
          placeholder="Provide a name"
          type="text"
          @change="rename"
        />
        <span class="address">{{ model.ethAddress }}</span>
        <span class="path">{{ model.path }} </span>
      </span>

      <!-- Arrows if folder else convert to folder -->
      <span v-if="isFolder" v-html="open ? 'LEFT' : 'RIGHT'" @click="toggle"
        >LEFT/RIGHT</span
      >

      <span
        v-if="!isFolder"
        v-html="open ? 'LEFT' : 'RIGHT'"
        @click="changeType"
        >RIGHT/LEFT</span
      >
    </span>
    <ul v-show="open" v-if="isFolder">
      <li
        class="item"
        v-for="(model, index) in model.children"
        :key="index"
        :model2="model"
      />

      <li class="addnode" @click="addChild" v-html="'+'">Add</li>
    </ul>
  </li>
</template>


<script>
//import * as crypfin from "../crypfin.js";
//import * as ui from "../cpGeneral.js";
import dataSet from "../assets/dataSet";
const feather = require("feather-icons");
import Tree from "./tree";

export default {
  name: "cpSheet",

  beforeCreate() {
    console.log("registerWeb3 Action dispatched from testweb3.vue");
    this.$store.dispatch("registerWeb3");
  },

  setup() {
    console.logthis("Called setup()");
  },
  props: {
      
  },
  components: {
      Tree
  },

  data() {
    return {
      myweb3: undefined,
      open: false,
      deleted: false,
      featherIcons: feather.icons,
      status: "",
      model2: dataSet,
      tree: dataSet,
    };
  },

  computed: {
    
    name() {
      return this.model2.name;
    },
    model() {
      return this.model2;
    },
    web3() {
      return this.$store.state.web3;
    },
    isFolder: function () {
      return this.model2.children && this.model2.children.length;
    },

    shortAddress: function () {
      return this.web3.coinbase.substring(0, 17) + "...";
    },

    balanceString: function () {
      return (this.web3.balance * 1000).toFixed(2) + "$";
    },
  },

  mounted: async function () {},

  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open;
      }
    },
    changeType: function () {
      if (!this.isFolder) {
        this.model.children = [];
        this.addChild();
        this.open = true;
      }
    },

    updateBalance: async function () {
      //console.log("Called updateBalance()");
      this.model.status = "Updating...";
      const response = await this.web3.eth.getBalance(this.model.ethAddress);
      //console.log("Response: 0x" + this.model.ethAddress + " > " + response);
      this.model.balance = this.web3.utils.fromWei(response, "ether");
      this.model.status = null;
    },

    updateChildBalances: function () {
      this.$children.forEach((element) => {
        // console.log("El name: " + element.name);
        element.updateBalance();
      });
      this.updateBalance();
    },

    addChild: function () {
      /*
      var newpath = this.model.path + "/" + (this.model.children.length + 1);
      let seed = bip39.mnemonicToSeedSync(
        document.getElementById("phrase").value
      );
      let hdNode = bip32.fromSeed(seed);
      var newchild = hdNode.derivePath(newpath);
      var pubkey = newchild.publicKey.toString("hex");
      var ethAddress = deriveEthAddress(pubkey);
        */
      this.model2.children.push({
        name: "new stuff",
        balance: -1,
        status: "",
        path: "newpath",
        pubkey: "pubkey",
        ethAddress: "ethAddress",
        deleted: false,
      });
    },
    rename: function (evt) {
      this.model.name = evt.target.value;
    },
  },
  avoiderrors() {
    //console.log(crypfin);
  },
};

/** Avoid errors */
</script>

<style scoped>
.item {
  cursor: pointer;
}
.deleted {
  text-decoration: line-through;
}
.bold {
  font-weight: bold;
}

.feather {
  text-shadow: 5px 5px 2px #aaa;
}
</style>