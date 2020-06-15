

export const state = () => ({
  items: [],
  item: {},
  canUpdateProject: false
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
  updateProject({state, commit}) {
    const project = state.item
    return this.$axios.$patch(`/api/v1/products/${project._id}`, project)
      .then(project => {
        commit('setProject', project)
        commit('setCanUpdateProject', false)
        return state.item
      })
      .catch(error => Promise.reject(error))
  },
  // TODO: cache previous value and verify if you can update project
  // TODO: set canUpdate only when project values has beed updated
  updateLine({commit}, {index, value, field}) {
    commit('setLineValue', {index, value, field})
    commit('setCanUpdateProject', true)
  },
  updateProjectValue({commit}, {value, field}) {
    commit('setProjectValue', {value, field})
    commit('setCanUpdateProject', true)
  }
}


export const mutations = {
  setProjects(state, projects) {
    state.items = projects
  },
  setProject(state, project) {
    state.item = project
  },
  setProjectValue(state, {value, field}) {
    state.item[field] = value
  },
  setCanUpdateProject(state, canUpdate) {
    state.canUpdateProject = canUpdate
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
