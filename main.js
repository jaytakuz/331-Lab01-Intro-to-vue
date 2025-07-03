const { createApp, ref, computed } = Vue

const app = createApp({
    setup(){
        const cart = ref([])

        const premium = ref(true)

        const details = ref([
            'sometimes its socks', 'sometimes its sucks'
        ])

        function updateCart(id) {
            cart.value.push(id)
        }
        
        const cartCount = computed(() => {
            return cart.value.reduce((counts, id) => {
              counts[id] = (counts[id] || 0) + 1
              return counts
            }, {})
        })

        return {
            cart,
            cartCount,
            premium,
            details,
            updateCart
        }
    }
})

app.component('product-display', productDisplay)
app.component('product-detail', productDetail)

app.mount('#app')