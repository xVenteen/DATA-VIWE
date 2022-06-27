<template>
  <header>
    <h1>WGCLOUD</h1>
    <div class="time">2020年6月23日-16时15分27秒</div>
  </header>
  <main>
    <div class="main-child main-side">
      <div class="chart-list">
        <PhoneTypeNum></PhoneTypeNum>
        <SpeedRanking></SpeedRanking>
        <WarningMessage></WarningMessage>
      </div>
    </div>
    <div class="main-child main-center">
      <div class="head">
        <dv-border-box-13 :reverse="true">
          <div class="adata-group">
            <span class="data">21</span>
            <span class="data-title">主机总数</span>
          </div>
          <div class="adata-group">
            <span class="data">76</span>
            <span class="data-title">CPU总核数</span>
          </div>
          <div class="adata-group">
            <span class="data">135.8G</span>
            <span class="data-title">内存总和</span>
          </div>
        </dv-border-box-13>
      </div>
      <div class="body">
        <HostCurrentState></HostCurrentState>
      </div>
    </div>
    <div class="main-child main-side">
      <div class="chart-list">
        <HostState></HostState>
        <CpuTop></CpuTop>
        <RamUseTop></RamUseTop>
      </div>
    </div>
  </main>
</template>
 
<script setup>
import PhoneTypeNum from "../components/DataBox/PhoneTypeNum.vue";
import SpeedRanking from "../components/DataBox/SpeedRanking.vue";
import WarningMessage from "../components/DataBox/WarningMessage.vue";
import HostCurrentState from "../components/DataProgress/HostCurrentState.vue";
import HostState from "../components/DataBox/HostState.vue";
import CpuTop from "../components/DataBox/CpuTop.vue";
import RamUseTop from "../components/DataBox/RamUseTop.vue";
</script>

<style lang="scss">
header {
  display: flex;
  justify-content: center;
  position: relative;
  background: url("../assets/head_bg.png");
  background-size: 100% 100%;
  height: 80px;
  h1 {
    font-size: 30px;
    display: inline-block;
    color: white;
    height: 60px;
    line-height: 70px;
  }
  .time {
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    position: absolute;
    right: 15px;
    top: 17px;
  }
}
main {
  color: white;
  display: flex;
  width: 100vw;
  .main-child {
    padding: 2px;
  }
  .main-side {
    border: 1px solid white;
    flex: 1 1;
    .chart-list {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
      // &:nth-child(1) {
      //   margin-bottom: 10px;
      // }
      // @for $i from 0 through 2 {
      //   &::nth-child($i) {
      //     margin-bottom: 10px;
      //   }
      // }
    }
  }
  .main-center {
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    flex: 1 1;
    .head {
      height: 162px;
      background-color: rgb(0, 51, 203, 0.15);
      .dv-border-box-13 {
        height: 100px;
        .border-box-content {
          display: flex;
          justify-content: space-around;
          .adata-group {
            .data {
              line-height: 100px;
              font-size: 52px;
              font-weight: 600;
              color: #f9ef8e;
            }
            .data-title {
              display: flex;
              justify-content: space-around;
              color: #aeb6d5;
              font-size: 16px;
              margin-top: 15px;
            }
          }
        }
      }
    }
    .body {
      padding: 165px 82px 0 82px;
    }
  }
}
</style>