<template>
  <nav class="navbar is-transparent change_color" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <div class="wrapper" style="padding:1rem 1rem;margin:auto;">
          <div class="card" style="height:50px;">
            <h1 class="nico-title enclosed">Nico Tukiainen</h1>
          </div>
        </div>
      </a>
      <a @click="isActive = !isActive"
          :class="{'is-active': isActive}"
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': isActive}">
      <div class="navbar-center">
        <a class="navbar-item" href="/">
          <div class="menu-item-container">
            <span class="is-icon"><i class="fa fa-home"/></span><a>Home</a>
          </div>
        </a>
        <a class="navbar-item" href="/about">
          <div class="menu-item-container">
            <span class="is-icon"><i class="fa fa-address-card"/></span><a>About</a>
          </div>
        </a>
        <a class="navbar-item" href="/projects">
          <div class="menu-item-container">
            <span class="is-icon"><i class="fa fa-project-diagram"/></span><a>Projects</a>
          </div>
        </a>
        <a class="navbar-item" href="/blogs">
          <div class="menu-item-container">
            <span class="is-icon"><i class="fa fa-umbrella-beach"/></span><a>Ramblings</a>
          </div>
        </a>
        <a class="navbar-item" href="/contact">
          <div class="menu-item-container">
            <span class="is-icon"><i class="fa fa-envelope"/></span><a>Contact</a>
          </div>
        </a>

        <template v-if="isAuth">
          <a class="navbar-item">
            <figure class="image avatar is-48x48 m-r-sm">
              <img class="is-rounded" :src="user.avatar">
            </figure>
            <div class="menu-item-container">
              Welcome {{user.username}}!
            </div>
          </a>
          <a v-if="isAdmin" class="navbar-item" @click="() => $router.push('/administrator')">
            <div class="menu-item-container">
              Administrator
            </div>
          </a>
          <a class="navbar-item" @click="logout">
            <div class="menu-item-container">
              Log out
            </div>
          </a>
        </template>
        
      </div>
    </div>
  </nav> 
</template>
<script>
document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});
import { mapGetters } from 'vuex'
import vueSmoothScroll from 'vue2-smooth-scroll'
import Vue from 'vue'
Vue.use(vueSmoothScroll)
export default {
  data() {
    return {
      isActive: false,
      scrollPosition: null
    }
  },
  components: {
    vueSmoothScroll
  },
  computed: {
    ...mapGetters({
      'user': 'auth/authUser',
      'isAuth': 'auth/isAuthenticated',
      'isAdmin': 'auth/isAdmin'
    })
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout').then(() => this.$router.push('/'))
    },
    updateScroll() {
       this.scrollPosition = window.scrollY
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap');
// @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');  
.navbar {
  position: fixed;
  width: 100%;
  background-color: transparent;
  min-height: 6rem;

  .burger {
    color: #87dbfc;
    background: rgba(102, 112, 114, 0.3);
    border-radius: 50% 0 0 50%;
    font-weight: 800;
    height: 7rem;

    span {
      width: 20px;
    }
  }
}
.navbar-item {
  .nico-title {
    color: #f9c61a;
    font-family: 'Shadows Into Light', cursive;
    font-size: 30px;
    letter-spacing: 2px;
    font-weight: bold;
    text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;
  }
}
.navbar-menu .is-active {
  border-bottom: 1px solid black;
}
.transition {
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
}
.menu-item-container {
  display: flex;
  text-align: center;
  margin-top: 0.2rem;
  color: #f39c12;
  font-family: 'Shadows Into Light', cursive;
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: bold;
  text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;

  a {
    color: #f39c12;
    text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;
    padding-left: 0.75rem;
  }

  &:hover {
    text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;
    color: rgb(229, 244, 248);

    a {
      text-shadow: 0 0 2px black, 0 0 2px black, 0 0 2px black, 0 0 2px black;
      color: rgb(229, 244, 248);
    }

    .is-icon {
      transform-origin: center;
      will-change: transform;
      transform: scale(1.2);
      transition: 0.3s;
    }
  }
}
.card {
  border-radius: 0;
  grid-area: 1 / 1;
  transform: translateX(10px) rotateY(25deg) rotateX(10deg);
  background: rgba(243, 156, 18, 0.88);
  color: #000;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 0.25rem !important;
}
.card .enclosed {
  background: #000;
  color: rgba(249, 198, 26, 1);
  padding: 0 0.5rem;
  display: inline-block;
  transform-origin: right center;
}
.wrapper {
  position: relative;
  perspective: 20em;
  display: grid;
  transform-style: preserve-3d;
}
.wrapper:before {
  border-radius: 5px;
  --bw: 2px;
  grid-area: 1 / 1;
  content: '';
  backface-visibility: hidden;
  height: 100%;
  width: 100%;
  margin-top: calc(-1 * var(--bw));
  margin-left: calc(-1 * var(--bw));
  background: transparent;
  transform: translateX(-16px) rotateY(-30deg) rotateX(15deg) scale(1.03);
  pointer-events: none;
  border: var(--bw) solid rgba(249, 198, 26, 1);
  box-sizing: content-box;
}

.wrapper:hover > div,
.wrapper:hover:before {
  transform: none;
}

.wrapper > div,
.wrapper:before {
  will-change: transform;
  transition: .3s transform cubic-bezier(.25,.46,.45,1);
}
@media screen and (min-width: 1024px){
  .navbar {
    position: fixed;
    width: 100%;
    background-color: transparent;
  }
  .change_color {
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background: linear-gradient(to top, #0000008c 5%, #1f1f1fd2 100%);
  }
  .navbar-center{
    display:flex;
    justify-content: stretch;
    align-items: stretch;
    flex-grow: 1;
    flex-shrink: 0;
    flex-direction: row;
  }
  .navbar-link,.navbar-item{
    align-items: center;
    display: flex;
    flex-basis: auto;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: center;
  }
    .navbar-dropdown .navbar-item{
      justify-content: center;
    }
}
@media screen and (min-width: 1024px) {
  .is-icon {
    position: relative;
    display: block;
    margin: 0 auto;
    width: 25px;
    margin-bottom: .25em;
    transform: rotate(0);
  }
}
@media screen and (min-width: 100px) and (max-width: 1023px){
  .navbar {
    min-height: 0;
    max-height: 5rem;
  }
  .navbar-brand {
    min-height: 2.5rem;
    align-items: auto;
  }
  .navbar-item {
    padding: 0;
  }
  .burger {
    max-height: 5rem;
  }
  .navbar-menu {
    background: rgba(102, 112, 114, 0.8);

    .navbar-item {
      padding: 0;
      
      &:hover {
        background: transparent;
      }
    }
  }
}
</style>


