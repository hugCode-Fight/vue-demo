<template>
    <header class="navbar">
      <router-link to="/" class="logo">My Blog</router-link>
      <nav>
        <ul>
          <li><router-link to="/articles">Articles</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <!-- 其他导航链接 -->
        </ul>
      </nav>
    </header>
  </template>
  
  <style scoped>
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    text-decoration: none;
  }
  
  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  nav li {
    display: inline-block;
    margin-right: 1rem;
  }
  
  nav a {
    color: #666;
    text-decoration: none;
  }
  </style>