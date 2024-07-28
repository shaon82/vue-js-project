<template>
    <div class="dashboard-container">
      <MainHeader></MainHeader>
      <div class="main-content d-flex">
        <MainSidebar></MainSidebar>
        <DashboardMiddle></DashboardMiddle>
      </div>
    </div>
  </template>
  
  <script>
  import MainHeader from './MainHeader.vue'
  import MainSidebar from './MainSidebar.vue'
  import DashboardMiddle from './DashboardMiddle.vue'
  
  export default {
    components: {
      MainHeader,
      MainSidebar,
      DashboardMiddle
    }
  }
  </script>
  
  <style>
  .dashboard-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .main-content {
    flex: 1;
    display: flex;
  }
  </style>
  