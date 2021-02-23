<template>
  <div class="row">
    <div class="box">
      <h1>{{ mode }} Mode</h1>
      <div class="status">
        <RedGreenCircle :mode="mode" @toggle="toggle" />
        <RunStop :mode="mode" @toggle="toggle" />
      </div>
      <div class="status">
        <RedGreenCircle :mode="mode" @toggle="toggle" />
        <LocalRemote :mode="mode" @toggle="toggle" />
      </div>
      <SwitchButton :mode="mode" @toggle="toggle" />
      <AsyncApi :totalVuePackages="totalVuePackages"/>
    </div>
  </div>
</template>

<script>
import LocalRemote from "./LocalRemote.vue";
import RunStop from "./RunStop.vue";
import RedGreenCircle from "./RedGreenCircle.vue";
import SwitchButton from "./SwitchButton.vue";
import AsyncApi from "./AsyncApi.vue";

export default {
  name: "app",
  data() {
    return {
      mode: "stop",
      totalVuePackages: "1"
    };
  },
  components: {
    LocalRemote,
    RedGreenCircle,
    RunStop,
    SwitchButton,
    AsyncApi
  },
  created() {
    window.addEventListener("keyup", this.keyPress);
  },
  methods: {
    keyPress(e) {
      if (e.key === "") {
        this.toggle();
      }
    },
    toggle() {
      if (this.mode === "stop") {
        this.mode = "run";
      } else {
        this.mode = "stop";
      }
    },
  },
};
</script>

<style>
.status {
  display: flex;
  align-items: center;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -0.75rem;
  margin-left: -0.75rem;
}

.box {
  width: 160px;
  padding: 5px;
  margin: 10px;
  border-radius: 5px;
  background-color: #111516;
  color: #00e676;
  box-shadow: 0 0.125rem 0.3rem rgba(0, 0, 0, 0.85) !important;
}
</style>
