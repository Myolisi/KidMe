<template>
  <v-app darken-1>
    <v-toolbar dark color="primary">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Kid Me</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- @click="$nuxt.$router.push({path: 'search', query: {name :'Some Data'}}) -->
      <v-avatar size="3" color="red">
        <!-- <img src="logo.jpg" alt="alt"> -->
      </v-avatar>
    </v-toolbar>
    <v-container>
      <nuxt/>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
