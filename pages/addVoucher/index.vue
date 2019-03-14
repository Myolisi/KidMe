<template>
  <div>
    <v-btn color="success" @click="addVoucher('1233435435233')">ADD VOUCHERS</v-btn>
    <v-dialog v-model="isAdding" persistent max-width="580px">
      <v-card>
        <v-card-title class="subheading grey lighten-2" primary-title>Add voucher</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-flex sm2>
                  <span class="subheading font-weight-bold">Entit Type
                    <v-divider></v-divider>
                  </span>
                </v-flex>
                <div class="text-md-center">
                  <v-radio-group
                    v-model="selectedEntityType"
                    :mandatory="false"
                    @input="c"
                    row
                    class="justify-center"
                  >
                    <v-radio label="Regular Driver" value="ragularDriver"></v-radio>
                    <v-radio label="Policy" value="policy"></v-radio>
                    <v-radio label="Vehicle" value="vehicle"></v-radio>
                  </v-radio-group>
                </div>
              </v-flex>
              <v-flex xs12>
                <v-flex sm2>
                  <span class="subheading font-weight-bold">Available
                    <v-divider></v-divider>
                  </span>
                </v-flex>
              </v-flex>
              <v-flex md12 sm6>
                <div v-for="(items, key) in actvityTypes" :key="key">
                  <v-layout row wrap>
                    <v-flex md6>
                      <div>{{items}}</div>
                    </v-flex>
                    <v-flex md6>
                      <v-text-field xsmall solo ></v-text-field>
                    </v-flex>
                  </v-layout>
                  <v-divider></v-divider>
                </div>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" @change="c" flat @click="cancel">Cancel</v-btn>
          <v-btn color="blue darken-1" @change="c" flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import search from "~/components/search/search.vue";
export default {
  components: {
    search
  },
  data() {
    return {
      isAdding: false,
      selectedEntityType: "ragularDriver",
      total: 0,
      actvityTypes: ["adHoc30", "adHoc50", "adHoc80", "adHoc100"]
    };
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
