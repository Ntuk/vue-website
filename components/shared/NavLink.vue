<template>
  <nuxt-link :to="to" :class="{'is-active': isActive}">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  computed: {
    isActive() {
      return this.to === this.$route.path
    }
  }
}
</script>

<style scoped lang="scss">
  .is-active {
    // border-bottom: 4px solid #e67e22;
    // border-left: 2px solid #e67e22;
    // border-right: 2px solid #e67e22;
    font-weight: bold;

    $red: #f39c12;
    $brown: #584E4A;
    $whitey: #f0f0f0;

    $duration: .2s;
    $distance: 8px;
    $easeOutBack: cubic-bezier(0.175, 0.885, 0.320, 1.275);

    a {
      position: relative;
      text-decoration: none;
      padding-bottom: 8px;

      &:before,
        &:after {
            content: '';
            position: absolute;
            bottom: 1px;
            left: 0; right: 0;
            height: 2px;
            background-color: $red;
        }
        &:before {
            opacity: 0;
            transform: translateY(- $distance);
            transition: transform 0s $easeOutBack, opacity 0s;
        }
        &:after {
            opacity: 0;
            transform: translateY($distance/2);
            transition: transform $duration $easeOutBack, opacity $duration;
        }
        &:hover,
        &:focus {
            &:before,
            &:after {
                opacity: 1;
                transform: translateY(0);
            }
            &:before {
                transition: transform $duration $easeOutBack, opacity $duration;
            }
            &:after {
                transition: transform 0s $duration $easeOutBack, opacity 0s $duration;
            }
        }
    }
  }
</style>