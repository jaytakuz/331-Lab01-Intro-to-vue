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
        
        function removeFromCart(id) {
            const index = cart.value.indexOf(id)
            if (index > -1) {
                cart.value.splice(index, 1)
            }
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
            updateCart,
            removeFromCart
        }
    }
})

app.component('product-display', productDisplay)
app.component('product-detail', productDetail)

app.mount('#app')