<template>
  <section class="hero is-black is-medium">
    <div class="hero-body">
      <div
        class="hero-img"
        :style="{ background : `url(${image}) no-repeat center center`}">
      </div>
      <div class="container">
        <h1 class="hero-header">
          <TypeEffect />
          <a href="#f-projects" v-smooth-scroll="{ duration: 1000 }" class="width:100px;"><i class="fa fa-angle-down fa-2x" aria-hidden="true"></i></a>
        </h1>
      </div>
    </div>
  </section>  
</template>
<script>
import TypeEffect from './TypeEffect.vue'
import vueSmoothScroll from 'vue2-smooth-scroll'
import Vue from 'vue'
Vue.use(vueSmoothScroll)
  export default {
    components: {
      TypeEffect, vueSmoothScroll
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      subtitle: {
        type: String,
        default: ''
      },
      image: {
        type: String,
        default: 'https://csengineermag.com/wp-content/uploads/2020/04/AdobeStock_317396428.jpeg'
      },
      promoLink: {
        type: String,
        default: '#'
      },
    }
  }
</script>
<style scoped lang="scss">
  .hero {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
  }
  .hero-body {
    position: relative;
  }
  .container {
    justify-content: center;
    margin-top: 20rem;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 100%;
  }
  .hero-header {
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    display: flex;
    flex-direction: column;
    i {
      text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
      color: #f9c61a;
      &:hover {
        color: #f39c12;
        cursor: pointer;
      }      
    }
  }
  .hero-img {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-size: cover !important;
    background-attachment: fixed !important;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;

    &::before {
      content: "";
      background: url(https://images.pexels.com/photos/167259/pexels-photo-167259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) no-repeat center center;
      background-position: fixed;
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: -200px;
      left: 0px;
      opacity: 0.6;
      background: #000;
    }
  }
  .user-avatar {
    display: inline-block;
  }
  .is-black {
    background-color: black;
  }
  .title {
    // font-weight: bold;
    font-size: 30px;
  }
  .subtitle {
    /*font-weight: bold;*/
    font-size: 16px;
  }
  .author-name {
    font-size: 20px;
    font-weight: bold;
  }
</style>
