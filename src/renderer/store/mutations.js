import * as types from './types'

export default {
  [types.ADD_BOX](state, box) {
    state.boxes.push(box)
  },

  [types.DELETE_BOX](state, box) {
    state.boxes = state.boxes.filter(current => {
      return current.id !== box.id
    })
  },

  [types.UPDATE_BOX_POSITION](state, box) {
    for (let b of state.boxes) {
      if (b.id === box.id) {
        b.x = box.pos.x
        b.y = box.pos.y
      }
    }
  },

  [types.RECEIVE_DEFAULT_BOXES](state, boxes) {
    state.defaultBoxes = boxes
  },

  [types.ADD_PROJECT](state, project) {
    project.id = Math.random()
    state.projects.push(project)
  },

  [types.UPDATE_PROJECT](state, project) {
    for (let p of state.projects) {
      if (p.id === project.id) {
        p.name = project.name
        p.color = project.color
      }
    }
  },

  [types.DELETE_PROJECT](state, project) {
    state.projects.splice(state.projects.indexOf(project), 1)
  },

  [types.ADD_NOTIFICATION](state, notification) {
    notification.id = Math.random()
    state.notifications.push(notification)
  },

  [types.DELETE_NOTIFICATION](state, notification) {
    state.notifications.splice(state.notifications.indexOf(notification), 1)
  },

  [types.SHOW_SPINNER](state) {
    state.spinner = true
  },

  [types.HIDE_SPINNER](state) {
    state.spinner = false
  }
}