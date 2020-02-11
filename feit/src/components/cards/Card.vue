<template>
    <div>

            <v-card  class="cardInside" >
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

        <!-- v-if -->
      </div>
      <!-- cards -->

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
  /* max-width: 300px; */
  /* max-height: 300px; */
  background: #FFFFFF;
  box-shadow: 0px 14px 50px rgba(0, 0, 0, 0.1) !important;
}
.greyColor {
  background: #f9f9fd;
  margin: 0;
}
.v-card__actions {
  padding: 0;
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

@media screen and (max-width: 960px) {
    
}
</style> 
