const featherIconsConst = Object.freeze({
  BELL: "<i class='feather icon-bell'></i>",
  PLUS_CIRCLE: "<i class='feather icon-plus-circle'></i>",
  MINUS_CIRCLE: "<i class='feather icon-minus-circle'></i>",
  PLUS: "<i class='feather icon-plus'></i>",
  MINUS: "<i class='feather icon-minus'></i>",
  X_CIRCLE: "<i class='feather icon-x-circle'></i>",
  CIRCLE: "<i class='feather icon-circle'></i>",
  RIGHT: "<i class='feather icon-arrow-right'></i>",
  LEFT: "<i class='feather icon-arrow-left'></i>",
  DELETE: "<i class='feather icon-delete'></i>",
  EYE: "<i class='feather icon-eye'></i>",
  BITCOIN: "&#x20BF;",
});


// demo data
// Check https://iancoleman.io/bip39/
// RootKey  tprv8ZgxMBicQKsPexKyZn6mCiMN6tjRKpunmj5s8pd7TYqneTh4n7vPCkuzFLTdvJ7dfH67q1gpswtNxoRMVaFh59vt6uJZGPhgfsmdcSwRKqs
var data = {
  name: 'My Program Budget',
  address: '',
  path: 'm/0',
  children: []
}

// This is to capture an Development
var bus = new Vue();

// define the item component
Vue.component('item', {
  template: '#item-template',
  props: {
    model: Object,
  },
  data: function () {
    return {
      open: false,
      deleted: false,
      ethAddress: "-1",
      someText: "Some Text",
      featherIcons: featherIconsConst,
    }
  },
  
  computed: {
    isFolder: function () {
      return this.model.children &&
        this.model.children.length
    },
  },
  mounted: function () {  this.dummy() },
  methods: {
    
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      }
    },
    changeType: function () {
      if (!this.isFolder) {
        Vue.set(this.model, 'children', [])
        this.addChild()
        this.open = true
      }
    },
    dummy: async function() {
      this.model.balance = 9;
    },
    loadBalance: async function () {
      try {
        console.log("Find balance of: " + this.model.ethAddress);
        web3.eth.getBalance(this.model.ethAddress, function (error, wei) {
            if (!error) {
              this.model.balance = web3.utils.fromWei(wei, 'ether');                
            }
        });

      } catch (err) {
        console.log(err);
      }
    },
    addChild: function () {
      var newpath = this.model.path +"/"+(this.model.children.length+1);
      var pubkey = getAddress(newpath, document.getElementById("phrase").value);
      var ethAddress= deriveEthAddress(pubkey) ;
      
      this.model.children.push({
        name: 'new stuff',
        balance: -1,
        path: newpath,
        pubkey: pubkey,
        ethAddress: ethAddress ,
        shortAddress:  "0x"+ethAddress.substring(0,10),        
        deleted: false,
      });
    },
    rename: function (evt) {
      
      this.model.name = evt.target.value ;
    },
  }
})

// boot up the demo
var demo = new Vue({
  el: '#demo',
  data: {
    treeData: data
  },
})

function logthis (message) {

  document.getElementById("lastmsg").innerText=message;
  document.getElementById("msglog").innerHTML+="<li>"+message;

}

function toggleLog() {
  if(document.getElementById('msglog').style.display=='block') {
    document.getElementById('msglog').style.display='none';
  } else {
    document.getElementById('msglog').style.display='block';
  }
}
