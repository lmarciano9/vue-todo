import * as ls from '../../utils/localstorage'
import uuid from '../../utils/uuid'

const TASKS_KEY = 'tasklist'
let notFound = false

export const state = {
    tasks: [],
    filteredTasks: [],
    taskForm: {
        title: '',
        date: new Date(),
        description: ''
    }
}

export const mutations = {
    FETCH_TASKS(state) {
        const taskData = ls.getObject(TASKS_KEY)
        state.tasks = taskData || []
    },
    FILTER_TASKS(state, { title, date }) {
        let dateNoHours
        let lowerTitle = title.toLocaleLowerCase()

        if (date) {
            dateNoHours = date.setHours(0, 0, 0, 0);
        }

        state.filteredTasks = state.tasks.filter(task => {
            if (dateNoHours) {
                let taskDate = new Date(task.date).setHours(0, 0, 0, 0);
                return task.title.toLocaleLowerCase().includes(lowerTitle || '') && taskDate == dateNoHours
            } else {
                return task.title.toLocaleLowerCase().includes(lowerTitle)
            }
        })
    },
    PERSIST_TASKS(state) {
        ls.saveObject(TASKS_KEY, state.tasks)
    },
    CREATE_NEW_TASK(state) {
        state.taskForm = {
            title: '',
            date: new Date(),
            description: ''
        }
    },
    LOAD_TASK(state, id) {
        const task = state.tasks.find(task => task.id === id)

        if (task) {
            state.taskForm = task;
            state.taskForm.date = new Date(state.taskForm.date) /* Converter a string salva em Date */
        } else {
            notFound = true
        }
    },
    UPDATE_TASK_FIELD(state, { field, value }) {
        state.taskForm[field] = value
    },
    SAVE_TASK(state) {
        /* Criar */
        if (!state.taskForm.id) {
            state.taskForm.id = uuid()
            state.tasks.push(state.taskForm)
        }
        /* Modificar */    
        else {
            const id = state.taskForm.id
            const idx = state.tasks.findIndex(task => task.id == id)
            
            if (idx >= 0) {
                state.tasks[idx] = state.taskForm
            }
        }
    },
    REMOVE_TASK(state, id) {
        const idx = state.tasks.findIndex(task => task.id == id)
        
        if (idx >= 0) {
            state.tasks.splice(idx, 1)
        }
    }
}

export const actions = {
    newTask({ commit }) {
        commit('CREATE_NEW_TASK')
    },
    updateTaskField({ commit }, { field, value }) {
        commit('UPDATE_TASK_FIELD', { field, value })
    },
    loadTask({ commit }, id) {
        return new Promise((resolve, reject) => {
            commit('LOAD_TASK', id)
            
            if (notFound) {
                reject()
            } else {
                resolve()
            }
        })
    },
    saveTask({ commit }) {
        return new Promise((resolve) => {
            commit('SAVE_TASK')
            commit('PERSIST_TASKS')
            resolve()
        })
    },
    deleteTask({ commit }, id) {
        commit('REMOVE_TASK', id)
        commit('PERSIST_TASKS')
    },
    filterTasks({ commit }, { title, date }) {
        commit('FETCH_TASKS')
        commit('FILTER_TASKS', { title, date })
    }
}

export const getters = {
    taskForm: state => state.taskForm,
    tasks: state => state.filteredTasks
}

export default {
    state,
    mutations,
    actions,
    getters
}