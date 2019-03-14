<template>
  <v-app darken-1>
    <v-toolbar dark color="primary">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Kid Me</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- @click="$nuxt.$router.push({path: 'search', query: {name :'Some Data'}}) -->
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
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
