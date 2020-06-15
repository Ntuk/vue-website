<template>
  <div class="card manage-card">
    <header class="card-header card-section">
      <p class="card-header-title">Project Information</p>
    </header>
    <div class="card-content card-section">
      <form>
        <multi-line-text-input
          @addClicked="addLine('wsl')"
          @removeClicked="removeLine($event, 'wsl')"
          @valueUpdated="updateLine($event, 'wsl')"
          :lines="project.wsl"
          label="Technologies used:"
        />
      </form>
    </div>
  </div>
</template>
<script>
import MultiLineTextInput from '~/components/form/MultiLineTextInput'
export default {
  components: {
    MultiLineTextInput
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
    addLine(field) {
      this.$store.commit('administrator/project/addLine', field)
    },
    removeLine(index, field) {
      this.$store.commit('administrator/project/removeLine', {field, index})
     },
    updateLine({value, index}, field) {
      this.$store.dispatch('administrator/project/updateLine', {field, value, index})
    }
  }
}
</script>


