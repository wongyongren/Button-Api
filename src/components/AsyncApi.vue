<template>
  <div>{{totalVuePackages}}</div>
</template>

<script>
export default {
  name: "get-request-async-await",
  data() {
    return {
      totalVuePackages: null,
    };
  },
  async created() {
    setInterval(() => this.FetchData(), 3000);
  },
  methods: {
    FetchData: async function () {
      const random = Math.floor(Math.random() * 2);
      const response = await fetch(
        `https://my-json-server.typicode.com/wongyongren/demo/modes/?id=${random}`
      );
      const data = await response.json();
      this.totalVuePackages = data[0].id;
      console.log(this.totalVuePackages);
    },
  },
};
</script>

<style>

</style>
