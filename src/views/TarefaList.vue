<template>
  <section class="section">
    <div class="container">
      <h1 class="title">{{ $ml.get('tarefa-list-title') }}</h1>
      <h2 class="subtitle">{{ $ml.get('tarefa-list-subtitle') }}</h2>

      <div class="columns is-multiline">
        <div class="column is-8">
          <b-input
            v-model="filter.title"
            :placeholder="$ml.get('filtro-pesquisa-placeholder')"
            type="search"
            icon="magnify"
            @input="applyFilter"
          />
        </div>
        <div class="column is-4">
          <b-datepicker
            v-model="filter.date"
            :locale="$ml.current"
            :placeholder="$ml.get('filtro-data-placeholder')"
            icon="calendar-today"
            @input="applyFilter"
            trap-focus
          >
            <b-field addons position="is-centered">
              <p class="control">
                <b-button 
                  type="is-light"
                  icon-left="calendar-today"
                  @click="setToday"
                >
                  {{ $ml.get('hoje-btn') }}
                </b-button>
              </p>
              <p class="control">
                <b-button
                  icon-left="close"
                  type="is-danger"
                  @click="setNoDate"
                >
                  {{ $ml.get('remover-btn') }}                
                </b-button>
              </p>
            </b-field>
          </b-datepicker>
        </div>

        <div class="column is-full">
          <b-table
            :data="tasks"
            class="v-centered"
          >
            <b-table-column :label="$ml.get('titulo-label')" v-slot="props">
              {{ props.row.title }}
            </b-table-column>

            <b-table-column :label="$ml.get('data-prevista-label')" v-slot="props" width="150" centered>
              {{ props.row.date ? new Date(props.row.date).toLocaleDateString($ml.current) : '—' }}
            </b-table-column>

            <b-table-column :label="$ml.get('actions-column-label')" centered width="250" v-slot="props">
              <b-field addons position="is-centered">
                <p class="control">
                  <b-button
                    icon-left="pencil"
                    type="is-light"
                    tag="router-link"
                    :to="{ name: 'TarefaEdit', params: { id: props.row.id } }"
                  >
                    {{ $ml.get('editar-btn') }}
                  </b-button>
                </p>
                <p class="control">
                  <b-button
                    icon-left="delete"
                    type="is-danger"
                    @click="confirmDelete(props.row)"
                  >
                    {{ $ml.get('excluir-btn') }}
                  </b-button>
                </p>
              </b-field>
            </b-table-column>

            <template slot="empty">
              <section class="section">
                <div class="container has-text-centered">
                  <p>{{ $ml.get('empty-table-msg') }}</p>
                  <br>
                  <b-button type="is-primary" tag="router-link" :to="{ name: 'TarefaCreate' }">
                    {{ $ml.get('adicionar-tarefa-btn') }}
                  </b-button>
                </div>
              </section>
            </template>
          </b-table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      filter: {
        title: '',
        date: null
      }
    }
  },
  created() {
    this.applyFilter()
  },
  computed: {
    tasks() {
      return this.$store.getters.tasks
    }
  },
  methods: {
    applyFilter() {
      this.$store.dispatch('filterTasks', this.filter)
    },
    setToday() {
      this.filter.date = new Date()
      this.applyFilter()
    },
    setNoDate() {
      this.filter.date = null
      this.applyFilter()
    },
    confirmDelete(row) {
      this.$buefy.dialog.confirm({
        title: this.$ml.get('excluir-tarefa-dialog-title'),
        message: this.$ml.with(row.title).get('excluir-tarefa-dialog-msg'),
        confirmText: this.$ml.get('confirmar-btn'),
        cancelText: this.$ml.get('cancelar-btn'),
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => this.performDelete(row.id)
      });
    },
    performDelete(id) {
      this.$store.dispatch('deleteTask', id)
      this.applyFilter()
    }
  }
}
</script>