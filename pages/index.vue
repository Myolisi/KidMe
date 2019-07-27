<template>
  <div>
    <v-layout row class="text-md-center">
      <v-flex md12 class="mb-3">
        <v-btn color="primary" dark @click="go">You tell joke me now!</v-btn>
        <!-- <a md12 color="success" class="title" flat @click="jokePlease">You tell joke me now!</a> -->
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex md6>
        <img src="stickman.gif" height="390" width="100%" alt="avatar" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    go() {
      this.$router.push("jokes/random");
    }
  },
  mounted() {
    this.$axios
      .$get("/api/likes")
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log("error connecting to API");
      });
  }
};
</script>
