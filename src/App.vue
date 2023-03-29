<template>
  <v-app
>  
    <v-main>
      
      <Header/>
     
      <router-view>  

    <v-content></v-content>

      </router-view>
      <Carousel/>
      <Banner/>

    </v-main>
      <Newsletter/>

    <Footer />
    
  </v-app>
</template>

<script>
import Banner from './components/Banner.vue'
import Carousel from './components/Home1/Carousel.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Newsletter from './components/Home1/Newsletter.vue'
export default {
  name: 'App',
  components:{
    Footer,
    Header,
    Carousel,
    Newsletter,
    Banner
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
 
#nav {
  padding: 30px;
 
  a {
    font-weight: bold;
    color: #2c3e50;
 
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>