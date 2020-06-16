<template>
  <nav class="navbar is-active" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nav-link class="navbar-item nico" to="/">
        <h1 class="brand-title">Nico Tukiainen</h1>
      </nav-link>      
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

    <div :class="{'is-active': isActive}"
         id="navbarBasicExample"
         class="navbar-menu">
      <div class="navbar-start">
        <nav-link to="/" class="navbar-item">
          Home
        </nav-link>
        <nav-link to="/about" class="navbar-item">
          About
        </nav-link>
        <nav-link to="/projects" class="navbar-item">
          Projects
        </nav-link>
        <nav-link to="/blogs" class="navbar-item">
          Blog
        </nav-link>
        <nav-link to="/contact" class="navbar-item">
          Contact
        </nav-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <!-- If Authenticated -->
            <template v-if="isAuth">
              <figure class="image avatar is-48x48 m-r-sm">
                <img class="is-rounded" :src="user.avatar">
              </figure>
              <div class="m-r-sm m-b-sm">
                Welcome {{user.username}}!
              </div>
              <!-- If Admin -->
              <button
                 v-if="isAdmin" class="button is-link is-outlined"
                 @click="() => $router.push('/administrator')">
                Administrator
              </button>
              <a class="button is-primary" @click="logout">
                Logout
              </a>
            </template>
            <template v-else>
              <nav-link to="/register" class="button is-primary">
                Sign up
              </nav-link>
              <nav-link to="/login" class="button is-light">
                Log in
              </nav-link>
            </template>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      isActive: false
    }
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
    }
  }
}
</script>

<style lang="scss" scoped>
  .navbar-brand {
    background-color: #34495e;
  }
  .navbar-menu {
    background-image: linear-gradient(to right, #34495e , #2c3e50);
    // border-bottom: 2px solid #f39c12;
  }
  .brand-title {
    font-size: 35px;
    font-weight: bold;
  }
  .navbar-brand {
    padding-right: 30px;
    // border-bottom: 2px solid #f39c12;

    @media screen and (max-width: 1023px) {
      padding-right: 0px;
    }
  }
  .navbar-item {
    color: #f39c12;
      &:hover {
        background-color: transparent;
        color: #e67e22;
      }
  }
  .navbar-item.is-active.nico {
    border: 0 !important;
    color: #f39c12 !important;
    margin: 0 !important;
  }
  .navbar-item.is-active {
    color: #e67e22;
    font-weight: normal;
    background-color: transparent;
    // margin-top: 4px;
  }
  .burger {
    color: #f39c12;
  }
  .avatar {
    margin-right: 5px;
  }
</style>


