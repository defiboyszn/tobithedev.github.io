import { defineStore } from 'dytejs'



export let store = defineStore({
    state: () => ({
        api: []
    }),
    actions: {
        async loadApi() {
            var req = await fetch('/api/index.json')
            this.api = await req.json()
        }
    }
})