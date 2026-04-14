<script setup>
 defineProps(['nome', 'preco', 'categoria'])
</script>

<template>
    <li>
         {{ produto.nome }}
        - R$ {{ produto.preco }} 
        ({{ produto.categoria }})
    </li>

</template>

<style scoped>

</style>
