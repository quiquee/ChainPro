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
  "name": "ChainPro Ltd. CEO",
  "ethAddress": "2Da4c348AfB37883D340A0f70C48A8826C60a30A",
  "balance": "1000.20633664154927",
  "path": "m/0",
  "status": null,
  "children": [
    {
      "name": "Marketing Department",
      "balance": "1000.001",
      "ethAddress": "0e64837ed56479314144af5bba4192bb161650fe",
      "path": "m/0/1",
      "status": null,
      "children": [
        {
          "name": "CMO Office",
          "balance": "0",
          "status": null,
          "path": "m/0/1/1",
          "pubkey": "xpub6DBpGNPFbVGZqYm5Uhda4VRxHfPMyN6kSrwH1JsrBKg997hk4Z5MCMFARTqCMGc9qUXcsnSccDTwSgoz3N9iavAGZrnEumdi9mPxhPpd7AQ",
          "ethAddress": "dbf598e7c34bea6066f7f38ebea92c6e72bf9508",
          "deleted": false
        },
        {
          "name": "Regional Head EMEA",
          "balance": "0",
          "status": null,
          "path": "m/0/1/2",
          "pubkey": "xpub6DBpGNPFbVGZqtjQkmG5YLjeSDq8rGRAPjU3UaVCsBMZfuXdMDs9ybLt7iDbY9iMpnr2bLYByP4eaNfub4JAN1i5dcf5CmeMDaGaLAa26qe",
          "ethAddress": "40ca6bbbb8b2378e4693204bd57eeb8545c44d47",
          "deleted": false
        },
        {
          "name": "Regional Head AMericas",
          "balance": "0",
          "status": null,
          "path": "m/0/1/3",
          "pubkey": "xpub6DBpGNPFbVGZtfPZp56DD5HiJmhBR1iHHKY698RTfikzf9caySmUUAe9kNfj7FGyZbXx8ZGLogMoDEazKWPY77mJFsSzHQNcVwzi7Lxxc7p",
          "ethAddress": "f822ea1262c505c3fcaee400a4fe623505d618bd",
          "deleted": false
        }
      ]
    },
    {
      "name": "CTO Office",
      "ethAddress": "86fa4e294747a0436826703d1b384440f4753cb0",
      "balance": "0.001",
      "path": "m/0/2",
      "status": null,
      "children": [
        {
          "name": "Project Management Pool",
          "balance": "0",
          "status": null,
          "path": "m/0/2/1",
          "pubkey": "xpub6DSs66n1enrckQkjCNBFzkF8oRmoggUnfZCrA3AzewGUHU1LeFQskK9E6EHS8gKy2oaLtmYWfCjbR1N4HkKwuQCdWabJ4PrypVJqi7XEhDQ",
          "ethAddress": "da614d74c2ea82270cad0776e8e32ffd31692262",
          "deleted": false
        },
        {
          "name": "Research and Development",
          "balance": "0",
          "status": null,
          "path": "m/0/2/2",
          "pubkey": "xpub6DSs66n1enrcnGm3gVLayiB15tCLUDYHzfAn2VYBSKCLBWB4oqX8FCsrzZrd7RLbZHsxduCMxUbUB3nvMkE5BwWTYfnKn8PdcLr9msjK9cX",
          "ethAddress": "2514b7308a33c8eb835e1c8653c999c37bf387ea",
          "deleted": false
        },
        {
          "name": "DevOps and Data team",
          "balance": "0",
          "status": null,
          "path": "m/0/2/3",
          "pubkey": "xpub6DSs66n1enrcs5eRZaNwf1vygZsjadPN5iKBYwLo5veCAQE8mrTaBwRxYDCUZQRoFjJbdmmvK2HdJuJfWgwcGrNFTFg5ZgBbqWweJCdaSV7",
          "ethAddress": "fd2894f2991ce01387fef732664601179bd0d475",
          "deleted": false
        }
      ]
    },
    {
      "name": "Finance",
      "ethAddress": "09d110c81a6453df7fee4417683d70163235fc84",
      "balance": "0.0012",
      "path": "m/0/3",
      "status": null,
      "children": [
        {
          "name": "Business Finance",
          "balance": "0.015",
          "status": null,
          "path": "m/0/3/1",
          "pubkey": "xpub6CBDBLbzT5ymAgY8SfVDWnfMVLvZGUJ7KxsyqW4xiUkd8orhEySYiDA2GQMgtZgv6aY7xpxx98BZxt32owcAaNysUrGfvxU5X83yDc2vo9X",
          "ethAddress": "b3638f1f9476dfe77a8d08c987176208c37c8676",
          "deleted": true
        },
        {
          "name": "Accounting and Control",
          "balance": "0",
          "status": null,
          "path": "m/0/3/2",
          "pubkey": "xpub6CBDBLbzT5ymCvpvr1E4xy3m7vhDkgXbHLE97diV9kuipk8JgjBUyTLdYtP8JwPJRpJJ7gXktGmvQ2SEvQa6DoS751BnHzxiNyD9yEjQE7y",
          "ethAddress": "1d0693e7e2a51874df1d3bd346c007b977117b03",
          "deleted": false
        }
      ]
    }
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
      return this.model.ethAddress.substring(0, 17) + "...";
    },

    balanceString: function () {
      return (this.model.balance * 1000).toFixed(2) + "$";
    }
  },
  created: async function () {
    window.web3 = new Web3(web3.currentProvider);

    //console.log("Address of " + this.model.name + " is " + this.model.ethAddress);
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
      //console.log("Called updateBalance()");
      this.model.status = 'Updating...';
      const response = await web3.eth.getBalance(this.model.ethAddress);
      //console.log("Response: 0x" + this.model.ethAddress + " > " + response);
      this.model.balance = web3.utils.fromWei(response, 'ether');
      this.model.status = null;
    },

    updateChildBalances: function () {
      this.$children.forEach(element => {
        // console.log("El name: " + element.name);
        element.updateBalance();
      });
      this.updateBalance();
    },


    addChild: function () {
      var newpath = this.model.path + "/" + (this.model.children.length + 1);
      let seed = bip39.mnemonicToSeedSync(document.getElementById("phrase").value)
      let hdNode = bip32.fromSeed(seed)
      var newchild = hdNode.derivePath(newpath);
      var pubkey = newchild.publicKey.toString('hex');
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
  document.getElementById('import').style.display = 'block';
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
  demo.treeData = JSON.parse(fr.result);
  document.getElementById('import').style.display = 'none';
}