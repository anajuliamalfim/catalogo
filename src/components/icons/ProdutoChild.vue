<script setup>
 defineProps(['nome', 'preco', 'categoria'])
 defineEmits(['corrigirpreco'])
 defineEmits(['salvarPreco'])
 import ButtonChild from './ButtonChild.vue';
 import { formataPreco } from '@/utils/produtoUtils';
 
</script>

<template>
    <li>
         {{ produto.nome }}
        - R$ {{ formataPreco }} 
        ({{ produto.categoria }})
        <ButtonChild @clique="$emit('corrigirpreco', id, preco)">
            Corrigir preço
        </ButtonChild>
    </li>

    <li>
         {{ produto.nome }}
        - R$ {{ formataPreco }} 
        ({{ produto.categoria }})
        <ButtonChild @clique="$emit('salvarPreco', id, preco)">
            Salvar preço
        </ButtonChild>
    </li>

</template>

<style scoped>

</style>
