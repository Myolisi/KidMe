export default{
     data(){
          return{
              cars: ''
        }
    },
    async asyncData ({ params }) {
       let { data } = await this.$axios.$get('/cars.json')
        return { cars: data }  
    },
    created(){
        console.log(this.cars);

    }, methods:{
          search() {
      if (this.search)
        return this.$axios.$get("/users.json").then((res) => console.log(this.users = res));
        
    }
    }
}