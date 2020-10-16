<template>
    <div style="width:100%;margin-bottom: 4rem;">
      <!-- <p class="game-title">Diablo III</p> -->
      <div style="text-align:center">
        <img src="https://quakefans.net/wp-content/uploads/2019/07/diabotical-logo-png-transparent.png" class="gamelogo"/>
      </div>
      <br/>
      <br/>
      <div style="margin-bottom: 1.5rem;margin-top: -3rem;">Some stats from my account in an AFPS game called Diabotical, released in August 2020.</div>
      <p style="margin-bottom:1rem;">All modes: </p>
      <div class="columns table-divs">
        <div class="column headers is-2"><p>Matches played</p></div>
        <div class="column headers is-2"><p>Won</p></div>
        <div class="column headers is-2"><p>Lost</p></div>
        <div class="column headers is-2"><p>Frags</p></div>
        <div class="column headers is-2"><p>Assists</p></div>
        <div class="column headers is-2"><p>Deaths</p></div>
      </div>
      <div style="height:3rem;">
        <div class="columns table-divs">
          <div class="game-data column is-2">
            <p>{{ results.match_count }}</p>
          </div>
          <div class="game-data column is-2">
            <p>{{ results.match_won }}</p>
          </div>
          <div class="game-data column is-2">
            <p>{{ results.match_lost }}</p>
          </div>
          <div class="game-data column is-2">
            <p>{{ results.frags }}</p>
          </div>
          <div class="game-data column is-2">
            <p>{{ results.assists }}</p>
          </div>
          <div class="game-data column is-2">
            <p>{{ results.deaths }}</p>
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>
<script>
import _ from 'lodash';
export default {
  data() {
    return {
      results: [],
    };
  },
  computed: {
    orderedResults: function() {
      return _.orderBy(this.results, ['kills.elites'], ['desc'])
    }
  },
  methods: {
    getProfileData() {
      const apiUrl=`https://www.diabotical.com/api/v0/users/acd299971bdb4fef90ab5fdb52450262/mainstats?for=alltime`;      
      return this.$axios.$get(apiUrl)
      .then(res => {
        console.log(res);
        this.results = res[0];
      })
    },
  },
  mounted() {
    this.getProfileData();
  }
}
</script>

<style scoped lang="scss">
  .game-title {
    background: #000;
    color: #f9c61a;
    padding: 0 0.5rem;
    display: inline-block;
    transform-origin: right center;    
    font-family: 'Shadows Into Light', cursive;
    font-size: 30px;
    letter-spacing: 2px;
    font-weight: bold;
  }
  .gamelogo {
    height: 150px;
  }
  .game-data {
    p {
      font-size: 14px;
    }
    a {
      color: rgb(19, 19, 19);
      font-family: 'Shadows Into Light', cursive;
      font-size: 14px;
      letter-spacing: 1px;
      font-weight: bold;

      &:hover {
        color: #12e4f3;
        text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
      }
    }
  }
  .headers {
    background: rgb(22, 22, 22);
    color: #f9c61a;
    font-family: 'Shadows Into Light', cursive;
    font-size: 15px;
    letter-spacing: 1px;
    font-weight: bold;
  }
  .game-data {
    height: 1.6rem;

    .highlight {
      text-shadow: 0 0 2px #37f312, 0 0 2px #37f312, 0 0 2px #37f312, 0 0 2px #37f312;
    }
  }
  .faction-logo {
    height: 40px;
    width: 40px;
  }
  .class-logo {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: 1px solid rgb(19, 19, 19);
  }
  .table-divs {
    justify-content: start;    
  }
</style>