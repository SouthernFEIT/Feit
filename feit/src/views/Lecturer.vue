<template>
  <v-container class="lecturers-container">
    <v-tabs v-model="tabs" :grow="true" background-color="white" class="py-5" color="deep-purple accent-4">
      <v-tabs-slider></v-tabs-slider>
      <v-tab class="primary--text">
        <p class="tab-text">Department of Computer Science</p>
      </v-tab>

      <v-tab class="primary--text">
        <p class="tab-text">Department of Electrical & Electronics Engineering</p>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tabs">   
            
      <!-- DCS tab item -->
      <v-tab-item>

        <h6 class="bold-title py-5">Lecturer</h6>
          <div class="cards-container">
          
            <div class="card" v-for="(lecturer, index) in dcs_lecturers" v-bind:key="index">
              <Card                    
                :imgUrl="lecturer.imgUrl"
                :name="lecturer.name"
                :position="lecturer.position"
                :location="lecturer.location"
                :phoneNumber="lecturer.phoneNumber"              
              />
          </div>
        </div>

        <h6 class="bold-title py-5">Staff</h6>
        <div class="cards-container" >
        
          <div class="card" v-for="(staff, index) in dcs_staff" v-bind:key="index">
            <Card                    
              :imgUrl="staff.imgUrl"
              :name="staff.name"
              :position="staff.position"
              :location="staff.location"
              :phoneNumber="staff.phoneNumber"              
            />
          </div>          
          
        </div>
        
      </v-tab-item>

      <!-- DCS tab item -->
      <v-tab-item>

        <h6 class="bold-title py-5">Lecturer</h6>
          <div class="cards-container">
          
            <div class="card" v-for="(lecturer, index) in dee_lecturers" v-bind:key="index">
              <Card                    
                :imgUrl="lecturer.imgUrl"
                :name="lecturer.name"
                :position="lecturer.position"
                :location="lecturer.location"
                :phoneNumber="lecturer.phoneNumber"              
              />
          </div>
        </div>

        <h6 class="bold-title py-5">Staff</h6>
        <div class="cards-container" >
        
          <div class="card" v-for="(staff, index) in dee_staff" v-bind:key="index">
            <Card                    
              :imgUrl="staff.imgUrl"
              :name="staff.name"
              :position="staff.position"
              :location="staff.location"
              :phoneNumber="staff.phoneNumber"              
            />
          </div>          
          
        </div>
        
      </v-tab-item>

    </v-tabs-items>
  </v-container>
</template>

<script>
import Card from "../components/cards/Card";

export default {
  name: "Lecturer",
  components: {
    Card
  },
  data() {
    return {
      tabs: null,
      dcs_lecturers: [
        {          
          name: "John Doe",
          position: "Junior Front-end Developer ",
          location: "Johor",
          phoneNumber: "012-3456789",
          imgUrl: require("../assets/images/hero.png")
        },      
        {          
          name: "John Does",
          position: "Junior Front-end Developer ",
          location: "Johor",
          phoneNumber: "012-3456789",
          imgUrl: require("../assets/images/hero.png")
        },    
        {          
          name: "John Does",
          position: "Junior Front-end Developer ",
          location: "Johor",
          phoneNumber: "012-3456789",
          imgUrl: require("../assets/images/hero.png")
        },  
        {          
          name: "John Does",
          position: "Junior Front-end Developer ",
          location: "Johor",
          phoneNumber: "012-3456789",
          imgUrl: require("../assets/images/hero.png")
        },  
        {          
          name: "John Does",
          position: "Junior Front-end Developer ",
          location: "Johor",
          phoneNumber: "012-3456789",
          imgUrl: require("../assets/images/hero.png")
        },     
      ],
      dee_lecturers: [
        {          
          name: "John Doe2",
          position: "Junior Front-end Developer ",
          location: "Johor",
          phoneNumber: "012-3456789",
          imgUrl: require("../assets/images/hero.png")
        },
      ],
      dcs_staff: [
        {          
          name: "John Doe",
          position: "Junior Front-end Developer ",
          location: "Johor",
          phoneNumber: "012-3456789",
          imgUrl: require("../assets/images/hero.png")
        },      
      ],
      dee_staff: [
        {          
          name: "John Doe",
          position: "Junior Front-end Developer ",
          location: "Johor",
          phoneNumber: "012-3456789",
          imgUrl: require("../assets/images/hero.png")
        },      
      ],
    };
  }
};
</script>
<style scoped>

.lecturers-container {
  flex-flow: column;
  padding-top: 3em;
  padding-bottom: 3em;
}

.tab-text {
  color: var(--dark);
}

.v-tabs-bar .v-slide-group--is-overflowing .v-tabs-bar--is-mobile:not(.v-tabs-bar--show-arrows):not(.v-slide-group--has-affixes) .v-slide-group__prev
{
  display: none !important;
}

@media screen and (max-width: 960px){
  .cards-container {
    grid-template-areas: 'c c';
  }
}

@media screen and (max-width: 600px){
  .card {
    width: 100%;
  }

  .cards {    
    flex-flow: column;
    justify-content: center;
  }

  .cards-container {
    grid-template-areas: 'c';
  }
}

</style>