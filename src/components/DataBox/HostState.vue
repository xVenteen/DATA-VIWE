<template>
  <dv-border-box-10 style="height: 303px;over">
    <dv-charts :option="option" />
  </dv-border-box-10>
</template>

<script setup>
const option = {
  title: {
    text: "主机状态",
    style: {
      fill: "rgba(225, 225, 225, 1)",
    },
  },
  series: [
    {
      type: "pie",
      data: [
        { name: "可口可乐", value: 93 },
        { name: "百事可乐", value: 32 },
        { name: "哇哈哈", value: 65 },
        { name: "康师傅", value: 44 },
      ],
      insideLabel: {
        show: true,
      },
    },
  ],
};
</script>

<style lang='scss' scoped>
</style>