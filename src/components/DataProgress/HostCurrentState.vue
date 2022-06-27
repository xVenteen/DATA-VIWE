<template>
  <div class="title"><span>监控主机实时状态</span></div>
  <dv-capsule-chart :config="config" />
</template>

<script setup>
const { reactive } = require("@vue/reactivity");

const config = reactive({
  data: [
    {
      name: "南阳",
      value: 167,
    },
    {
      name: "周口",
      value: 67,
    },
    {
      name: "漯河",
      value: 123,
    },
    {
      name: "郑州",
      value: 55,
    },
    {
      name: "西峡",
      value: 98,
    },
    {
      name: "漯河",
      value: 123,
    },
    {
      name: "郑州",
      value: 55,
    },
    {
      name: "西峡",
      value: 98,
    },
  ],
  showValue: true,
});
</script>

<style lang='scss' >
.title {
  font-size: 23px;
  color: regb(225, 225, 225, 1);
}
.dv-capsule-chart {
  width: 100%;
  height: 100%;
  padding: 0;

  .label-column {
    display: block !important;
    height: 100%;

    div {
      font-size: 12px !important;
      height: 30px !important;
      line-height: 30px !important;
      margin-top: 30px !important;
      margin-bottom: 5px !important;
    }
  }
  .capsule-container {
    display: block !important;
    .capsule-item {
      display: block !important;
      height: 20px !important;
      border: 5px solid #00c1de !important;
      border-radius: 15px !important;
      margin-top: 30px !important;
      .capsule-item-column {
        margin-top: 0 !important;
        height: 20px !important;
        align-items: center !important;
        border-radius: 10px !important;
      }
    }
    .unit-label {
      display: none !important;
    }
  }
  .dv-capsule-chart {
    padding: 0;
  }
}
</style>