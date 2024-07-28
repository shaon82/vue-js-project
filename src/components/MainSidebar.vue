<template>
    <aside id="sidebar" :class="{'collapsed': !isExpanded}">
      <div class="sidebar-logo">
        <a href="#">CodzSword</a>
      </div>
      <ul class="sidebar-nav p-0">
        <li class="sidebar-header">Tools & Components</li>
        <li class="sidebar-item">
          <a href="#" class="sidebar-link">
            <i class="lni lni-user"></i>
            <span>Profile</span>
          </a>
        </li>
        <li class="sidebar-item">
          <a href="#" class="sidebar-link">
            <i class="lni lni-agenda"></i>
            <span>Task</span>
          </a>
        </li>
        <li class="sidebar-header">Pages</li>
        <li class="sidebar-item">
          <a href="#" class="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
             data-bs-target="#auth" aria-expanded="true" aria-controls="auth">
            <i class="lni lni-protection"></i>
            <span>Auth</span>
          </a>
          <ul id="auth" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
            <li class="sidebar-item"><a href="#" class="sidebar-link">Login</a></li>
            <li class="sidebar-item"><a href="#" class="sidebar-link">Register</a></li>
          </ul>
        </li>
        <li class="sidebar-item">
          <a href="#" class="sidebar-link">
            <i class="lni lni-popup"></i>
            <span>Notification</span>
          </a>
        </li>
        <li class="sidebar-item">
          <a href="#" class="sidebar-link">
            <i class="lni lni-cog"></i>
            <span>Setting</span>
          </a>
        </li>
      </ul>
      <button @click="toggleSidebar" class="toggler-btn">
        <i class="lni lni-menu"></i>
      </button>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'MainSidebar',
    data() {
      return {
        isExpanded: true
      };
    },
    methods: {
      toggleSidebar() {
        this.isExpanded = !this.isExpanded;
      }
    }
  }
  </script>
  
  <style scoped>
  #sidebar {
    max-width: 264px;
    min-width: 264px;
    transition: all 0.35s ease-in-out;
    background-color: #343a40;
    color: #fff;
    display: flex;
    flex-direction: column;
  }
  #sidebar.collapsed {
    margin-left: -264px;
  }
  .sidebar-logo a {
    color: #fff;
    font-weight: 800;
    font-size: 1.5rem;
  }
  .sidebar-header {
    padding: 1.5rem 1.5rem .375rem;
    font-size: .75rem;
  }
  .sidebar-item {
    padding: .625rem 1.625rem;
  }
  .sidebar-link {
    color: #fff;
    font-size: 1.25rem;
    display: block;
  }
  .sidebar-link:hover {
    background-color: #495057;
  }
  .sidebar-dropdown .sidebar-item {
    padding-left: 2rem;
  }
  .toggler-btn {
    background-color: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 1.75rem;
    margin: 1rem;
  }
  </style>
  