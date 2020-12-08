<template>
  <section class="section backdrop">
    <div class="container is-flex is-align-items-center">
      <div class="container backdrop-form">
        <!-- Troca de linguagem -->
        <div class="p-4 has-text-primary is-size-7">
          <span class="lang-selector" v-for="l in $store.getters.langs" :key="l.key" @click="$ml.change(l.key)">
            {{ l.name }}
          </span>
        </div>

        <!-- Título -->
        <div class="backdrop-title p-4">{{ $ml.get('cadastro-title') }}</div>

        <!-- Formulário -->
        <div class="p-4">
          <b-field :label="$ml.get('nome-label')" custom-class="has-text-primary">
            <b-input 
              v-model="form.name"
              custom-class="has-text-primary"
              @keyup.enter.native="finishSignup"
            />
          </b-field>
          <b-field :label="$ml.get('login-label')" custom-class="has-text-primary">
            <b-input
              v-model="form.login"
              custom-class="has-text-primary"
              @keyup.enter.native="finishSignup"
            />
          </b-field>
          <b-field :label="$ml.get('senha-label')" custom-class="has-text-primary">
            <b-input
              v-model="form.pass"
              type="password"
              custom-class="has-text-primary"
              @keyup.enter.native="finishSignup"
            />
          </b-field>
          <b-field :label="$ml.get('confirmar-senha-label')" custom-class="has-text-primary">
            <b-input
              v-model="form.confirmpass"
              type="password"
              custom-class="has-text-primary"
              @keyup.enter.native="finishSignup"
            />
          </b-field>
        </div>
        
        <!-- Botões -->
        <div class="has-text-centered p-4">
          <b-button type="is-primary" @click="finishSignup">{{ $ml.get('concluir-btn') }}</b-button>
          <b-button class="ml-3" type="is-info" tag="router-link" :to="{ name: 'Login' }">{{ $ml.get('voltar-btn') }}</b-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        login: '',
        pass: '',
        confirmpass: ''
      },
      errors: []
    }
  },
  methods: {
    validate() {
      this.errors = []

      if (!this.form.name) {
        this.errors.push('preencher-nome')
      }

      if (!this.form.login) {
        this.errors.push('preencher-login')
      }

      if (!this.form.pass || this.form.pass.length < 3) {
        this.errors.push('preencher-senha-caracteres')
      }

      if (!this.form.confirmpass) {
        this.errors.push('preencher-confirmar-senha')
      }

      if (this.form.pass !== this.form.confirmpass) {
        this.errors.push('senhas-nao-iguais')
      }
    },
    finishSignup() {
      this.validate()

      if (this.errors.length > 0) {
        let errorMessages = this.errors.map(e => `<li>${this.$ml.get(e)}</li>`).join('')
        const message = `<p>${this.$ml.get('erros-cadastro-msg')}</p><br><ul class="pl-5" style="list-style:disc">${errorMessages}</ul>`

        this.$buefy.dialog.alert({
          message: message,
          confirmText: "OK",
          type: "is-danger",
        })
      } else {
        this.$buefy.dialog.alert({
          message: this.$ml.get('cadastro-finalizado-msg'),
          confirmText: "OK",
          type: "is-success",
        })
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.backdrop-title {
  color: $primary;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}
</style>