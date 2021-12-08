<template>
  <div class="ConnDetails">      
   <li>Metamask: {{ web3.isInjected }}</li>
   <li>Network: {{ web3.networkId }}</li>
   <li>Account: {{ web3.coinbase }}</li>
   <li>Balance: {{ web3.balance }}</li>
  </div>
</template>

<script>


export default {
  name: "ConnDetails",
  beforeCreate () {
    console.log('registerWeb3 Action dispatched from testweb3.vue')
    this.$store.dispatch('registerWeb3')
  },

  computed: {
    web3 () {
      return this.$store.state.web3
    }
  }

};
</script>

<style>
.ConnDetails {
    align-content:flex-start;
    display: inline;
}
</style>