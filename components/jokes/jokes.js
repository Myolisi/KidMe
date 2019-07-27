export default {
  data() {
    return {
      chuckRandomJoke: "",
      chuckRandomJokeNoExplicit: "",
      randomJoke: "",
      isExlicit: false,
      geekJoke: "",
      elevation: 7,
      name: "James May",
      isGeeky: false,
      isChuck: true,
      geekyColor: "deep-orange lighten-5",
      chuckColor: "primary",
      chuckGif: "",
      tile: true,
      norJoke: true,
      isloadingGif: false,
      shareLink: ''
    };
  },
  methods: {
    updateAndNavigate() {
      if (this.$route.params.shared != 'random') {
        this.$route.params.shared = 'random'
        this.$router.push('random')
      } else {
        this.kidme();
      }


      // $router.push('random')
    },
    chuckRandom() {
      this.shareLink = ''
      this.getGif();
      this.geekJoke = "";
      console.log(this.$route.params)
      if (this.$route.params.shared != 'random') {
        this.$axios
          .$get(`http://api.icndb.com/jokes/${this.$route.params.shared}`)
          .then(result => {
            this.chuckRandomJoke = result;
          })
          .catch(err => {});
      } else {
        this.$axios
          .$get("https://api.icndb.com/jokes/random?exclude=[explicit]/3")
          .then(result => {
            this.chuckRandomJoke = result;
            this.shareLink = `https://kidmeapp.herokuapp.com/${result.value.id}`;
          })
          .catch(err => {});
      }

    },
    chuckRandomNoExplicit() {
      this.chuckRandomJoke = "";
      this.$axios
        .$get("https://api.icndb.com/jokes/random?exclude=[explicit]")
        .then(result => {
          this.chuckRandomJokeNoExplicit = result;
        })
        .catch(err => {});
    },
    geekJokes() {
      this.chuckRandomJoke = "";
      this.$axios
        .$get("https://official-joke-api.appspot.com/random_joke")
        .then(joke => {
          this.geekJoke = joke;
        });
    },
    getGif() {
      this.isloadingGif = true;
      // http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=P9VocNCAKR94qfy5MNlxGGV3RLmUSaxf&limit=1
      this.$axios
        .$get("https://api.giphy.com/v1/gifs/random", {
          params: {
            tag: "shock",
            api_key: "P9VocNCAKR94qfy5MNlxGGV3RLmUSaxf"
          }
        })
        .then(gif => {
          this.chuckGif = gif.data.images.downsized.url;
          this.isloadingGif = false;
          setTimeout(() => {}, 2000);
        });
    },
    // geekJokes() {
    //   this.chuckRandomJokeNoExplicit = ''
    //   this.$axios.$get('https://geek-jokes.sameerkumar.website/api')
    //     .then((joke) => {
    //       this.geekJoke = joke;
    //     })
    // },
    kidme() {
      this.norJoke = false;
      if (this.isChuck) {
        this.chuckRandom();
      } else if (this.isGeeky) {
        this.geekJokes();
      }
    }
  },
  created() {
    if (this.$route.params.shared != 'random') {
      this.kidme();
    } else {
      this.kidme();
    }

  },
  watch: {
    isGeeky(newVal, oldVal) {
      newVal == true ?
        (this.geekyColor = "primary") :
        (this.geekyColor = "deep-orange lighten-5");
    },
    isChuck(newVal, oldVal) {
      newVal == true ?
        (this.chuckColor = "primary") :
        (this.chuckColor = "deep-orange lighten-5");
    }
  }
};
