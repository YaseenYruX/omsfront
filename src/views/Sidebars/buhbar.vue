<template>
    <div>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
       <!-- <v-img
          :src="require('./assets/logo.png')"
        /> -->
      </div>
      <v-spacer></v-spacer>

      <v-btn
        :to="{name:'auth.purchaser.dashboard'}"
        text
        exact
      >
        <span class="mr-2">Dashboard</span>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <v-btn
        @click="logoutauthparent"
        text
      >
        <span class="mr-2">Logout</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-menu
        bottom
        left
        transition="slide-y-transition"
        open-on-hover
        :close-on-content-click="false"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            dark
            icon
            offset-y
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-anchor</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item link :to="{name:'auth.purchaser.quotes.unanswered'}">
            <v-list-item-title><v-icon>mdi-plus</v-icon>UnAsnwered Quotes</v-list-item-title>
          </v-list-item>
       <!--    <v-list-item link :to="{name:'auth.sales.quotes.list'}">
            <v-list-item-title><v-icon>mdi-plus</v-icon>Answered Quotes</v-list-item-title>
          </v-list-item> -->
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      permanent
      absolute
      mini-variant
      class=""
    >
    <v-system-bar></v-system-bar>
    <v-system-bar></v-system-bar>
    <v-system-bar></v-system-bar>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>{{this.loggedindetail.name}}</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>
      <v-list
        dense
      >
      <v-list-item class="pa-0" link :to="{name:'auth.buh.quotes.listing'}">
        <v-menu 
        open-on-hover
        offset-x
        style="max-width: 600px"
        :close-on-content-click="false"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-list-item-icon color="primary"
                  dark
                  class=" d-block"
                  style="width: 100%;text-align: center;"
                  v-bind="attrs"
                  v-on="on">
              <v-icon v-text="'mdi-shape-circle-plus'"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Quotes</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list>
            <v-list-item exact link :to="{name:'auth.buh.quotes.listing'}">
              <v-list-item-title>Quotes Listing</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item>
      <!-- <v-list-item class="pa-0" link :to="{name:'auth.sales.quotes.list'}">
        <v-menu 
        open-on-hover
        offset-x
        style="max-width: 600px"
        :close-on-content-click="false"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-list-item-icon color="primary"
                  dark
                  class=" d-block"
                  style="width: 100%;text-align: center;"
                  v-bind="attrs"
                  v-on="on">
              <v-icon v-text="'mdi-format-quote-close-outline'"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Quote</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list>
            <v-list-item exact link :to="{name:'auth.sales.quotes.add',params:{id:0}}">
              <v-list-item-title>Add Quote</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-list-item> -->
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: 'buhbar',
  components: {
    
  },
  props:{
    loggedindetail:Object,
  },
  data: () => ({
    drawer:false,
    mini: true,
  }),
  methods:{
    logoutauthparent(){
      this.$emit('logoutauthparent');
    }
  },
  mounted(){
 
  }
};
</script>
