<template>
  <div id="app">
      <wordcloud
        :data="defaultWords"
        nameKey="name"
        valueKey="value"
        :color="myColors"
        :showTooltip="false"
        :wordClick="wordClickHandler"
        :font="'Shadows Into Light'"
        :fontSize=[12,42]
      >
      </wordcloud>
  </div>
</template>

<script>
import wordcloud from 'vue-wordcloud'

export default {
  name: 'app',
  components: {
    wordcloud
  },
  methods: {
    wordClickHandler(name, value, vm) {
      console.log('wordClickHandler', name, value, vm);
    }
  },
  data() {
    return {
      myColors: ['#e67e22', '#f9c61a', '#f7c725', '#eb9346'],
      defaultWords: [
        {
          "name": "programming",
          "value": 26
        },
        {
          "name": "gaming",
          "value": 26
        },
        {
          "name": "developing",
          "value": 22
        },
        {
          "name": "coding",
          "value": 16
        },
        {
          "name": "pc building",
          "value": 15
        },
        {
          "name": "food",
          "value": 13
        },
        {
          "name": "framework",
          "value": 12
        },
        {
          "name": "JavaScript",
          "value": 14
        },
        {
          "name": "Vue",
          "value": 16
        },
        {
          "name": "react",
          "value": 11
        },
        {
          "name": "angular",
          "value": 10
        },
        {
          "name": "android",
          "value": 21
        },
        {
          "name": "iOS",
          "value": 15
        },
        {
          "name": "competetive",
          "value": 21
        },
        {
          "name": "cooking",
          "value": 24
        },
        {
          "name": "inspirational",
          "value": 16
        },
        {
          "name": "html5",
          "value": 8
        },
        {
          "name": "game engine",
          "value": 17
        },
        {
          "name": "DOM",
          "value": 10
        },
        {
          "name": "facebook",
          "value": 11
        },
        {
          "name": "Github",
          "value": 18
        },
        {
          "name": "google analytics",
          "value": 12
        },
        {
          "name": "finnish",
          "value": 10
        },
        {
          "name": "NuxtJS",
          "value": 23
        },
        {
          "name": "NodeJS",
          "value": 19
        },
        {
          "name": "MongoDB",
          "value": 16
        },
        {
          "name": "SQL",
          "value": 16
        },
        {
          "name": "StencilJS",
          "value": 24
        },
        {
          "name": "Storybook",
          "value": 20
        },
        {
          "name": "Haaga-Helia",
          "value": 17
        },
        {
          "name": "Java",
          "value": 13
        },
        {
          "name": "Shadow DOM",
          "value": 22
        }
      ]
    }
  }
}
</script>
