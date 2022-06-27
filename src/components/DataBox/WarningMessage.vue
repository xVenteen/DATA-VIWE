<template>
  <dv-border-box-10 style="height: 303px;over">
    <dv-charts :option="option" />
  </dv-border-box-10>
</template>

<script setup>
const option = {
  title: {
    text: "警告信息统计",

    style: {
      fill: "rgba(225, 225, 225, 1)",
    },
  },
  series: [
    {
      type: "gauge",
      startAngle: -Math.PI / 2,
      endAngle: Math.PI * 1.5,
      arcLineWidth: 10,
      data: [
        { name: "A", value: 32, gradient: ["#0b61d8"] },
        {
          name: "B",
          value: 78,
          gradient: ["#0f76d5"],
          radius: "53%",
        },
        {
          name: "C",
          value: 55,
          gradient: ["#1e96ce"],
          radius: "46%",
        },
        {
          name: "D",
          value: 65,
          gradient: ["#1eb4ce"],
          radius: "39%",
        },
        {
          name: "E",
          value: 45,
          gradient: ["#22c6e3"],
          radius: "32%",
        },
      ],
      axisLabel: {
        show: true,
      },
      axisTick: {
        show: true,
      },
      pointer: {
        show: false,
      },
      dataItemStyle: {
        lineCap: "round",
      },
      backgroundArc: {
        show: false,
      },
      details: {
        show: false,
      },
    },
  ],
};
</script>

<style lang='scss' scoped>
</style>