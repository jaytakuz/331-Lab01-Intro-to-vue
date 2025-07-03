const { createApp, ref, computed } = Vue

const app = createApp({
    setup(){
        const cart = ref(0)
        const premium = ref(true)

        const details = ref([
            'sometimes its socks', 'sometimes its sucks'
          ])

        return {
            cart,
            premium,
            details
        }
    }
})

app.component('product-display', productDisplay)
app.component('product-detail', productDetail)

app.mount('#app')