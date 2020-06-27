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
        default: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
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
