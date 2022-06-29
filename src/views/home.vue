<template>
    <div>
        {{store.name}}
        <el-button type="default" @click="changeName">change</el-button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/store/index'
const store = useStore()
const changeName = () => {
    store.changeName('xhh')
}

</script>

<style scoped lang="sass">

</style>