<template>
  <v-container>
    <div v-for="(item, key) in vouchers" :key="key" class="mb-4">
      <div>{{item.activityType}}</div>
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="item.voucher"
        :pagination.sync="pagination"
        select-all
        item-key="name"
        class="elevation-1"
      >
        <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
        <template slot="headers" slot-scope="props">
          <tr>
            <th>
              <v-checkbox
                :input-value="props.all"
                :indeterminate="props.indeterminate"
                primary
                hide-details
                @click.stop="toggleAll"
              ></v-checkbox>
            </th>
            <th
              v-for="header in props.headers"
              :key="header.text"
              :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
              @click="changeSort(header.value)"
            >
              <v-icon small>arrow_upward</v-icon>
              {{ header.text }}
            </th>
          </tr>
        </template>
        <template slot="items" slot-scope="props">
          <tr :active="props.selected" @click.native="props.selected = !props.selected">
            <td>
              <v-checkbox :input-value="props.selected" primary hide-details></v-checkbox>
            </td>
            <td>{{ props.item.entityType }}</td>
            <td class="text-xs-right">{{ props.item.entityId }}</td>
            <td class="text-xs-right">{{ props.item.activityDate }}</td>
            <td class="text-xs-right">{{ props.item.activityReference }}</td>
            <td class="text-xs-right">{{ props.item.score }}</td>
            <td class="text-xs-right">{{ props.item.activityData }}</td>
            <td class="justify-center layout px-0">
              <v-btn flat icon color="blue lighten-2">
                <v-icon small @click="deleteItem( props.item.activityReference)">delete</v-icon>
              </v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
    </div>
  </v-container>
</template>


<script src="./search.js"></script>
<style lang="stylus" src="./search.css"></style>



