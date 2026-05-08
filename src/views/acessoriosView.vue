<script setup>
import { ref } from 'vue'
import { listaProdutos } from '@/data/produtos'
import { formataPreco } from '@/utils/produtoUtils'

const produtos = ref(
  listaProdutos.filter(p => p.categoria === 'Acessórios')
)
</script>

<template>
  <div class="container">
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/alimentos">Alimentos</router-link>
      <router-link to="/acessorios">Acessórios</router-link>
    </header>

    <h1>Acessórios</h1>
    <div class="produtos">
      <div v-for="produto in produtos" :key="produto.id" class="produto-card">
        <img :src="produto.imagem" :alt="produto.nome" class="produto-imagem" />
        <h2>{{ produto.nome }}</h2>
        <p>Preço: {{ formataPreco(produto.preco) }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
