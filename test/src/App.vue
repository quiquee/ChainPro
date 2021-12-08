<template>
  <div id="app">
    <div class="header">      
      
      <img src="./assets/ChainProLogo.png" />
      
    </div>

    <div class="actions_menu">
      <cpMenu>
      </cpMenu>
    </div>

    <!--div class="left_menu">
      <li class="left_menu_item">Dashboard</li>
      <li class="left_menu_item">My Accounts</li>
      <li class="left_menu_item">Chart</li>
      <li class="left_menu_item">Setup</li>
    </div-->

    <div class="main">
           
      <router-view/>
    </div>
  </div>
</template>

<script>
import cpMenu from './components/cpMenu.vue'

export default {
  name: "App",
  components: {    
    cpMenu,
  },
  data () { return {  } },

  computed: {
    
  }
};


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  width: min(80vw);
  color: #2c3e50;
  align-content: center;
  display: grid;
  grid-template-rows: 3rem 4rem 80vh;
  /* background-color: blueviolet; */
  margin:auto;
}
body {
  
  margin: auto;
  padding: 0px;
  border: 0px;
  font-size: 12px;
  position: relative;
}

.header {
  grid-row: 1 /2;
  grid-column: 3 / 4;
}

.actions_menu {
  display: block;
  
  grid-row: 2;
  grid-column: 1 / 4;
  margin-left: 2vw;
}

.left_menu {
  list-style: none;
  font-size: larger;
  width: max(20%, 8em);
  margin-left: 1vw;
  margin-top: 10vh;
  text-align: left;
  padding: 1vw;
  grid-row: 3;
  grid-column: 1 / 2;
  
}

.left_menu_item {
  padding: 3px;
}
.main {
  grid-row: 3;
  grid-column: 1 / 4;
  margin-left: 10em;
  
}



.header,
.top_menu,
.actions_menu,
.left_menu,
.main {
  border-style: hidden;
  border-width: 1px;
  border-color: rgb(200, 164, 233);
}
</style>


