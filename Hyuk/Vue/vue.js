var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/vmSocks-green.jpg',
        inventory: 10,
        details: ["80% cotton", "20% polyster", "Gender-neutral"],
        variants: [
            {
                variantID: 2234,
                variantColor: "green",
                variantImage: "./assets/vmSocks-green.jpg",
            },
            {
                variantID: 2235,
                variantColor: "blue",
                variantImage: './assets/vmSocks-blue.jpg',
            }
        ],
        cart: 0,
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(variantImage) {
            this.image = variantImage
        },
    }
})