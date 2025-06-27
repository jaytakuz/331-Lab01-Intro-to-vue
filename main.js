const { createApp, ref, computed } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const brand = ref('SE 331')
        const productDescription = ref('A new pair of brand new leather boots')
        // const image = ref('assets/images/socks_green.jpg')
        const camturl = ref('https://www.camt.cmu.ac.th')
        // const inStock = ref(false)
        const inventory = ref(180)
        const onSale = ref(true)

        const title = computed(() => {
                return brand.value + ' ' + product.value
            }
        )

        const onSaleText = computed (() => {
                return brand.value + ' ' + product.value + ' is on Sale'
            }
        )
        
        const details = ref(['50% cotton', '30% wool', '20% polyester'])

        const variants = ref([
            { id: 2234, color: 'green', image: 'assets/images/socks_green.jpg', quantity:50 },
            { id: 2235, color: 'blue', image: 'assets/images/socks_blue.jpg', quantity:0 }
        ])

        const sizes = ref(['S', 'M', 'L'])
        const cart = ref(0)

        function addToCart() {
            cart.value +=1
        }

        function updateImage(variantImage) {
            image.value = variantImage
        }

        function inStockToggle() {
            inStock.value = !inStock.value
        }

        function updateVariant(index) {
            selectedVariant.value = index;
        }

        const selectedVariant = ref(0)

        const image = computed(() => {
                return variants.value[selectedVariant.value].image
            }
        )

        const inStock = computed(() => {
                return variants.value[selectedVariant.value].quantity
            }
        )

        return {
            title, onSaleText, productDescription, image, camturl, inStock, inventory, onSale, details, variants, sizes, cart, addToCart, updateImage, inStockToggle, updateVariant
        }
    }
}).mount('#app')