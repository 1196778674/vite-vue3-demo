import { defineStore } from "pinia";

export const useStore = defineStore('index', {
    state: () => ({
        name: 'name'
    }),
    actions: {
        changeName(name: string) {
            this.name = name
        }
    }
})