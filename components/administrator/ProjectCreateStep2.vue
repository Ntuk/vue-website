<template>
  <div class="project-create-wrapper">
    <div class="project-create-headerText">
      What category best fits the knowledge you'll share?
    </div>
    <h2 class="project-create-subtitle">If you're not sure about the right category, you can change it later.</h2>
    <form class="project-create-form">
      <div class="project-create-form-group">
        <div class="project-create-form-field">
          <div class="select is-large">
            <select 
              v-model="form.category"
              @blur="$v.form.category.$touch()"
              @change="emitFormData"
            >
              <option value="default">Select Category</option>
              <option 
                v-for="category in categories"
                :key="category._id"
                :value="category._id"
              >
                {{category.name}}
              </option>              
            </select>
            <div v-if="$v.form.category.$dirty && !isValid" class="form-error">
              <span class="help is-danger">Category is required</span>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      form: {
        category: 'default'
      }
    }
  },
  validations: {
    form: {
      category: {
        required
      }
    }
  },
  computed: {
    categories() {
      return this.$store.state.category.items
    },
    isValid() {
      return !this.$v.invalid && this.form.category != 'default'
    }
  },
  methods: {
    emitFormData() {
      this.$v.form.$touch()
      this.$emit('stepUpdated', {data: this.form, isValid: this.isValid})
    }
  }
}
</script>
<style scoped>
  .help.is-danger {
    text-align: left;
  }
</style>
