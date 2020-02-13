<template>
  <div>
    <v-card class="cardInside">
      <v-list-item class="listItem" three-line>
        <v-list-item-avatar color="grey">
          <v-img v-bind:src="imgUrl" height="194"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title style="margin-bottom:.5em">
            <b>{{name}}</b>
          </v-list-item-title>
          <v-list-item-subtitle class="px-0 py-0 card__text--normal">{{position}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-list-item-content class="greyColor">
          <v-list-item-title class="listActions">
            <span class="logo-round">
              <img src="../../../svg/location.svg" class="logo" />
            </span>
            <span class="card__text--normal">{{location}}</span>
          </v-list-item-title>
          <v-list-item-title class="listActions">
            <span class="logo-round">
              <img src="../../../svg/phone.svg" class="logo" />
            </span>
            <span class="card__text--normal">{{phoneNumber}}</span>
          </v-list-item-title>
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
  props: ["imgUrl", "name", "position", "location", "phoneNumber"]
};
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
  background: #ffffff;
  box-shadow: 0px 14px 50px rgba(0, 0, 0, 0.1) !important;
}
.greyColor {
  background: #f9f9fd;  
  margin: 0;
  padding: 1em 1.5em;
}
.v-card__actions {
  padding: 0;
}

.listActions {
  padding: .5em 0;
  display: flex;
  flex-flow: row;
  align-items: center;
}

.listItem {
    padding: 1.5em 1.5em;
}

.v-list-item__subtitle {
  overflow-wrap: break-word;
  word-wrap: break-word;
  white-space: unset;
  padding: 5%;
}

.logo-round {
  background: #F1EEF9;  
  border-radius: 25px;
  padding: .5em;
  margin-right: 10px;
}

.logo {
  width: 20px;
  height: 20px;  
  object-fit: cover;
}

.card__text--normal {
  font-size: .8rem;
}

@media screen and (max-width: 960px) {
}
</style> 
