<template>
  <v-card>
    <v-card-title primary-title>You are adding here</v-card-title>
    <div>
      <v-btn color="success" @click="updateIsMessage() ;updateEntityId(newSender)">Add</v-btn>

      <v-layout column wrap>
        <v-flex m4>
          <v-text-field label="From" id="id" v-model="newSender"></v-text-field>
        </v-flex>
        <v-flex md12>
          <v-text-field label="Type message" id="id" v-model="newMessage"></v-text-field>
        </v-flex>
      </v-layout>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    message: {
      types: String
    },
    senderNameProp: {
      types: String
    }
  },
  data() {
    return {
      newMessage: "",
      newSender: "",

      senderName: this.senderNameProp,
      theMessage: this.message
    };
  },
  methods: {
    updateIsMessage() {
      this.theMessage = this.newMessage;
      this.$emit("adding", this.theMessage);
    },
    updateEntityId(value) {
      this.senderName = value;
      this.$emit("sender", this.senderName);
    }
  }
};
</script>




