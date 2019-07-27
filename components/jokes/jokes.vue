<template>
  <div>
    <v-btn>
      <v-icon>fas fa-code</v-icon>
    </v-btn>
    <div>
      <social-sharing :url="shareLink" inline-template>
        <div>
          <network network="facebook">
            <i class="fa fa-facebook"></i> Facebook
          </network>
          <network network="googleplus">
            <i class="fa fa-google-plus"></i> Google +
          </network>

          <network network="whatsapp">
            <i class="fa fa-whatsapp"></i> Whatsapp
          </network>

          <!-- and the others networs tag pasted from the readm.md -->
        </div>
      </social-sharing>
    </div>
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
          :color="geekyColor  "
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
                <!-- <v-flex md10 class="text-md-left">
                  <v-btn color="primary" small @click="kidme">Next</v-btn>
                </v-flex>-->
                <v-flex md12 class="text-md-right">
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
                  <div class="spacer title">{{chuckRandomJoke.value.joke | htmlEntities}}</div>
                  <v-spacer></v-spacer>
                  <div class="text-sm-left mt-5">
                    <v-text-field name="name" label="label" :model="shareLink"></v-text-field>
                    {{shareLink}}
                    <v-btn color="amber lighten-1" small @click="updateAndNavigate()">Next</v-btn>
                    <v-btn flat icon color="primary">
                      <v-icon>thumb_up</v-icon>
                    </v-btn>
                  </div>
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

                <div v-if="geekJoke" class="title">
                  <div v-for="(value, key) in geekJoke" :key="key">
                    <span class="title" v-if="key == 'setup'">{{value}}</span>
                    <span class="title red--text" v-if="key == 'punchline'">{{value}}</span>
                  </div>
                  <div class="text-sm-left mt-5">
                    <v-btn color="amber lighten-1" small @click="kidme">Next</v-btn>
                  </div>
                </div>
              </v-layout>
            </v-card-text>
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



