<template>
  <div>
    <jokes></jokes>
  </div>
</template>

<script>
import jokes from "~/components/jokes/jokes.vue";

export default {
  components: {
    jokes
  },
  data() {
    return {
      data: ""
    };
  },
  mounted() {
    this.$axios
      .$get("/api/likes")
      .then(res => {
        this.data = res;
        console.log(res);
      })
      .catch(error => console.log(error));
  }
};
</script>
