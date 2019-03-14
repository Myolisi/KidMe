<template>
  <div></div>
</template>

<script>
export default {
  props: {
    voucherType: {
      type: string
    }
  },
  data() {
    return {};
  },
  methods: {
    addVoucher() {
      this.isAdding = true;
      console.log("object");
    },
    c() {
      console.log(this.selectedEntityType);
    },
    cancel() {
      this.isAdding = false;
    }
  },
  created() {
    console.log(this.$route);
  }
};
</script>
