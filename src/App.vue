<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/ex1">Ex1</router-link> |
    <router-link to="/ex2">Ex2</router-link> |
    <router-link to="/ex3">Ex3</router-link> |
    <router-link to="/ex4">Ex4</router-link> |
    <router-link to="/ex5">Ex5</router-link> |
    <router-link to="/ex6">Ex6</router-link> |
    <router-link to="/todoview">ToDoView</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
