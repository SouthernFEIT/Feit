<template>
  <div>

    <div class="top">
      <h1 class>Seniors in Work</h1>
      <br />
      <p>Finds out what company the FEIT graduated students have been worked with.</p>
    </div>
    <!-- top -->
    <!-- content -->
    <div class="center">
      <div style="text-align: center;margin-bottom:2%">Board</div>
      <div class="cards">
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
        <v-pagination v-model="page" :length="Math.ceil(seniors.length/[smaller?3:9])"></v-pagination>
      </div>
    </div>
    <!-- center -->
    <div class="seniorThoughts">
      <h1 class="wordSeniorThoughts">Senior Thought</h1>
      <div class="cards space">
        <div class="cardsForSenior">
          <v-card
            class="cardInside size"
            v-for="index in 2"
            v-bind:key="index"
          >
            <v-list-item>
              <v-list-item-avatar color="grey" height="90" width="90">
                <v-img v-bind:src="thoughts[index-1].imgUrl"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <div class="overline mb-4">{{thoughts[index-1].overline}}</div>
                <v-list-item-title style="margin-bottom:3%">
                  <b>{{thoughts[index-1].name}}</b>
                </v-list-item-title>
                <v-list-item-subtitle
                  style="font-size:12px;padding:0;"
                >{{thoughts[index-1].position}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-list-item-content>
                <v-list-item-subtitle>
                  <div>{{thoughts[index-1].text}}</div>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-card-actions>
          </v-card>
        </div>
        <!-- left -->
        <div class="right">
          <v-card  class="cardInside size">
            <v-list-item>
              <v-list-item-avatar color="grey" height="90" width="90">
                <v-img v-bind:src="thoughts[2].imgUrl"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <div class="overline mb-4">{{thoughts[2].overline}}</div>
                <v-list-item-title style="margin-bottom:3%">
                  <b>{{thoughts[2].name}}</b>
                </v-list-item-title>
                <v-list-item-subtitle style="font-size:12px;padding:0;">{{thoughts[2].position}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-list-item-content >
                <v-list-item-subtitle >{{thoughts[2].text}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-card-actions>
          </v-card>

          <v-card  class="cardInside size">
            <v-list-item>
              <v-list-item-avatar color="grey" height="90" width="90">
                <v-img v-bind:src="thoughts[3].imgUrl"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <div class="overline mb-4">{{thoughts[3].overline}}</div>
                <v-list-item-title style="margin-bottom:3%">
                  <b>{{thoughts[3].name}}</b>
                </v-list-item-title>
                <v-list-item-subtitle style="font-size:12px;padding:0;">{{thoughts[3].position}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-list-item-content>
                <v-list-item-subtitle>{{thoughts[3].text}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-card-actions>
          </v-card>
        </div>
        <!-- right -->
      </div>
      <!-- cards -->
    </div>
    <!-- seniorThoughts -->
    <Footer/>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
import Card from '../components/cards/Card'

export default {
  components: {
      Card,
      Nav
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
          text: "Lorem impusum",
          imgUrl: require("../assets/images/hero.png")
        }
      ],
      windowWidth:window.innerWidth,
      smaller:false,
    }; //return
  }, //data
  watch: {
    page: function(val) {
      if(this.smaller){
        this.indexes = val *3;
        this.indexe = this.indexes -3;
      }
      else{
      this.indexes = val * 9;
      this.indexe = this.indexes - 9;
      }

    },
    windowWidth(){
      if(this.windowWidth<=960){
        this.smaller = true;
      }
      else{
        this.smaller = false;
      }
    },
    smaller(){
      if(this.smaller){
        this.indexes = this.page * 3;
        this.indexe = this.indexes -3;
      }
      else{
        this.page = 1;
      }
    }
  },
  created() {
  window.addEventListener("resize", this.myEventHandler);
  if(window.innerWidth<=960){
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
*{
  line-height:inherit;
}
.top {
  background-image: url("../assets/images/senior_in_work_hero.png");
  background-position: center top;
  background-size: 100%;
  color: white !important;
  padding: 10% 30% 10% 30%;
  text-align: center;
}
.center {
  padding: 11%;
  background: #f9f9fd;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  white-space: nowrap;
}
.cardInside {
  margin: 5% 0% 5% 5%;
}
.v-card__actions {
  padding: 0;
}
.seniorThoughts {
  background: #4d17e3;
  color: white;
  padding: 5%;
}
.listItem {
  padding: 7%;
}
.listActions {
  padding: 4%;
}
.space {
  justify-content: space-evenly;
}
.v-list-item__subtitle {
  overflow-wrap: break-word;
  word-wrap: break-word;
  white-space: unset;
  padding: 5%;
}
.right {
  margin-top: 5%;
}
.wordSeniorThoughts {
  padding: 5%;
}

.size{
    width:500px; 
    min-height:250px;
    }

@media screen and (max-width: 960px) {
    
    .top{
      padding:0 0 1% 0;
    }

    .size{
      width:100%;
      max-width: 960px;
      min-height: 0;
      display:block;
    }

    .cards{
        display:block;
    }
}
</style>