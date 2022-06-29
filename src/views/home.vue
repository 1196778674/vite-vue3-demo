<template>
    <div>
        {{store.name}}
        <el-button type="default" @click="changeName">change</el-button>
        <router-link to="/login">login</router-link>
        <router-link to="/test">test(404)</router-link>
    </div>
</template>

<script setup lang="ts">
import { getCurrentInstance, onMounted } from 'vue'
import { useStore } from '@/store/index'
import httpApi from '@/http'

const store = useStore()
const { proxy } = getCurrentInstance() as any
const changeName = () => {
    httpApi({
        method: 'GET',
        url: '/test'
    }).then(res => {
        const {name} = res.data.data
        store.changeName(name)
    })
}

</script>

<style scoped lang="sass">

</style>