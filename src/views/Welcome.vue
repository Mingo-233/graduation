<template>
  <div v-title data-title="首页">
    <h1>這是首頁</h1>
    <button @click="handle">click</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handle() {
      this.$router.push({ name: "basics", params: { money: 123 } });
    },
  },
};
</script>
<style scoped>
</style>
