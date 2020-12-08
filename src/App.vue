<template>
  <div id="app">
    <b-navbar type="is-primary" fixed-top v-if="$store.getters.authenticated">
      <template slot="brand">
        <div class="nav-brand">
          <b-icon icon="notebook-edit" class="mr-2" />
          {{ $ml.get('brand-name') }}
        </div>
      </template>
      <template slot="start">
        <b-navbar-item v-for="l in $store.getters.langs" :key="l.key" @click="$ml.change(l.key)">
          {{ l.name }}
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="router-link" :to="{ name: 'TarefaCreate' }">
          <b-icon icon="plus" class="mr-2" />
          {{ $ml.get('novo') }}
        </b-navbar-item>
        <b-navbar-item tag="router-link" to="/tasks">
          <b-icon icon="format-list-bulleted" class="mr-2" />
          {{ $ml.get('lista') }}
        </b-navbar-item>
        <b-navbar-item @click="logout">
          <b-icon icon="logout" class="mr-2" />
          {{ $ml.get('logout') }}
        </b-navbar-item>
      </template>
    </b-navbar>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('logout')
    },
  }
}
</script>