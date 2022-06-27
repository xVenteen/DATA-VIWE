<template>
  <dv-border-box-10 style="height: 303px;over">
    <dv-charts :option="option" />
  </dv-border-box-10>
</template>

<script setup>
const option = {
  title: {
    text: "CUP使用率最新TOP10",
    style: {
      fill: "rgba(225, 225, 225, 1)",
    },
  },
  xAxis: {
    data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    nameGap: 20,
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
      data: [1200, 2230, 1900, 2100, 3500, 4200, 3985, 1560, 3652, 3214],
      type: "bar",
      gradient: {
        color: ["#23d08e"],
      },
    },
  ],
};
</script>

<style lang="scss" scoped>
</style>