<template>
  <div>
    <v-layout row wrap justify-center class="mb-3">
      <v-flex md11>
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
        <v-btn color="success" small @click="kidme">Kid Meeee</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex md11>
        <v-card :elevation="elevation" flat>
          <div v-if="chuckRandomJoke || geekJoke">
            <v-card-title primary-title class="justify-end">
              <div v-if="chuckRandomJoke && chuckRandomJoke.value.categories.length !=0">
                <div
                  v-for="(categories, index) in chuckRandomJoke.value.categories"
                  v-bind:key="index"
                >
                  <v-chip color="green" close text-color="white">{{categories}}</v-chip>
                </div>
              </div>

              <div v-else-if="geekJoke">
                <v-chip color="green" close text-color="white">{{geekJoke.type}}</v-chip>
              </div>

              <div v-else>
                <v-chip color="red" disabled text-color="white">not categorize</v-chip>
              </div>
            </v-card-title>
            <v-card-text>
              <v-layout class="ml-5 mr-5">
                <span
                  v-if="chuckRandomJoke && !geekJoke"
                  class="title"
                >{{chuckRandomJoke.value.joke | htmlEntities}}</span>
                <span v-if="geekJoke" class="title">
                  <div v-for="(value, key) in geekJoke" :key="key">
                    <span class="title" v-if="key == 'setup'">{{value}}</span>
                    <br>
                    <span class="title red--text" v-if="key == 'punchline'">{{value}}</span>
                  </div>
                </span>
              </v-layout>
            </v-card-text>
          </div>
          <v-card-actions>
            <v-btn icon flat>
              <v-icon color="orange darken-4">favorite</v-icon>
            </v-btn>
          </v-card-actions>
          <v-divider></v-divider>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>


<script src="./jokes.js"></script>
<style lang="stylus" src="./jokes.styl"></style>



