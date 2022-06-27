<template>
  <dv-border-box-10 style="height: 303px;over">
    <dv-charts :option="option" />
  </dv-border-box-10>
</template>

<script setup>
const option = {
  title: {
    text: "周销售额趋势",
    style: {
      fill: "rgba(225, 225, 225, 1)",
    },
  },
  xAxis: {
    data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    axisLabel: {
      style: {
        fill: "rgba(225, 225, 225, 1)",
      },
    },
  },

  yAxis: {
    data: "value",
    axisLabel: {
      style: {
        fill: "rgba(225, 225, 225, 1)",
      },
    },
  },
  series: [
    {
      data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
      type: "bar",
    },
  ],
};
</script>

<style lang="scss" scoped>
</style>