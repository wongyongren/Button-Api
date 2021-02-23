import Vue from "vue";
import Vuex from "vuex";

Vue.useContext(Vuex);


export default new Vuex.Store({
    state:{
        totalVuePackages: null,
    },
    mutations: {

    },

    actions: {
      async FetchData(){
        const random = Math.floor(Math.random() * 2);
        const response = await fetch(
          `https://my-json-server.typicode.com/wongyongren/demo/modes/?id=${random}`
        );
        const data = await response.json();
        this.totalVuePackages = data[0].id;
        console.log(this.totalVuePackages);
      }
 

    }

});