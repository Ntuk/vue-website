

export const state = () => ({
  items: [],
  item: {}
})

export const actions = {
  fetchAdministratorProjects({commit}) {
    return this.$axios.$get('/api/v1/products/user-products')
      .then((projects) => {
        commit('setProjects', projects)
        return state.items
      })
      .catch(error => Promise.reject(error))
  },
  fetchProjectById({commit, state}, projectId) {
    return this.$axios.$get(`/api/v1/products/${projectId}`)
      .then(project => {
        commit('setProject', project)
        return state.item
      })
  },
  createProject(_, projectData) {
    return this.$axios.$post('/api/v1/products', projectData)
      .then(_ => this.$router.push('/administrator/projects'))
  },
  updateLine({commit}, {index, value, field}) {
    commit('setLineValue', {index, value, field})
    // Surprise commit for next lectures (:
  }
}


export const mutations = {
  setProjects(state, projects) {
    state.items = projects
  },
  setProject(state, project) {
    state.item = project
  },
  addLine(state, field) {
    state.item[field].push({value: ''})
  },
  removeLine(state, {field, index}) {
    state.item[field].splice(index, 1)
  },
  setLineValue(state, {index, value, field}) {
    state.item[field][index].value = value
  }
}
