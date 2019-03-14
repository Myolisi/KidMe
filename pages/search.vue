<template>
  <!-- <div>
    <h4 class="subheadig">Sender: {{sender}}</h4>
    Message From Adding: {{addingMessage}}
    <br>
    <br>
    <addComponent @adding="addingMessage = $event" @sender="sender = $event"></addComponent>

    <br>
    Message From delete {{deletingMessage}}
    <h3>Delete</h3>
    <deleteComponent></deleteComponent>
  </div>-->
  <div>
    <v-btn color="success" @click="open">Open</v-btn>
    <v-dialog v-model="isAddingVoucher" persistent max-width="600px">
      <v-card>
        <v-card-title class="subheading grey lighten-2" primary-title>Add voucher</v-card-title>

        <v-card-text>
          <v-container grid-list-xs>
            <v-layout wrap>
              <v-flex xs12>
                <v-flex sm3>
                  <span class="subheading font-weight-bold">Entity Type</span>
                </v-flex>
                <div class="text-md-center">
                  <v-radio-group :mandatory="false" row v-model="selectedEntityType">
                    <v-radio label="Regular Driver" value="ragularDriver"></v-radio>
                    <v-radio label="Policy" value="policy"></v-radio>
                    <v-radio label="Vehicle" value="vehicle"></v-radio>
                  </v-radio-group>
                </div>
              </v-flex>
              <v-flex xs12>
                <v-flex sm2>
                  <span class="subheading font-weight-bold">Available</span>
                </v-flex>
              </v-flex>
              <v-flex md12 sm6 ml-1>
                <div v-for="(items, key) in activityTypes" :key="key">
                  <v-divider></v-divider>
                  <v-layout row wrap align-baseline>
                    <v-flex md10>
                      <div class="body-2">{{items.identifier | camelCaseToReadable}}</div>
                    </v-flex>
                    <v-flex md2>
                      <quantity-field :quantityProp="quantity" @updateValue="quantity = $event"></quantity-field>
                    </v-flex>
                  </v-layout>
                </div>
              </v-flex>
            </v-layout>
            <v-layout justify-end row>
              <v-flex md3>
                <span class="red--text font-weight-medium">Total :</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="open">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import addComponent from "~/components/addComponent.vue";
import deleteComponent from "~/components/addComponent.vue";
export default {
  components: {
    addComponent,
    deleteComponent
  },
  data() {
    return {
      addingMessage: "No message",
      deletingMessage: "No message",
      sender: "",
      isAddingVoucher: false,
      activityTypes: [
        { identifier: "adHoc30" },
        { identifier: "adHoc30" },
        { identifier: "adHoc30" },
        { identifier: "adHoc30" }
      ]
    };
  },
  methods: {
    open() {
      this.isAddingVoucher = !this.isAddingVoucher;
    }
  }
};
</script>
style
