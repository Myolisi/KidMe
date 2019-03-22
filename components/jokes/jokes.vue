<template>
  <div>
    <v-layout row wrap justify-center class="mb-3">
      <v-flex md12>
        <v-chip
          @click="isChuck = !isChuck; isGeeky = false"
          :selected="isChuck"
          :color="chuckColor"
          text-color="white"
        >
          <v-avatar>
            <img
              src="https://i.pinimg.com/236x/9a/37/9f/9a379f875d38d96e7774c1bcb955b486--walker-texas-ranger-chuck-norris.jpg"
              alt="trevor"
            >
          </v-avatar>Chuck Norris Random
        </v-chip>

        <v-chip
          @click="isGeeky = !isGeeky; isChuck = false"
          :selected="isGeeky"
          :color="geekyColor"
          text-color="white"
        >
          <v-avatar>
            <img src="../../static/nerd_png_921839.jpg" alt="trevor">
          </v-avatar>Geeky Jokes
        </v-chip>
        <!-- <v-btn ml-2 color="primary" small @click="kidme">Get Joke</v-btn> -->
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex md12>
        <v-card :elevation="elevation" flat class="grow pl-4 pr-4">
          <div v-if="chuckRandomJoke || geekJoke">
            <v-card-title primary-title class="mr-5">
              <v-layout row wrap>
                <v-flex md10 class="text-md-left">
                  <v-btn color="primary" small @click="kidme">Next</v-btn>
                </v-flex>
                <v-flex md2 class="text-md-right">
                  <span v-if="chuckRandomJoke && chuckRandomJoke.value.categories.length !=0">
                    <span
                      v-for="(categories, index) in chuckRandomJoke.value.categories"
                      v-bind:key="index"
                    >
                      <v-chip color="green" small text-color="white">{{categories}}</v-chip>
                    </span>
                  </span>

                  <span v-else-if="geekJoke">
                    <v-chip color="green" small text-color="white">{{geekJoke.type}}</v-chip>
                  </span>

                  <template v-else>
                    <v-chip color="red" small text-color="white">not categorize</v-chip>
                  </template>
                </v-flex>
              </v-layout>
            </v-card-title>
            <v-card-text class="pa-4">
              <v-layout>
                <v-flex md7 v-if="chuckRandomJoke && !geekJoke">
                  <span class="title">{{chuckRandomJoke.value.joke | htmlEntities}}</span>
                </v-flex>
                <v-flex md3 offset-md1 v-if="chuckGif && chuckRandomJoke" text-md-center>
                  <div v-if="isloadingGif">
                    <!-- <img src="loading.gif" width="100" alt="avatar"> -->
                    <v-progress-circular :size="30" color="primary" indeterminate></v-progress-circular>
                  </div>

                  <div v-else>
                    <img :src="chuckGif" width="300" alt="avatar">
                  </div>
                </v-flex>

                <span v-if="geekJoke" class="title">
                  <div v-for="(value, key) in geekJoke" :key="key">
                    <span class="title" v-if="key == 'setup'">{{value}}</span>
                    <span class="title red--text" v-if="key == 'punchline'">{{value}}</span>
                  </div>
                </span>
              </v-layout>
            </v-card-text>
          </div>
          <div v-if="norJoke" class="text-md-center">
            <v-layout row column>
              <v-flex md12 pa-3>
                <a md12 color="success" class="title" flat @click="jokePlease">You tell joke me now!</a>
              </v-flex>
              <v-flex md12>
                <img src="stickman.gif" height="250" alt="avatar">
              </v-flex>
            </v-layout>
          </div>
          <v-card-actions>
            <!-- <v-btn icon flat>
              <v-icon color="orange darken-4">favorite</v-icon>
            </v-btn>-->
          </v-card-actions>
          <v-divider></v-divider>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>


<script src="./jokes.js"></script>
<style lang="stylus" src="./jokes.styl"></style>



