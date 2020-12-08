import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

import pt from './languages/pt'
import en from './languages/en'

Vue.use(MLInstaller)

export default new MLCreate({
  initial: 'pt-BR',
  save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage('en-US').create(en),
    new MLanguage('pt-BR').create(pt)
  ]
})