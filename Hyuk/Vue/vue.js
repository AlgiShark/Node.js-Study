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
            },
            {
                variantID: 2235,
                variantColor: "blue",
            }
        ]
    }
})