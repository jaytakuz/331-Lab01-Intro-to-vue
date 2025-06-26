const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const productDescription = ref('A new pair of brand new leather boots')
        const image = ref('assets/images/socks_green.jpg')
        return {
            product, productDescription, image
        }
    }
}).mount('#app')