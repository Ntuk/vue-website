<template>
    <div style="width:100%;margin-bottom: 4rem;">
      <!-- <p class="game-title">World of Warcraft</p> -->
      <div style="text-align:center">
        <img src="https://worldofwarcraft.com/static/components/Logo/Logo-wow-sitenav.596840db77b4d485a44d65e897e3de57.png" class="gamelogo"/>
      </div>
      <div style="margin-bottom: 1.5rem;">A list of World of Warcraft characters in my account, accumulated over 12 years of playing. My /played time in total is about 8200 hours, which is roughly 324 days. You can find more info from Armory links provided for each character.</div>
      <div class="columns table-divs">
        <!-- <div class="column headers is-1"><p>Image</p></div> -->
        <div class="column headers is-2"><p>Name</p></div>
        <div class="column headers is-2"><p>Race</p></div>
        <div class="column headers is-1"><p>Spec</p></div>
        <div class="column headers is-1 has-text-centered"><p>Class</p></div>
        <div class="column headers is-1 has-text-centered"><p>Level</p></div>
        <div class="column headers is-1 has-text-centered"><p>Itemlevel</p></div>
        <div class="column headers is-1 has-text-centered"><p>Faction</p></div>
        <div class="column headers is-1"><p>Realm</p></div>
        <div class="column headers is-1"><p>Guild</p></div>
        <div class="column headers is-1"><p>Armory</p></div>
      </div>
      <div :key="character.id" v-for="character in orderedCharacterResults">
        <div class="columns table-divs">
          <!-- <div class="game-data column is-1" >
            <img :src="character.image" />
            <p>{{character.image}}</p>
          </div> -->
          <div class="game-data column is-2">
            <p><b>{{ character.name }}</b></p>
          </div>
          <div class="game-data column is-2">
            <p>{{ character.race }}</p>
          </div>
          <div class="game-data column is-1">
            <p>{{ character.activeSpec }}</p>
          </div>
          <div class="game-data column is-1 has-text-centered">
            <img v-if="character.class === 'Druid'" src="https://render-eu.worldofwarcraft.com/icons/56/classicon_druid.jpg" class="class-logo"/>
            <img v-if="character.class === 'Monk'" src="https://render-eu.worldofwarcraft.com/icons/56/classicon_monk.jpg" class="class-logo"/>
            <img v-if="character.class === 'Shaman'" src="https://render-eu.worldofwarcraft.com/icons/56/classicon_shaman.jpg" class="class-logo"/>
            <img v-if="character.class === 'Warlock'" src="https://render-eu.worldofwarcraft.com/icons/56/classicon_warlock.jpg" class="class-logo"/>
            <img v-if="character.class === 'Mage'" src="https://render-eu.worldofwarcraft.com/icons/56/classicon_mage.jpg" class="class-logo"/>
            <img v-if="character.class === 'Warrior'" src="https://render-eu.worldofwarcraft.com/icons/56/classicon_warrior.jpg" class="class-logo"/>
            <img v-if="character.class === 'Hunter'" src="https://render-eu.worldofwarcraft.com/icons/56/classicon_hunter.jpg" class="class-logo"/>
            <img v-if="character.class === 'Death Knight'" src="https://render-eu.worldofwarcraft.com/icons/56/classicon_deathknight.jpg" class="class-logo"/>
            <img v-if="character.class === 'Priest'" src="https://render-eu.worldofwarcraft.com/icons/56/classicon_priest.jpg" class="class-logo"/>
            <img v-if="character.class === 'Demon Hunter'" src="https://render-eu.worldofwarcraft.com/icons/56/classicon_demonhunter.jpg" class="class-logo"/>
            <img v-if="character.class === 'Paladin'" src="https://render-eu.worldofwarcraft.com/icons/56/classicon_paladin.jpg" class="class-logo"/>
            <img v-if="character.class === 'Rogue'" src="https://render-eu.worldofwarcraft.com/icons/56/classicon_rogue.jpg" class="class-logo"/>
          </div>
          <div class="game-data column is-1 has-text-centered">
          <p>{{ character.level }}</p>
          </div>
          <div class="game-data column is-1 has-text-centered">
          <p>{{ character.ilvl }}</p>
          </div>
          <div class="game-data column is-1 has-text-centered">
            <img v-if="character.faction === 'Horde'" src="https://res.cloudinary.com/dezjnxeig/image/upload/v1600948705/legacy/horde_s2exoa.png" class="faction-logo"/>
            <img v-else src="https://res.cloudinary.com/dezjnxeig/image/upload/v1600948702/legacy/alliance_cjye9k.png" class="faction-logo"/>
          </div>
          <div class="game-data column is-1">
            <p>{{ character.realm }}</p>
          </div>
          <div class="game-data column is-1">
            <p>{{ character.guild }}</p>
          </div>
          <div class="game-data column is-1">
            <a target="_blank" :href="'https://worldofwarcraft.com/en-gb/character/eu/' + character.realmSlug + '/' + character.name">Link</a>
          </div>
        </div>
        <br/>
      </div>
    </div>
  <!-- </div> -->
</template>
<script>
import _ from 'lodash';
const blizzard = require('blizzard.js').initialize({
  key: process.env.BLIZZARD_CLIENT_ID,
  secret: process.env.BLIZZARD_CLIENT_SECRET,
  origin: 'eu',
  locale: 'en_GB',
});
export default {
  data() {
    return {
      token: '',
      characterResults: [],
      characterResultz: [],
      charactersAndRealms: [],
      level: 0,
    };
  },
  computed: {
    orderedCharacterResults: function() {
      return _.orderBy(this.characterResultz, ['ilvl'], ['desc'])
    }
  },
  methods: {
    async fetchFreshToken () {
      try {
        await blizzard.getApplicationToken()
          .then(response => {
            this.token = response.data.access_token;
          });
        this.getProfileData();
      } catch (err) {
        console.error(err);
      }
    },
    getProfileData() {
      const token = this.token;
      const apiUrl=`https://eu.api.blizzard.com/profile/user/wow?namespace=profile-eu&locale=en_GB&access_token=${token}`;      
      return this.$axios.$get(apiUrl)
      .then(response => {
        this.characterResults = response.wow_accounts[0].characters.map(c => c);
      })
    },
    async getCharactersAndRealms() {
      await this.getProfileData()
      .then(res => {
      let characterName = this.characterResults.map(r => r.name);
      let realmName = this.characterResults.map(r => r.realm.name);
        for (let i=0 ; i < characterName.length; i++) {
          this.charactersAndRealms.push({
            characterName: characterName[i].toLowerCase(),
            realmName: realmName[i].replace("'", "").toLowerCase()
          });
        }
      })
    },
    async getAllCharacters() {
      await this.getCharactersAndRealms()
      .then(() => {
        this.charactersAndRealms.forEach(each => {
          this.$axios.$get(`https://eu.api.blizzard.com/profile/wow/character/${each.realmName}/${each.characterName}?namespace=profile-eu&locale=en_GB&access_token=USfmDJZAvPWKvUR6fUG2jXuCacFs8v0WJI`)         
          .then(res => {
            this.characterResultz.push({
              id: res.id,
              name: res.name,
              race: res.race.name,
              class: res.character_class.name,
              activeSpec: res.active_spec.name,
              level: res.level,
              faction: res.faction.name,
              realm: res.realm.name,
              realmSlug: res.realm.slug,
              ilvl: res.average_item_level,
              guild: res.guild.name,
              image: ''
            })
          })
        })
      })
      // .then(() => {
      //   this.charactersAndRealms.forEach(each => {
      //     this.$axios.$get(`https://eu.api.blizzard.com/profile/wow/character/${each.realmName}/${each.characterName}/character-media?namespace=profile-eu&locale=en_GB&access_token=USfmDJZAvPWKvUR6fUG2jXuCacFs8v0WJI`)
      //     .then(res => {
      //       console.log(res)
      //       this.characterResultz.forEach(item => {
      //         item.image = res.avatar_url,
      //         item.iidee = res.character.id
      //       })
      //     })
      //   })
      // })
      // console.log('*******', this.characterResultz)
    },
  },
  mounted() {
    this.fetchFreshToken();
    this.getAllCharacters();
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
    height: 125px;
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