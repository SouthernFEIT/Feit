<template>
  <div>
    <v-app-bar color="white accent-4">

      <v-container style="align-items:center">
      <v-app-bar-nav-icon
        @click="toggleDrawer"
        v-show="isShow"
        class="black--text"
      ></v-app-bar-nav-icon>
      <v-spacer v-show="isShow"></v-spacer>

      <v-toolbar-title
        class="black--text logo"
        @click="backHome"
      >
        <div class="d-flex align-center">
          <v-img
            width="30px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1280px-Adidas_Logo.svg.png"
          ></v-img>
          <h1 class="headline">FEIT</h1>
        </div>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <div v-show="!isShow">
        <ul
          class="d-flex "
          style="margin-right:10px"
        >
          <li
            class="nav-link-space"
            v-for="(item,id) in nav"
            :key="id"
          >
            <router-link
              class="nav-link-color"
              :to="item.url"
            >{{ item.name}}</router-link>
          </li>

        </ul>
      </div>
      
      </v-container>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      :disable-resize-watcher="true"
      style="width:80%"
    >
      <v-container class="pb-0">
        <v-row class="align-center">
          <v-col
            cols="2"
            class="mt-2"
          >
            <img
              @click="backHome"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/1280px-Adidas_Logo.svg.png"
              alt=""
            >
          </v-col>
          <v-col
            cols="10"
            class="pl-0 "
          >
            <h4 class="display-1 font-weight-regular">FEIT</h4>
          </v-col>
        </v-row>
      </v-container>
      <ul style="margin-top:20px">
        <li
          class="mb-4"
          v-for="(item,id) in nav"
          :key="id"
        >
          <router-link
            class="nav-link-color"
            style="font-size:16px"
            :to="item.url"
          >{{ item.name}}</router-link>
        </li>

      </ul>

    </v-navigation-drawer>

  </div>
</template>
<script>
  export default {
    name: "Nav",
    data() {
      return {
        isShow: null,
        drawer: false,
        logoRatio: 4,
        nav: [
          { name: "Home", url: "/" },
          { name: "Senior in Work", url: "/seniors" },
          { name: "Lectures & Staff", url: "/lecturer" }
        ]
      };
    },
    methods: {
      checkWidth() {
        if (screen.width < 600) {
          this.isShow = true;
          this.logoRatio = 2;
        } else {
          this.isShow = false;
          this.logoRatio = 4;
        }
      },
      toggleDrawer() {
        this.drawer = !this.drawer;
      },
      backHome() {
        this.$router.push("/");
      }
    },
    mounted() {
      this.$nextTick(function() {
        window.addEventListener("resize", this.checkWidth);
        this.checkWidth();
      });
      //window.addEventListener("resize", this.checkWidth);
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.checkWidth);
    }
  };
</script>
<style scoped>
img {
  width: 100% !important;
  height: 100%;
}
 li {
    list-style-type: none;
  }
  .nav-link-color {
    color:#A7A9AF !important;
    font-size: 14px;
  }
  .nav-link-space {
    margin-left: 35px;
    text-align: right
  }
  .logo :hover {
    cursor: pointer;
  }
</style>