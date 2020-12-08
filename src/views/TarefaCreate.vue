<template>
  <section class="section">
    <div class="container">
      <h1 class="title">{{ id ? $ml.get('tarefa-create-editar') : $ml.get('tarefa-create-novo') }}</h1>
      <h2 class="subtitle">{{ $ml.get('tarefa-create-subtitle') }}</h2>

      <div class="columns is-multiline">
        <div class="column is-8">
          <b-field :label="$ml.get('titulo-label')">
            <b-input 
              :value="task.title"
              :placeholder="$ml.get('titulo-placeholder')"
              @input="updateField('title', $event)"
              maxlength="100"
              has-counter 
            />
          </b-field>
        </div>

        <div class="column is-4">
          <b-field :label="$ml.get('data-prevista-label')">
            <b-datepicker
              :value="task.date"
              :placeholder="$ml.get('data-prevista-placeholder')"
              :locale="$ml.current"
              @input="updateField('date', $event)"
              icon="calendar-today"
              trap-focus
            />
          </b-field>
        </div>

        <div class="column is-full">
          <b-field :label="$ml.get('descricao-label')">
            <b-input
              :value="task.description"
              :placeholder="$ml.get('descricao-placeholder')"
              @input="updateField('description', $event)"
              type="textarea"
              maxlength="500"
              has-counter
            />
          </b-field>
        </div>
      </div>

      <nav class="level">
        <div class="level-left">
          <b-button type="is-light" @click="cancel">{{ $ml.get('cancelar-btn') }}</b-button>
        </div>

        <div class="level-right">
          <b-button type="is-primary" @click="saveTask">{{ $ml.get('salvar-btn') }}</b-button>
        </div>
      </nav>
    </div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      errors: []
    };
  },
  created() {
    if (!this.id) {
      this.$store.dispatch('newTask')
    } else {
      this.$store.dispatch('loadTask', this.id)
          .catch(() => {
            this.$router.push({ name: 'TarefaCreate'})
          })
    }
  },
  computed: {
    task() { 
      return this.$store.getters.taskForm
    }
  },
  methods: {
    updateField(field, value) {
      this.$store.dispatch('updateTaskField', { field, value })
    },
    validate() {
      this.errors = []

      if (!this.task.title || this.task.title.length < 3) {
        this.errors.push('titulo-tamanho-minimo')
      }
    },
    saveTask() {
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
        this.$store.dispatch('saveTask')
            .then(() => {
              this.$router.push({ name: 'TarefaList' })
            })
      }
    },
    cancel() {
      this.$router.push({ name: 'TarefaList' })
    }
  }
};
</script>
