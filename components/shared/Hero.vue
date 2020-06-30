<template>
    <section
      class="hero is-black is-medium">
      <div class="hero-body">
        <div
          class="hero-img"
          :style="{ background : `url(${image}) no-repeat center center`}">
        </div>
        <div class="container">
           <h1 class="hero-header">
             <TypeEffect />
          </h1>
          <h1 class="title">
            {{title}}
          </h1>
          <h2 class="subtitle">
            {{subtitle}}
          </h2>
        </div>
      </div>
    </section>  
</template>
<script>
import TypeEffect from './TypeEffect.vue'
  export default {
    components: {
      TypeEffect
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
        default: 'https://images.pexels.com/photos/167259/pexels-photo-167259.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
      },
      promoLink: {
        type: String,
        default: '#'
      },
    }
  }
</script>
<style scoped lang="scss">
  .hero-body {
    position: relative;
  }
  .hero-header {
    font-size: 35px;
    font-weight: bold;
  }
  .hero-img {
    opacity: 0.4;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
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
