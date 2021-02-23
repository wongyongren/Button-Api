<template>
  <div class="status" v-if="!(mode === 'run')">
    <span class="roundS"></span>
  </div>
  <div class="status" v-else>
    <span class="roundR"></span>
  </div>
</template>

<script>
// import SwitchButton from './SwitchButton.vue'

export default {
  name: "app",
  props: ["mode"],
  components: {
    // SwitchButton
  },
};
</script>

<style>
.roundR {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #000;
  background-color: #00e676;
  display: inline-block;
  z-index: 5;
}

.roundS {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid #000;
  background-color: #ff0000;
  display: inline-block;
  z-index: 5;
}
</style>
