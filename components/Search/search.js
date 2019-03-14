import searchMixin from '../searchMixin';
export default {
  components: {},
  mixins: [searchMixin],
  data() {
    return {
      pagination: {
        sortBy: 'entityType'
      },
      selected: [],
      name: 'James May',
      users: [],
      searchVal: '',
      items: true,
      headers: [{
          text: 'entity Type',
          value: 'entityType'
        },
        {
          text: 'entity Id',
          align: 'center',
          value: 'entityId'
        },
        {
          text: 'activity Date',
          value: 'activityDate'
        }, {
          text: 'activity Reference',
          value: 'activityReference'
        }, {
          text: 'score',
          value: 'score'
        }, {
          text: 'activity Data',
          value: 'activityData'
        },
        {
          text: 'Delete',
          value: 'name',
          sortable: false
        }
      ],
      vouchers: [{
          "activityType": "adHoc2000",
          "voucher": [{
              "entityType": "regularDriver",
              "entityId": "00743531-b270-11e7-818a-06bdac72bb21",
              "activityDate": "2019-02-07T09:55:45.736Z",
              "activityReference": "00743531-b270-11e7-818a-06bdac72bb21:2019-02-07T09:55:45.736Z",
              "score": 1,
              "activityData": {

              }
            },
            {
              "entityType": "regularDriver",
              "entityId": "00743531-b270-11e7-818a-06bdac72bb21",
              "activityDate": "2019-02-07T09:56:30.630Z",
              "activityReference": "00743531-b270-11e7-818a-06bdac72bb21:2019-02-07T09:56:30.630Z",
              "score": 1,
              "activityData": {

              }
            },
            {
              "entityType": "regularDriver",
              "entityId": "00743531-b270-11e7-818a-06bdac72bb21",
              "activityDate": "2019-02-07T13:17:50.801Z",
              "activityReference": "00743531-b270-11e7-818a-06bdac72bb21:2019-02-07T13:17:50.801Z",
              "score": 1,
              "activityData": {

              }
            },
            {
              "entityType": "regularDriver",
              "entityId": "00743531-b270-11e7-818a-06bdac72bb21",
              "activityDate": "2019-02-07T13:22:18.717Z",
              "activityReference": "00743531-b270-11e7-818a-06bdac72bb21:2019-02-07T13:22:18.717Z",
              "score": 1,
              "activityData": {

              }
            },
            {
              "entityType": "regularDriver",
              "entityId": "00743531-b270-11e7-818a-06bdac72bb21",
              "activityDate": "2019-02-07T13:31:47.979Z",
              "activityReference": "00743531-b270-11e7-818a-06bdac72bb21:2019-02-07T13:31:47.979Z",
              "score": 1,
              "activityData": {

              }
            },
            {
              "entityType": "regularDriver",
              "entityId": "00743531-b270-11e7-818a-06bdac72bb21",
              "activityDate": "2019-02-07T13:32:03.208Z",
              "activityReference": "00743531-b270-11e7-818a-06bdac72bb21:2019-02-07T13:32:03.208Z",
              "score": 1,
              "activityData": {

              }
            },
            {
              "entityType": "regularDriver",
              "entityId": "00743531-b270-11e7-818a-06bdac72bb21",
              "activityDate": "2019-02-07T13:54:44.032Z",
              "activityReference": "00743531-b270-11e7-818a-06bdac72bb21:2019-02-07T13:54:44.032Z",
              "score": 1,
              "activityData": {

              }
            },
            {
              "entityType": "regularDriver",
              "entityId": "00743531-b270-11e7-818a-06bdac72bb21",
              "activityDate": "2019-02-13T07:24:34.347Z",
              "activityReference": "00743531-b270-11e7-818a-06bdac72bb21:2019-02-13T07:24:34.347Z",
              "score": 1,
              "activityData": {

              }
            }
          ]
        },
        {
          "activityType": "adHoc30",
          "voucher": [{
              "entityType": "regularDriver",
              "entityId": "00743531-b270-11e7-818a-06bdac72bb21",
              "activityDate": "2019-02-07T12:12:37.487Z",
              "activityReference": "00743531-b270-11e7-818a-06bdac72bb21:2019-02-07T12:12:37.487Z",
              "score": 1,
              "activityData": {

              }
            },
            {
              "entityType": "regularDriver",
              "entityId": "00743531-b270-11e7-818a-06bdac72bb21",
              "activityDate": "2019-02-07T13:17:50.799Z",
              "activityReference": "00743531-b270-11e7-818a-06bdac72bb21:2019-02-07T13:17:50.799Z",
              "score": 1,
              "activityData": {

              }
            },
            {
              "entityType": "regularDriver",
              "entityId": "00743531-b270-11e7-818a-06bdac72bb21",
              "activityDate": "2019-02-13T07:23:09.521Z",
              "activityReference": "00743531-b270-11e7-818a-06bdac72bb21:2019-02-13T07:23:09.521Z",
              "score": 1,
              "activityData": {

              }
            }
          ]
        },
        {
          "activityType": "adHoc50",
          "voucher": [{
              "entityType": "regularDriver",
              "entityId": "00743531-b270-11e7-818a-06bdac72bb21",
              "activityDate": "2019-02-07T10:04:46.042Z",
              "activityReference": "00743531-b270-11e7-818a-06bdac72bb21:2019-02-07T10:04:46.042Z",
              "score": 1,
              "activityData": {

              }
            },
            {
              "entityType": "regularDriver",
              "entityId": "00743531-b270-11e7-818a-06bdac72bb21",
              "activityDate": "2019-02-07T10:13:00.766Z",
              "activityReference": "00743531-b270-11e7-818a-06bdac72bb21:2019-02-07T10:13:00.766Z",
              "score": 1,
              "activityData": {

              }
            },
            {
              "entityType": "regularDriver",
              "entityId": "00743531-b270-11e7-818a-06bdac72bb21",
              "activityDate": "2019-02-07T12:12:37.489Z",
              "activityReference": "00743531-b270-11e7-818a-06bdac72bb21:2019-02-07T12:12:37.489Z",
              "score": 1,
              "activityData": {

              }
            },
            {
              "entityType": "regularDriver",
              "entityId": "00743531-b270-11e7-818a-06bdac72bb21",
              "activityDate": "2019-02-07T13:32:03.210Z",
              "activityReference": "00743531-b270-11e7-818a-06bdac72bb21:2019-02-07T13:32:03.210Z",
              "score": 1,
              "activityData": {

              }
            },
            {
              "entityType": "regularDriver",
              "entityId": "00743531-b270-11e7-818a-06bdac72bb21",
              "activityDate": "2019-02-07T13:54:44.028Z",
              "activityReference": "00743531-b270-11e7-818a-06bdac72bb21:2019-02-07T13:54:44.028Z",
              "score": 1,
              "activityData": {

              }
            },
            {
              "entityType": "regularDriver",
              "entityId": "00743531-b270-11e7-818a-06bdac72bb21",
              "activityDate": "2019-02-13T07:24:34.648Z",
              "activityReference": "00743531-b270-11e7-818a-06bdac72bb21:2019-02-13T07:24:34.648Z",
              "score": 1,
              "activityData": {

              }
            },
            {
              "entityType": "regularDriver",
              "entityId": "00743531-b270-11e7-818a-06bdac72bb21",
              "activityDate": "2019-02-13T08:09:44.824Z",
              "activityReference": "00743531-b270-11e7-818a-06bdac72bb21:2019-02-13T08:09:44.824Z",
              "score": 1,
              "activityData": {

              }
            }
          ]
        },
        {
          "activityType": "adHoc1000",
          "voucher": [{
              "entityType": "regularDriver",
              "entityId": "00743531-b270-11e7-818a-06bdac72bb21",
              "activityDate": "2019-02-07T09:52:10.647Z",
              "activityReference": "00743531-b270-11e7-818a-06bdac72bb21:2019-02-07T09:52:10.647Z",
              "score": 1,
              "activityData": {

              }
            },
            {
              "entityType": "regularDriver",
              "entityId": "00743531-b270-11e7-818a-06bdac72bb21",
              "activityDate": "2019-02-07T13:22:18.719Z",
              "activityReference": "00743531-b270-11e7-818a-06bdac72bb21:2019-02-07T13:22:18.719Z",
              "score": 1,
              "activityData": {

              }
            },
            {
              "entityType": "regularDriver",
              "entityId": "00743531-b270-11e7-818a-06bdac72bb21",
              "activityDate": "2019-02-07T13:32:03.211Z",
              "activityReference": "00743531-b270-11e7-818a-06bdac72bb21:2019-02-07T13:32:03.211Z",
              "score": 1,
              "activityData": {

              }
            },
            {
              "entityType": "regularDriver",
              "entityId": "00743531-b270-11e7-818a-06bdac72bb21",
              "activityDate": "2019-02-07T13:54:44.031Z",
              "activityReference": "00743531-b270-11e7-818a-06bdac72bb21:2019-02-07T13:54:44.031Z",
              "score": 1,
              "activityData": {

              }
            },
            {
              "entityType": "regularDriver",
              "entityId": "00743531-b270-11e7-818a-06bdac72bb21",
              "activityDate": "2019-02-13T07:35:06.072Z",
              "activityReference": "00743531-b270-11e7-818a-06bdac72bb21:2019-02-13T07:35:06.072Z",
              "score": 1,
              "activityData": {

              }
            }
          ]
        }
      ]
    }
  },
  methods: {
    toggleAll() {
      if (this.selected.length) this.selected = []
      else this.selected = this.desserts.slice()
    },
    changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = column
        this.pagination.descending = false
      }
    }
  },
  computed: {},
  created() {
    console.log(this.cars)
  }
};
