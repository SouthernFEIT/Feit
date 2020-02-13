<template>
  <v-footer    
    dark    
    class="footer"
  >
    <v-container>
      <v-row>
        <v-col
          class="px-0"
          cols="12"
          sm="12"
          md="5"
        >
          <div class="pl-4 logo ">
            <h2
              class="white--text"
              @click="backHome"
            >FEIT</h2>
            <span class="paragraph sub-color" style="font-family:feit-semibold !important;">
              Copyright © FEIT
            </span>
          </div>

        </v-col>
        <v-col
          class="d-flex px-0 pr-2"
          cols="12"
          sm="12"
          md="7"
        >
          <v-container
            fluid
            class="px-4 py-0"
          >
            <v-row>
              <v-col
                md="4"
                sm="4"
                cols="12"
                class="pl-2"
                v-for="(category,id) in categories"
                :key="id"
              >
                <h4 class="pb-1">{{ category.main}}</h4>
                <ul
                  class="pl-0"
                  v-for="(sub,index) in category.sub"
                  :key="index"
                >
                  <li>
                    <router-link
                      class="sub-color paragraph"
                      v-if="id === 0"
                      :to="sub.url"
                    > {{sub.name}}</router-link>
                    <a
                      class="paragraph sub-color"
                      v-else
                      :href="sub.url"
                    >
                      {{sub.name}}
                    </a>
                  </li>
                </ul>
              </v-col>
            </v-row>
          </v-container>

        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<script>
  export default {
    name: "Footer",
    data() {
      return {
        categories: [
          {
            main: "Pages",
            sub: [
              { name: "Home", url: "/" },
              { name: "Senior in Work", url: "/seniors" },
              { name: "Lectures & Staff", url: "lectures" }
            ]
          },
          {
            main: "Visit",
            sub: [
              {
                name: "SUC Website",
                url: "https://www.southern.edu.my/home.html"
              }
            ]
          },
          {
            main: "Follow Us",
            sub: [
              {
                name: "DCS Facebook Page",
                url: "https://www.southern.edu.my/home.html"
              },
              {
                name: "EE Facebook Page",
                url: "https://www.southern.edu.my/home.html"
              }
            ]
          }
        ]
      };
    },
    methods: {
      backHome() {
        this.$router.push("/");
      }
    }
  };
</script>
<style scoped>
  footer {
    min-height: 30vh;
    padding: 3em 0;
    background: #0C0F18 !important;
  }
  .sub-color {
    color:#A7A9AF !important;
  }
  li {
    list-style-type: none;
  }
  .normal-font {
    font-family: feit-normal !important
  }
  .logo :hover {
    cursor: pointer;
  }
</style>