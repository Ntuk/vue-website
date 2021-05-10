<template>
    <div style="width:100%;margin-bottom: 4rem;">
      <div style="text-align:center">
        <img src="https://worldofwarcraft.com/static/components/Logo/Logo-wow-sitenav.596840db77b4d485a44d65e897e3de57.png" class="gamelogo"/>
      </div>

      <div :key="character.id" v-for="character in orderedCharacters" class="column headers character-container">
        <div class="character-info">
          <div class="column is-2"><img :src="character.img" class="avatar" /></div>
          <div class="column is-2">
            <div class="column is-12" style="color:#f9981a;font-size:18px;height:50%;">{{ character.name }}</div>
            <div class="column-is-12" style="height:50%;padding-top:6px;"><p>Equipped ilvl:</p> {{ character.ilvl }}</div>
          </div>
          <div class="column is-3">
            <div class="row is-12" style="height:50%;">{{ character.race }}</div>
            <div class="column is-12" style="height:50%;padding-top:6px;"><p>Realm:</p> {{ character.realm }}</div>
          </div>
          <div class="column is-3">
            <div class="column is-12" style="height:50%;">{{ character.spec }} {{ character.class }}</div>
            <div class="column is-12" style="height:50%;padding-top:6px;"><p>Covenant:</p> {{ character.covenant }} ({{ character.renown }})</div>
          </div>
          <div class="column is-2">
            <div class="column is-12" style="height:50%;text-align:center;">
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
            <div class="column is-12" style="height:50%;padding-top:6px;"><p>Armory:</p> <a target="_blank" :href="'https://worldofwarcraft.com/en-gb/character/eu/alakir/'+character.name">Link</a></div>
          </div>
        </div>
        <div style="color:lightblue;text-align:center;">Shadowlands raid progression</div>
        <div class="raid-container column is-3" style="margin-left: 12px;">
          <div style="font-weight:bold;">Castle Nathria</div>
          <div class="column" style="display:flex;padding:0;">
            <div style="width:50%;">Normal:</div>
            <div style="width:50%;">{{ character.nathria_normal }} / {{ character.nathria_totalBosses }}</div>
          </div>
          <div class="column" style="display:flex;padding:0;">
            <div style="width:50%;">Heroic:</div>
            <div style="width:50%;">{{ character.nathria_heroic }} / {{ character.nathria_totalBosses }}</div>
          </div>
        </div>
        <div>
          <div style="color:lightblue;text-align:center;">Shadowlands Mythic+ (<span v-for="character in character.mythic_plus_scores_by_season" :key="character.id" style="display: inline-flex;color:#f9981a;">{{ character.all }}</span>)</div>
        </div>
        <div class="Mplus_headers">
          <div class="column is-3" style="color:lightblue;">Dungeon</div>
          <div class="column is-1" style="color:lightblue;text-align:center;">Keystone</div>
          <div class="column is-2" style="color:lightblue;text-align:center;">Time</div>
          <div class="column is-3" style="color:lightblue;text-align:center;">Weekly Affixes</div>
          <div class="column is-1" style="color:lightblue;text-align:center;">Score</div>
        </div>
        <div v-for="dungeon in orderedMythicDungeons(character.mythic_plus_best_runs)" :key="dungeon.id"  class="Mplus_dungeon">
          <div class="column is-3">{{ dungeon.dungeon }}</div>
          <div class="column is-1" style="text-align:center;">{{ dungeon.mythic_level }}</div>
          <div class="column is-2" style="text-align:center;">{{ millisToMinutesAndSeconds(dungeon.clear_time_ms) }}</div>
          <div  class="column is-3" style="text-align:center;"  v-tooltip="{ content: '<b>' + dungeon.affixes.map(d => d.name) + '</b><br/> ' + dungeon.affixes.map(d => d.description)}">
            <img v-if="dungeon.affixes.map(af => af.name).includes('Tyrannical')" src="https://cdnassets.raider.io/images/wow/icons/medium/achievement_boss_archaedas.jpg" class="affix"/>
            <img v-if="dungeon.affixes.map(af => af.name).includes('Fortified')" src="https://cdnassets.raider.io/images/wow/icons/medium/ability_toughness.jpg" class="affix"/>
            <img v-if="dungeon.affixes.map(af => af.name).includes('Spiteful')" src="https://cdnassets.raider.io/images/wow/icons/medium/spell_holy_prayerofshadowprotection.jpg" class="affix"/>
            <img v-if="dungeon.affixes.map(af => af.name).includes('Grievous')" src="https://cdnassets.raider.io/images/wow/icons/medium/ability_backstab.jpg" class="affix"/>
            <img v-if="dungeon.affixes.map(af => af.name).includes('Prideful')" src="https://cdnassets.raider.io/images/wow/icons/medium/spell_animarevendreth_buff.jpg" class="affix"/>
            <img v-if="dungeon.affixes.map(af => af.name).includes('Bursting')" src="https://cdnassets.raider.io/images/wow/icons/medium/ability_ironmaidens_whirlofblood.jpg" class="affix"/>
            <img v-if="dungeon.affixes.map(af => af.name).includes('Volcanic')" src="https://cdnassets.raider.io/images/wow/icons/medium/spell_shaman_lavasurge.jpg" class="affix"/>
            <img v-if="dungeon.affixes.map(af => af.name).includes('Bolstering')" src="https://cdnassets.raider.io/images/wow/icons/medium/ability_warrior_battleshout.jpg" class="affix"/>
            <img v-if="dungeon.affixes.map(af => af.name).includes('Storming')" src="https://cdnassets.raider.io/images/wow/icons/medium/spell_nature_cyclone.jpg" class="affix"/>
            <img v-if="dungeon.affixes.map(af => af.name).includes('Necrotic')" src="https://cdnassets.raider.io/images/wow/icons/medium/spell_deathknight_necroticplague.jpg" class="affix"/>
            <img v-if="dungeon.affixes.map(af => af.name).includes('Inspiring')" src="https://cdnassets.raider.io/images/wow/icons/medium/spell_holy_prayerofspirit.jpg" class="affix"/>
            </div>
          <div class="column is-1" style="text-align:center;">{{ dungeon.score }}</div>
        </div>
      </div>


    </div>
</template>
<script>
import Vue from 'vue'
import _ from 'lodash';
import { VTooltip, VPopover, VClosePopover } from 'v-tooltip'
Vue.directive('tooltip', VTooltip)
Vue.directive('close-popover', VClosePopover)
Vue.component('v-popover', VPopover)
export default {
  data() {
    return {
      characterResults: [],
      characters: ['Nightfrost', 'Riivaaja', 'Örlokki'],
    };
  },
  computed: {
    orderedCharacters: function() {
      return _.orderBy(this.characterResults, ['ilvl'], ['desc'])
    },
  },
  methods: {
    async getCharacterData() {
      this.characters.forEach(c => {
        const apiUrl=`https://raider.io/api/v1/characters/profile?region=eu&realm=alakir&name=${c}&fields=gear%2Cguild%2Ccovenant%2Cmythic_plus_best_runs%2Craid_progression%2Cmythic_plus_scores_by_season:current`;      
        return this.$axios.$get(apiUrl)
        .then(response => {
          this.characterResults.push({
            img: response.thumbnail_url,
            name: response.name,
            spec: response.active_spec_name,
            class: response.class,
            faction: response.faction,
            gender: response.gender,
            race: response.race,
            realm: response.realm,
            achievement_points: response.achievement_points,
            ilvl: response.gear.item_level_equipped,
            guild: response.guild.name,
            realm: response.guild.realm,
            covenant: response.covenant.name,
            covenant: response.covenant.name,
            renown: response.covenant.renown_level,
            nathria_mythic: response.raid_progression["castle-nathria"].mythic_bosses_killed,
            nathria_heroic: response.raid_progression["castle-nathria"].heroic_bosses_killed,
            nathria_normal: response.raid_progression["castle-nathria"].normal_bosses_killed,
            nathria_totalBosses: response.raid_progression["castle-nathria"].total_bosses,
            mythic_plus_best_runs: response.mythic_plus_best_runs,
            mythic_plus_scores_by_season: response.mythic_plus_scores_by_season[0]
          });
        })
      })
    },
    millisToMinutesAndSeconds(millis) {
      let hours = Math.floor(millis / 3600000);
      let minutes = Math.floor(millis / 60000);
      let seconds = ((millis % 60000) / 1000).toFixed(0);
      return `${hours}:${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
    },
    orderedMythicDungeons: function (bestRunsByChar) {
      return _.orderBy(bestRunsByChar, ['score'], ['desc'])
    },
  },
  mounted() {
    this.getCharacterData();
  }
}
</script>

<style scoped lang="scss">
  .character-container {
    border-radius: 3px;
    background: rgb(22, 22, 22);
    color: #f9c61a;
    margin-bottom: 2rem;

    div {
      vertical-align: middle;
      text-align: left;

      p {
        font-size: 12px;
        display: inline-block;
      }
    }
    .avatar {
      border-radius: 50%;
    }
    .class-logo {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      border: 1px solid rgb(19, 19, 19);
    }
    .affix {
      height: 20px;
      width: 20px;
      border-radius: 25%;
      border: 1px solid rgb(19, 19, 19);
    }
  }
  .character-info {
    display: flex;
    justify-content: space-between;
    margin: 0;

    div {
      padding: 0;
    }
  }
  .character-info-2 {
    display: flex;
    justify-content: space-between;

    div {
      margin: 0;
    }
  }
  .raid-container {
    display: flex;
    flex-direction: column;
    background-image: url("https://cdn.blizzardwatch.com/wp-content/uploads/2020/04/RevendrethTower.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .Mplus_headers {
    display: flex;
    justify-content: space-between;
  }
  .Mplus_dungeon {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
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
  .table-divs {
    justify-content: start;    
  }
</style>
