<template>
  <div class="card manage-card">
    <header class="card-header card-section">
      <p class="card-header-title">Project Landing Page</p>
    </header>
    <div class="card-content card-section">
      <form>
        <div class="field">
          <label class="label">Project title</label>
          <div class="control">
            <input
              :value="project.title"
              @input="($event) => emitProjectValue($event, 'title')"
              class="input is-medium"
              type="text"
              placeholder="Dart and Flutter From Zero to Hero ">
          </div>
        </div>
        <div class="field">
          <label class="label">Project subtitle</label>
          <div class="control">
            <input
              :value="project.subtitle"
              @input="($event) => emitProjectValue($event, 'subtitle')"
              class="input is-medium"
              type="text"
              placeholder="Build real mobile Application for Android and iOS.">
          </div>
        </div>
        <div class="field">
          <label class="label">Project description</label>
          <div class="control">
            <!-- <textarea
              :value="project.description"
              @input="($event) => emitProjectValue($event, 'description')"
              class="textarea is-medium"
              type="text"
              placeholder="Write something catchy about the project">
            </textarea> -->
          <project-editor 
            :initialContent="project.description"
            @editorUpdated="(content) => emitCourseValue(content, 'description')"
          />
          </div>
        </div>
        <div class="field">
          <label class="label">Category</label>
          <div class="select is-medium">
            <select
              :value="project.category._id"
              @change="($event) => emitProjectValue($event, 'category')"
            >
              <option
                v-for="category in categories"
                :key="category._id"
                :value="category._id">
                {{category.name}}
             </option>
            </select>
          </div>
        </div>
        <div class="field">
          <label class="label">Project Image</label>
          <div class="columns">
            <div class="column">
              <figure class="image is-4by2">
                <img
                 :src="project.image">
              </figure>
            </div>
            <div class="column centered">
              <div class="control">
                <input
                  :value="project.image"
                  @input="($event) => emitProjectValue($event, 'image')"
                  class="input is-medium"
                  type="text"
                  placeholder="https://images.unsplash.com/photo-1498837167922-ddd27525d352">
              </div>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Project Link</label>
          <div class="control">
            <input
              :value="project.productLink"
              @input="($event) => emitProjectValue($event, 'productLink')"
              class="input is-medium"
              type="text"
              placeholder="https://www.udemy.com/vue-js-2-the-full-guide-by-real-apps-vuex-router-node">
          </div>
        </div>
        <div class="field">
          <label class="label">Project Video Link</label>
          <div class="control">
            <input
              :value="project.promoVideoLink"
              @input="($event) => emitProjectValue($event, 'promoVideoLink')"
              class="input is-medium"
              type="text"
              placeholder="https://www.youtube.com/watch?v=WQ9sCAhRh1M">
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import ProjectEditor from '~/components/editor/ProjectEditor'
export default {
  components: {
    ProjectEditor
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    categories() {
      return this.$store.state.category.items
    }
  },
  methods: {
    emitProjectValue(e, field) {
      const value = e.target ? e.target.value : e 
      if (field === 'category') {
        return this.emitCategory(value, field)
      }
      return this.$emit('projectValueUpdated', {value, field})
    },
    emitCategory(categoryId, field) {
      const foundCategory = this.categories.find(c => c._id === categoryId)
      this.$emit('projectValueUpdated', {value: foundCategory, field})
    }
  }
}
</script>
