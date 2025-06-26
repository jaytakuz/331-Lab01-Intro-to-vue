const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const productDescription = ref('A new pair of brand new leather boots')
        const image = ref('assets/images/socks_green.jpg')
        const camturl = ref('https://www.camt.cmu.ac.th')
        const inStock = ref(true)
        const inventory = ref(180)

        return {
            product, productDescription, image, camturl, inStock, inventory
        }
    }
}).mount('#app')