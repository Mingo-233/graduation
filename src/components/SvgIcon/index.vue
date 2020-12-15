//components/Icon-svg
<template>
  <svg
    class="svg-icon"
    aria-hidden="true"
    :style="'width:' + width + ';height:' + height"
  >
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: "icon-svg",
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    width: {
      type: [String, Number],
      default: () => "1em",
    },
    height: {
      type: [String, Number],
      default: () => "1em",
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
  },
  mounted() {},
};
</script>

<style>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>


