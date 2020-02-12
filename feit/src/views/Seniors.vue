<template>
  <div>
    <div class="top">
      <h1 class>Seniors in Work</h1>
      <br />
      <p>Finds out what company the FEIT graduated students have been worked with.</p>
    </div>
    <!-- top -->
    <!-- content -->
    <v-container class="flex-column center">
      <div style="text-align: center;margin-bottom:3em" class="bold-title">Board</div>
      <div class="cards-container">
        <div v-for="(senior,index) in seniors" v-bind:key="index">
          <div v-if="index >= indexe && index < indexes">
            <Card
              :imgUrl="senior.imgUrl"
              :name="senior.name"
              :position="senior.position"
              :location="senior.location"
              :phoneNumber="senior.phoneNumber"
            />
          </div>
        </div>    
        <!-- v-if -->
        </div>

        <!-- cards -->
      <div class="text-center">
        <v-pagination v-model="page" :length="Math.ceil(seniors.length/9)"></v-pagination>
      </div>
        
      </v-container>      
    
    <!-- center -->
    <div class="seniorThoughts">
      <v-container class="flex-column">
      <h1 class="wordSeniorThoughts">Senior Thought</h1>
      <div class="cards">

        <div class="cards4senior-container">
          <v-card :class="[((index+1) % 2 == 0) ? 'cardInside right' : 'cardInside']"  v-for="(thought,index) in thoughts" v-bind:key="index">
            <v-list-item>
              <v-list-item-avatar class="avatar" color="grey" height="90" width="90">
                <v-img v-bind:src="thought.imgUrl"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <div class="overline mb-4">{{thought.overline}}</div>
                <v-list-item-title style="margin-bottom:3%">
                  <b>{{thought.name}}</b>
                </v-list-item-title>
                <v-list-item-subtitle
                  style="font-size:12px;padding:0;"
                >{{thought.position}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-list-item-content>
                <v-list-item-subtitle>
                  <div>{{thought.text}}</div>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-card-actions>
          </v-card>      
        </div>
      </div>      
      <!-- cards -->
      </v-container>
    </div>
    <!-- seniorThoughts -->
    <Footer />
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
import Card from "../components/cards/Card";

export default {
  components: {
    Card
  },
  name: "Seniors",
  components: {
    Card
  },
  data() {
    return {
      page: 1,
      indexes: 9,
      indexe: 0,
      seniors: [
        {
          name: "John Doe",
          position: "Junior Front-end Developer ",
          location: "Johor",
          phoneNumber: "012-3456789",
          imgUrl: require("../assets/images/hero.png")
        },
        {
          name: "John Does ",
          position: "Junior Front-end Developer",
          location: "Johor",
          phoneNumber: "012-3456789",
          imgUrl: require("../assets/images/hero.png")
        },
        {
          name: "John Does",
          position: "Junior Front-end Developer",
          location: "Johor",
          phoneNumber: "012-3456789",
          imgUrl: require("../assets/images/hero.png")
        },
        {
          name: "John Does",
          position: "Junior Front-end Developer",
          location: "Johor",
          phoneNumber: "012-3456789",
          imgUrl: require("../assets/images/hero.png")
        },
        {
          name: "John Doe",
          position: "Junior Front-end Developer",
          location: "Johor",
          phoneNumber: "012-3456789",
          imgUrl: require("../assets/images/hero.png")
        },
        {
          name: "John Does",
          position: "Junior Front-end Developer",
          location: "Johor",
          phoneNumber: "012-3456789",
          imgUrl: require("../assets/images/hero.png")
        },
        {
          name: "John Does",
          position: "Junior Front-end Developer",
          location: "Johor",
          phoneNumber: "012-3456789",
          imgUrl: require("../assets/images/hero.png")
        },
        {
          name: "John Does",
          position: "Junior Front-end Developer",
          location: "Johor",
          phoneNumber: "012-3456789",
          imgUrl: require("../assets/images/hero.png")
        },
        {
          name: "John Doe",
          position: "Junior Front-end Developer",
          location: "Johor",
          phoneNumber: "012-3456789",
          imgUrl: require("../assets/images/hero.png")
        },
        {
          name: "John Does",
          position: "Junior Front-end Developer",
          location: "Johor",
          phoneNumber: "012-3456789",
          imgUrl: require("../assets/images/hero.png")
        },
        {
          name: "John Does",
          position: "Junior Front-end Developer",
          location: "Johor",
          phoneNumber: "012-3456789",
          imgUrl: require("../assets/images/hero.png")
        },
        {
          name: "John Does",
          position: "Junior Front-end Developer",
          location: "Johor",
          phoneNumber: "012-3456789",
          imgUrl: require("../assets/images/hero.png")
        },
        {
          name: "John Does",
          position: "Junior Front-end Developer",
          location: "Johor",
          phoneNumber: "012-3456789",
          imgUrl: require("../assets/images/hero.png")
        },
        {
          name: "John Does",
          position: "Junior Front-end Developer",
          location: "Johor",
          phoneNumber: "012-3456789",
          imgUrl: require("../assets/images/hero.png")
        }
      ], //seniors
      thoughts: [
        {
          overline: "Ex-boss",
          name: "John Doe",
          position: "Junior",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod " +
            "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
          imgUrl: require("../assets/images/hero.png")
        },
        {
          overline: "Ex-boss",
          name: "John Doe",
          position: "Junior",
          text: "Lorem impusum",
          
          imgUrl: require("../assets/images/hero.png")
        },
        {
          overline: "Ex-boss",
          name: "John Doe",
          position: "Junior",
          text: "Lorem impusum",
          imgUrl: require("../assets/images/hero.png")
        },
        {
          overline: "Ex-boss",
          name: "John Doe",
          position: "Junior",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, quas. Sapiente nesciunt maxime facilis eveniet voluptates consectetur non blanditiis, nobis doloremque dolores sunt consequatur, repudiandae quaerat ex dolor nihil quas.impusum",
          imgUrl: require("../assets/images/hero.png")
        }
      ],
      windowWidth: window.innerWidth,
      smaller: false
    }; //return
  }, //data
  watch: {
    page: function(val) {
      this.indexes = val * 9;
        this.indexe = this.indexes - 9;
    },
    windowWidth() {
      if (this.windowWidth <= 960) {
        this.smaller = true;
      } else {
        this.smaller = false;
      }
    },
    smaller() {
      this.page = 1;
    }
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
    if (window.innerWidth <= 960) {
      this.smaller = true;
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  methods: {
    myEventHandler(e) {
      this.windowWidth = window.innerWidth;
    }
  } //watch
};

</script>
<style scoped>
* {
  line-height: inherit;
}
.top {
  background-image: url("../assets/images/senior_in_work_hero.png");
  background-position: center top;
  background-size: cover;
  color: white !important;
  padding: 5em 2em !important;
  min-height: 50vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100%;
  text-align: center;
}
.center {
  padding-top: 5em;
  padding-bottom: 5em;
  /* background: #f9f9fd; */
}
.cards {
  display: flex;
  flex-wrap: wrap;
  white-space: nowrap;
}

.v-card__actions {
  padding: 0;
}
.seniorThoughts {
  background: #4d17e3;
  height: 100%;
  padding: 5em 0;
  color: white;  
}
.listItem {
  padding: 7%;
}
.listActions {
  padding: 4%;
}

.v-list-item__subtitle {
  overflow-wrap: break-word;
  word-wrap: break-word;
  white-space: unset;
  padding: 5%;
}
.right {
  bottom: -1.5em;
}
.wordSeniorThoughts {
  padding-bottom: 2em;
}

.cards4senior-container {
  max-width: 100%;
  width: 100%;
  display: grid;
  grid-template-areas: 'c c';
  gap: 2em;
  grid-auto-columns: minmax(40%, 1fr);
}

.cardInside {
  padding: 1.5em;
  width: 100%;
  max-width: 100%;
  background: #FFFFFF;
  box-shadow: 7px 15px 30px rgba(40, 44, 54, 0.25);
  border-radius: 7px;
}

.avatar {
  border-bottom: 7px solid #1ECC6E !important;
}

.size {
  width: 500px;
  min-height: 250px;
}

@media screen and (max-width: 960px) {  

  .size {
    width: 100%;
    max-width: 960px;
    min-height: 0;
    display: block;
  }

  .cards {
    display: block;
  }
}


@media screen and (max-width: 960px) {
  .cards4senior-container {
    grid-template-areas: 'c';
  }
  .right {
    bottom: 0;
  }
}
</style>