<template>
    <div style="width:100%;margin-bottom: 6rem;">
      <!-- <p class="game-title">Overwatch</p> -->
      <div style="text-align:center">
        <img src="https://logos-world.net/wp-content/uploads/2020/05/Overwatch-Logo-700x394.png" class="gamelogo"/>
      </div>
      <div style="margin-bottom: 1.5rem;">Some Overwatch data from latest season I have played in. My time with Overwatch is very seasonal, sometimes I play more and sometimes I play less. At the time of writing this (autumn 2020) it has been less.
        I have been hovering between ranks Diamond (<img src="https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/2f/Badge_5_Diamond.png" class="rank-icon"/>) and Master (<img src="https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f0/Badge_6_Master.png" class="rank-icon"/>) @ +-3500 for many seasons. </div>
      <div class="columns table-divs">
        <div class="column headers is-3 has-text-centered"><p>Total medals</p></div>
        <div class="column headers is-2 has-text-centered"><p>Gold</p></div>
        <div class="column headers is-2 has-text-centered"><p>Silver</p></div>
        <div class="column headers is-2 has-text-centered"><p>Bronze</p></div>
        <div class="column headers is-3 has-text-centered"><p>Cards</p></div>
      </div>
      <div class="columns table-divs" style="margin-bottom: 3rem;">
        <div class="game-data column is-3 has-text-centered">
          <p>{{ awards.medals }}</p>
        </div>
        <div class="game-data column is-2 has-text-centered">
          <p>{{ awards.medalsGold }}</p>
        </div>
        <div class="game-data column is-2 has-text-centered">
          <p>{{ awards.medalsSilver }}</p>
        </div>
        <div class="game-data column is-2 has-text-centered">
          <p>{{ awards.medalsBronze }}</p>
        </div>
        <div class="game-data column is-3 has-text-centered">
          <p>{{ awards.cards }}</p>
        </div>
      </div>
      
      <div class="columns table-divs">
        <div class="column headers is-2 has-text-centered"><p>Hero</p></div>
        <div class="column headers is-2 has-text-centered"><p>Games won</p></div>
        <div class="column headers is-2 has-text-centered"><p>Win %</p></div>
        <div class="column headers is-2 has-text-centered"><p>Objective kills</p></div>
        <div class="column headers is-2 has-text-centered"><p>Elims per life</p></div>
        <div class="column headers is-2 has-text-centered"><p>Time played</p></div>
      </div>
      <div :key="hero.timePlayed" v-for="(hero, indexName) in topheroes" style="height:3rem;margin-bottom:1rem;display:flex;flex-direction:column;justify-content:center;">
        <div class="columns table-divs">
          <div class="game-data column is-2">
            <div class="img-name">
              <img :src="'https://d1u1mce87gyfbn.cloudfront.net/hero/' + indexName.toLowerCase() + '/hero-select-portrait.png'"/>
              <p><b>{{ indexName.charAt(0).toUpperCase() + indexName.slice(1) }}</b></p>
            </div>
          </div>
          <div class="game-data column is-2 has-text-centered">
            <p><b>{{ hero.gamesWon }}</b></p>
          </div>
          <div class="game-data column is-2 has-text-centered">
            <p>{{ hero.winPercentage }}</p>
          </div>
          <div class="game-data column is-2 has-text-centered">
          <p>{{ hero.objectiveKills }}</p>
          </div>
          <div class="game-data column is-2 has-text-centered">
          <p>{{ hero.eliminationsPerLife }}</p>
          </div>
          <div class="game-data column is-2 has-text-centered">
          <p>{{ hero.timePlayed }}</p>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import _ from 'lodash';    
export default {
  data() {
    return {
      topheroes: [],
      awards: [],
      allheroes: []
    };
  },
  methods: {
    getProfileData() {
      const apiUrl=`https://ow-api.com/v1/stats/pc/eu/Nightfrost-2688/complete`;
      return this.$axios.$get(apiUrl)
      .then(res => {
        // console.log('**res: ', res.competitiveStats.careerStats);
        this.topheroes = res.competitiveStats.topHeroes;
        this.allheroes = res.competitiveStats.careerStats;
        this.awards = res.competitiveStats.awards;
      })
    },    
  },
  mounted() {
    this.getProfileData();
  },
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
  .rank-icon {
    height: 2rem;
    vertical-align: top;
  }
  .img-name {
    display: flex;

    img {
      height: 3rem;
      padding-right: 20px;
      border-radius: 50%;
    }
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