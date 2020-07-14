<template>
  <nav class="navbar is-active" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nav-link class="navbar-item nico" to="/">
        <h1 class="nico-title">Nico Tukiainen</h1>
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
      <div class="navbar-start" @click="isActive = !isActive">
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
          Ramblings
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
            <!-- <template v-else>
              <nav-link to="/register" id="login-signup">
                Sign up
              </nav-link>
              <i class="fa fa-user" aria-hidden="true"/>
              <nav-link to="/login" id="login-signup">
                Log in
              </nav-link>
            </template> -->
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
    background: linear-gradient(to right, #34495e , #2c3e50);
    align-items: center;
  }
  .brand-title {
    font-size: 35px;
    font-weight: bold;
  }
  .navbar-brand {
    padding-right: 30px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 1023px) {
      padding-right: 0px;
    }
  }
  .navbar-item {
    height: 3rem;
    align-content: center;
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
  .nico-title {
    font-size: 35px;
    font-weight: bold;
  }

  .navbar-item.is-active {
    color: #e67e22;
    font-weight: normal;
    background-color: transparent;
  }
  .burger {
    color: #f39c12;
  }
  .avatar {
    margin-right: 5px;
  }
  .fa-user {
    padding-bottom: 8px;
  }
  #login-signup {    
    color: #e67e22;
    cursor: pointer;
    justify-content: center;
    padding-left: 0.75em;
    padding-right: 0.75em;
    text-align: center;
    white-space: nowrap;
  }
  @media screen and (max-width: 1024px) {
    .navbar-menu {
      align-items: center;
    }
    .navbar-item, .is-active {
      text-align: center;
    }
    .buttons {
      display: flex;
      justify-content: center;
    }
  }
</style>


