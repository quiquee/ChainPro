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
});


// demo data
// Check https://iancoleman.io/bip39/
// RootKey  tprv8ZgxMBicQKsPexKyZn6mCiMN6tjRKpunmj5s8pd7TYqneTh4n7vPCkuzFLTdvJ7dfH67q1gpswtNxoRMVaFh59vt6uJZGPhgfsmdcSwRKqs
var data = {
  name: 'My Program Budget',
  xpub: 'xpub6Cu4EzWVtaKDq8YWx6jW7wDZjZDSESAyKg8gVqH8GuAW6HP9AKfKaJccdNWKHaXeL1FPQddXyNGsc1MvZLb11q44P4Z9CLAAipLMhmJ9RwZ',
  children: [
    { name: 'Business Analysis',
      xpub: '',
      deleted: false },
    { name: 'Development' ,
      xpub: '' ,
      deleted: false },
    { name: 'Testing' ,
      xpub: '' ,
      deleted: true ,
      children: [
         { name: 'Testing 1' ,
           xpub: '' ,
           deleted: true },
         { name: 'Testing 2' ,
           xpub: '' ,
           deleted: false },
         ]
    },
    { name: 'Integration' ,
      xpub: '' ,
      deleted: false },
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
      someText: "Some Text",
      featherIcons: featherIconsConst,
    }
  },
  computed: {
    isFolder: function () {
      return this.model.children &&
        this.model.children.length
    }
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
    addChild: function () {
      this.model.children.push({
        name: 'new stuff',
        deleted: false,
      });
    },
    rename: function (evt) {
      console.log("Added" + evt.target.value)
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
