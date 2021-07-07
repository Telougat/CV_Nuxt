export const state = () => ({
  x: null,
  y: null,
  dragging: false
});

export const mutations = {
  SET_CURSOR(state, currentPosition) {
    state.x = currentPosition.x;
    state.y = currentPosition.y;
  },
  SET_DRAGGING(state, isDragging) {
    state.dragging = isDragging;
  }
}

export const actions = {
  storeCursorPosition({ commit }, cursorPosition) {
    commit('SET_CURSOR', cursorPosition);
  },
  storeDraggingState({ commit }, isDragging) {
    commit('SET_DRAGGING', isDragging);
  }
}

export const getters = {
  getX: (state) => {
    return state.x;
  },
  getY: (state) => {
    return state.y;
  },
  getDraggingState: (state) => {
    return state.dragging;
  }
}
