const state = {
    problemList:[]
  }
  
  const mutations = {
    SET_PROBLEM_LIST: (state, problemList) => {
        state.problemList = problemList
    },
  }
  
  const actions = {
    setProblemList({ commit },problemList) {
      commit('SET_PROBLEM_LIST', problemList)
    },
  }
  
  export default {
    state,
    mutations,
    actions
  }
  