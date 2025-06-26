const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const productDescription = ref('A new pair of brand new leather boots')
        return {
            product, productDescription
        }
    }
}).mount('#app')