export default {
  data() {
    return {
      chuckRandomJoke: '',
      chuckRandomJokeNoExplicit: '',
      randomJoke: '',
      isExlicit: false,
      geekJoke: '',
      elevation: 7,
      name: "James May",
      isGeeky: false,
      isChuck: true,
      geekyColor: 'deep-orange lighten-5',
      chuckColor: 'primary'
    }
  },
  methods: {
    updateName() {
      console.log(this.name)
    },
    chuckRandom() {
      this.geekJoke = ''
      this.$axios.$get('http://api.icndb.com/jokes/random?exclude=[explicit]/3')
        .then((result) => {
          this.chuckRandomJoke = result
        }).catch((err) => {

        });
    },
    chuckRandomNoExplicit() {
      this.chuckRandomJoke = ''
      this.$axios.$get('http://api.icndb.com/jokes/random?exclude=[explicit]')
        .then((result) => {
          this.chuckRandomJokeNoExplicit = result
        }).catch((err) => {

        });
    },
    geekJokes() {
      this.chuckRandomJoke = ''
      this.$axios.$get('https://official-joke-api.appspot.com/random_joke')
        .then((joke) => {
          this.geekJoke = joke;
        })
    },
    // geekJokes() {
    //   this.chuckRandomJokeNoExplicit = ''
    //   this.$axios.$get('https://geek-jokes.sameerkumar.website/api')
    //     .then((joke) => {
    //       this.geekJoke = joke;
    //     })
    // },
    kidme() {
      if (this.isChuck) {
        this.chuckRandom()
      } else if (this.isGeeky) {
        this.geekJokes()
      }
    }
  },

  computed: {

  },
  created() {

  },
  watch: {
    isGeeky(newVal, oldVal) {
      newVal == true ? this.geekyColor = 'primary' : this.geekyColor = 'deep-orange lighten-5'
    },
    isChuck(newVal, oldVal) {
      newVal == true ? this.chuckColor = 'primary' : this.chuckColor = 'deep-orange lighten-5'
    }
  }
}
