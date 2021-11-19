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
  FOLDER: "<i class='feather icon-folder'></i>",
  DOLLAR_SIGN: "<i class='feather dollar-sign'></i>",
  BITCOIN: "&#x20BF;",

});


// demo data
// derived from master in cryptfin.js
// Please dont steal all my Ropsten ether 
var data = {
  name: 'ChainPro Ltd. CEO',
  ethAddress: "2Da4c348AfB37883D340A0f70C48A8826C60a30A",
  balance: null,
  path: 'm/0',
  status: 'pending',
  children: [{
    name: "Marketing Department",
    balance: null,
    ethAddress: "0e64837ed56479314144af5bba4192bb161650fe",
    path: 'm/0/1',
    status: 'pending'
  }, {
    name: "CTO Office",
    ethAddress: "86fa4e294747a0436826703d1b384440f4753cb0",
    balance: null,
    path: 'm/0/2',
    status: 'pending'
  }, {
    name: "Marketing Department",
    ethAddress: "09d110c81a6453df7fee4417683d70163235fc84",
    balance: null,
    path: 'm/0/3',
    status: 'pending'
  },
  ]
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
      featherIcons: featherIconsConst,
    }
  },

  computed: {
    isFolder: function () {
      return this.model.children &&
        this.model.children.length
    },

    shortAddress: function () {
      return "0x" + this.model.ethAddress.substring(0, 7) + "...";
    },

    balanceString: function () {
      return (this.model.balance * 1000).toFixed(2) + "$";
    }
  },
  created: async function () {
    window.web3 = new Web3(web3.currentProvider);
    console.log("Address of " + this.model.name + " is " + this.model.ethAddress);
    this.updateBalance();

  },

  mounted: async function () {
    window.addEventListener('load', function () {
      if (typeof web3 !== 'undefined') {
        logthis('Web3 Detected! ' + web3.currentProvider.constructor.name)
        if (window.ethereum.isMetaMask) {
          logthis('We are on Metamask, good');
          if (ethereum.isConnected()) {
            logthis("We are connected to Ethereum");
            var accounts = ethereum.request({ method: 'eth_requestAccounts' });
            accounts.then(function (data) {
              document.getElementById("address").innerText = data[0];
              var subscription = web3.eth.subscribe('newBlockHeaders',
                function (error, result) {
                  if (!error) {
                    console.log("New headers " + result);
                    demo.$children[0].updateChildBalances();
                  } else {
                    console.log("New headers. error " + error);

                  }
                });

            });
          } else {
            logthis("We are not connected to Ethereum")
          }
        } else {
          logthis('You should install Metamask to use ChainPro');
        }

      } else {
        logthis('No Web3 Detected... using HTTP Provider')
        window.web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/<APIKEY>"));
      }

    })

  },

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

    updateBalance: async function () {
      console.log("Called updateBalance()");
      this.model.status = 'Updating...';
      const response = await web3.eth.getBalance(this.model.ethAddress);
      console.log("Response: 0x" + this.model.ethAddress + " > " + response);
      this.model.balance = web3.utils.fromWei(response, 'ether');
      this.model.status = null;
    },

    updateChildBalances: function () {
      this.$children.forEach(element => {
        console.log("El name: " + element.name);
        element.updateBalance();
      });
      this.updateBalance();
    },


    addChild: function () {
      var newpath = this.model.path + "/" + (this.model.children.length + 1);
      var pubkey = getAddress(newpath, document.getElementById("phrase").value);
      var ethAddress = deriveEthAddress(pubkey);

      this.model.children.push({
        name: 'new stuff',
        balance: -1,
        status: "",
        path: newpath,
        pubkey: pubkey,
        ethAddress: ethAddress,
        deleted: false,
      });
    },
    rename: function (evt) {

      this.model.name = evt.target.value;
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

function logthis(message) {

  document.getElementById("lastmsg").innerText = message;
  document.getElementById("msglog").innerHTML += "<li>" + message;

}

function toggleLog() {
  if (document.getElementById('msglog').style.display == 'block') {
    document.getElementById('msglog').style.display = 'none';
  } else {
    document.getElementById('msglog').style.display = 'block';
  }
}

function downloadTree() {

  var a = document.createElement('a');
  let filename = "export.json";
  let contentType = "application/json;charset=utf-8;";
  a.download = filename;
  a.href = 'data:' + contentType + ',' +
    encodeURIComponent(JSON.stringify(demo.treeData));
  a.target = '_blank';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function chooseFile() {  
  document.getElementById('import').style.display='block';
}

function importFile() {
  var files = document.getElementById('selectFiles').files;
  
  console.log(files);
  if (files.length <= 0) {
    return false;
  }
  var fr = new FileReader();

  fr.onload = function (e) {
    console.log(e);
    var result = JSON.parse(e.target.result);
    var formatted = JSON.stringify(result, null, 2);
    document.getElementById('result').value = formatted;
  }
  fr.readAsText(files.item(0));
  
}