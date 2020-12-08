import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'

import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Buefy from 'buefy'

import App from '@/App.vue'
import { BNavbar } from 'buefy/src/components/navbar'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
localVue.use(Buefy)

const router = new VueRouter()

/* Simular o multilanguage */
const $ml = {
    get: () => 'test'
}

const mocks = { $ml }

describe('App', () => {

    it('Mostrar o header se o usuário estiver logado', () => {
        const getters = { authenticated: () => true }
        
        const store = new Vuex.Store({getters})
        
        const wrapper = shallowMount(App, { localVue, store, router, mocks })
        const navbar = wrapper.findComponent(BNavbar)

        expect(navbar.exists()).to.be.true
    })

    it('Não mostrar o header se o usuário não estiver logado', () => {
        const getters = { authenticated: () => false }
        
        const store = new Vuex.Store({getters})
        
        const wrapper = shallowMount(App, { localVue, store, router, mocks })
        const navbar = wrapper.findComponent(BNavbar)

        expect(navbar.exists()).to.be.false
    })
})