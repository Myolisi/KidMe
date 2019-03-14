<template>
  <div>
    <search></search>
  </div>
</template>

<script>
import search from "~/components/search/search.vue";
export default {
  components: {
    search
  },
  created() {
    console.log(this.$route);
  }
};
</script>
