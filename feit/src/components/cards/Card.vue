<template>
    <div>
<<<<<<< HEAD
        <div class="center">
      <div class="cards">
            <v-card max-width="300" class="cardInside" max-height="300">
=======

            <v-card  class="cardInside" >
>>>>>>> 2c40fe24e109725e6b135c36d5002444dd55ef81
              <v-list-item class="listItem" three-line>
                <v-list-item-avatar color="grey">
                  <v-img v-bind:src="imgUrl" height="194"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title style="margin-bottom:3%">
                    <b>{{name}}</b>
                  </v-list-item-title>
                  <v-list-item-subtitle style="font-size:12px;padding:0;">{{position}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-card-actions>
                <v-list-item-content class="greyColor">
                  <v-list-item-title class="headline listActions">
                    <v-btn text color="deep-purple accent-4">
                      <v-avatar size="36" color="#F1EEF9">
                        <img src="../../../svg/location.svg" style="width:18px" />
                      </v-avatar>
                      <span class="black--text">{{location}}</span>
                    </v-btn>
                  </v-list-item-title>
                  <v-list-item-subtitle class="listActions">
                    <v-btn text color="deep-purple accent-4">
                      <v-avatar size="36" color="#F1EEF9">
                        <img src="../../../svg/phone.svg" style="width:18px" />
                      </v-avatar>
                      <span class="black--text">{{phoneNumber}}</span>
                    </v-btn>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-card-actions>
            </v-card>
<<<<<<< HEAD
        
        <!-- v-if -->
      </div>
      <!-- cards -->
 
    </div>

    </div>
=======

        <!-- v-if -->
      </div>
      <!-- cards -->

>>>>>>> 2c40fe24e109725e6b135c36d5002444dd55ef81
</template>

<script>
export default {
    name: "Card",
    props: ["imgUrl", "name", "position", "location","phoneNumber"]
}
</script>

<style  scoped>
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
<<<<<<< HEAD
=======
  max-width: 300px;
  max-height: 300px;
>>>>>>> 2c40fe24e109725e6b135c36d5002444dd55ef81
}
.greyColor {
  background: #f9f9fd;
  margin: 0;
}
.v-card__actions {
  padding: 0;
}
<<<<<<< HEAD

=======
>>>>>>> 2c40fe24e109725e6b135c36d5002444dd55ef81
.listItem {
  padding: 7%;
}
.listActions {
  padding: 4%;
}
<<<<<<< HEAD

=======
>>>>>>> 2c40fe24e109725e6b135c36d5002444dd55ef81
.v-list-item__subtitle {
  overflow-wrap: break-word;
  word-wrap: break-word;
  white-space: unset;
  padding: 5%;
}
<<<<<<< HEAD
</style>
=======

@media screen and (max-width: 960px) {
    .cardInside{
        margin-bottom: 10%;
        max-width: 960px;
        width:100%;
    }

    
}
</style> 
>>>>>>> 2c40fe24e109725e6b135c36d5002444dd55ef81
