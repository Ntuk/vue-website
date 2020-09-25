<template>
    <div style="width:100%;margin-bottom: 4rem;">
      <!-- <p class="game-title">Diablo III</p> -->
      <div style="text-align:center">
        <img src="https://bnetproduct-a.akamaihd.net//fff/155c60a0322ae5402f8cbae3c4108297-diablo-III-base-1000x700.png" class="gamelogo"/>
      </div>
      <br/>
      <br/>
      <div style="margin-bottom: 1.5rem;margin-top: -3rem;">List of Diablo III heroes in my account, accumulated since the game launched in 2012. It's been quite quiet lately though.</div>
      <div class="columns table-divs">
        <div class="column headers is-2"><p>Name</p></div>
        <div class="column headers is-2"><p>Class</p></div>
        <div class="column headers is-2"><p>Paragon level</p></div>
        <div class="column headers is-2"><p>Elites killed</p></div>
        <div class="column headers is-2"><p>Guild</p></div>
        <div class="column headers is-2"><p>Armory</p></div>
      </div>
      <div :key="result.id" v-for="result in orderedResults" style="height:3rem;">
        <div class="columns table-divs">
          <div class="game-data column is-2">
            <p><b>{{ result.name }}</b></p>
          </div>
          <div class="game-data column is-2">
            <p>{{ result.class }}</p>
          </div>
          <div class="game-data column is-2">
          <p>{{ result.paragonLevel }}</p>
          </div>
          <div class="game-data column is-2">
          <p>{{ result.kills.elites }}</p>
          </div>
          <div class="game-data column is-2">
            <p>{{ wideResults.guildName }}</p>
          </div>
          <div class="game-data column is-1">
            <a target="_blank" :href="'https://eu.diablo3.com/en/profile/Nightfrost-2688/hero/' + result.id">Link</a>
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
      wideResults: []
    };
  },
  computed: {
    orderedResults: function() {
      return _.orderBy(this.results, ['kills.elites'], ['desc'])
    }
  },
  methods: {
    getProfileData() {
      const token = "USIITjQWPDiPnu6c0AEENO1rQyldXOFHgq";
      const apiUrl=`https://eu.api.blizzard.com/d3/profile/Nightfrost%232688/?locale=en_GB&access_token=${token}`;      
      return this.$axios.$get(apiUrl)
      .then(res => {
        this.wideResults = res;
        this.results = res.heroes.map(c => c);
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