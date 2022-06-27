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

  legend: {
    position: "top",
    textStyle: {
      fontFamily: "Arial",
      fontSize: 13,
      fill: "rgba(225, 225, 225, 1)",
    },
    iconStyle: {},
    data: [
      {
        name: "系列A",
        color: "rgba(13, 196, 150, 1)",
      },
      {
        name: "系列B",
        color: "#2177c0",
      },
    ],
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
      name: "系列A",
      data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
      type: "line",
      stack: "a",
      smooth: true,
      fill: {
        show: true,
      },
      label: {
        show: false,
        style: {
          fill: "rgba(225, 225, 225, 1)",
        },
      },
      lineArea: {
        show: true,
        gradient: ["rgba(13, 196, 150, 1)", "rgba(13, 196, 150, 0)"],
      },
      lineStyle: {
        stroke: "rgba(13, 196, 150, 1)",
      },
      linePoint: {
        show: false,
      },
    },
    {
      name: "系列B",
      data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
      type: "line",
      stack: "a",
      smooth: true,
      lineArea: {
        show: true,
        gradient: ["rgba(24,123,190,0.8)", "rgba(24,123,190,0)"],
      },
      lineStyle: {
        stroke: "#2177c0",
      },
      linePoint: {
        show: false,
      },
    },
  ],
};
</script>

<style lang="scss" scoped>
</style>