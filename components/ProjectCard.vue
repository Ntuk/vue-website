<template>
  <nuxt-link :to="`/projects/${project.slug}`">
  <div class="wrapper" style="padding-top:0;">
    <div class="card columns" style="margin:auto;">
      <!-- Image -->
        <div class="card-image column is-one-quarter">
          <figure style="display:flex;">
            <img :src="project.image" alt="Placeholder image" class="image is-96x96">
          </figure>
        </div>
      <!-- Main Information -->
      <div class="card-content column is-two-quarters">
        <div class="media">
          <div class="media-content">
            <p class="title enclosed">{{project.title | shortenText(45)}}</p>
          </div>
        </div>
        <div class="content">
          <p class="subtitle">Category: {{project.category.name}}</p> 
          <p class="subtitle">Date: {{project.subtitle}}</p> 
        </div>
      </div>
      <!-- More Info -->
      <footer class="card-content column is-one-quarter">
        <nuxt-link :to="`/projects/${project.slug}`"><p class="subtitle" style="font-size:22px;color:#000;font-weight:bold;">Tech used</p>
            <p class="subtitle">
              <ul class="wsl-list">
                <li
                  v-for="item in project.wsl"
                  :key="item.value"
                  class="wsl-item">
                  {{item.value}}
                </li>
              </ul>
            </p></nuxt-link>
      </footer>
    </div>
  </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
// .title {
//   color: #e67e22;
//   font-family: 'Shadows Into Light', cursive;
//   font-size: 22px;
//   letter-spacing: 4px;
//   font-weight: bold;
//   text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
// }
// .subtitle {
//   color: #f39c12;
//   font-family: 'Shadows Into Light', cursive;
//   font-size: 18px;
//   letter-spacing: 4px;
//   font-weight: bold;
//   text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
// }
.title {
  color: #f39c12;
  font-family: 'Shadows Into Light', cursive;
  font-size: 30px;
  letter-spacing: 2px;
  font-weight: bold;
  text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
}
.subtitle {
  color: #000;
  font-family: 'Shadows Into Light', cursive;
  font-size: 22px;
  letter-spacing: 4px;
  font-weight: normal;
}
.card {
  padding: 2rem;
  border-radius: 5px;
  grid-area: 1 / 1;
  // transform: translateX(10px) rotateY(25deg) rotateX(10deg);
  transform: translateX(-10px) rotateY(-4deg) rotateX(2deg) scale(1);
  background: rgba(243, 156, 18, 0.88);
  padding: 30px;
  color: #000;
  backface-visibility: hidden;
  box-shadow: 0 10px 30px -3px rgba(0,0,0,.1);

  a {
    color: #12e4f3;
    font-family: 'Shadows Into Light', cursive;
    font-size: 22px;
    letter-spacing: 2px;
    font-weight: bold;
    text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
  }
}
.card-image {
  display: flex;
  justify-content: center;
  border-radius: 2px;

  img {
    border: 1px solid black;
    border-radius: 2px;
    height: auto;
    width: auto;
  }
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
  perspective: 80em;
  display: grid;
  transform-style: preserve-3d;
  border-radius: 5px;
}
.wrapper:before {
  border-radius: 5px;
  --bw: 9px;
  grid-area: 1 / 1;
  content: '';
  backface-visibility: hidden;
  height: 100%;
  width: 100%;
  margin-top: calc(-1 * var(--bw));
  margin-left: calc(-1 * var(--bw));
  background: transparent;
  transform: translateX(-10px) rotateY(-4deg) rotateX(2deg) scale(1);
  pointer-events: none;
  border: var(--bw) solid #000;
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
.link {
  color: #e67e22;
}
</style>