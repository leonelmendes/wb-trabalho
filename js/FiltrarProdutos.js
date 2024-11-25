document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('apply-filters').addEventListener('click', () => {
        const category = document.getElementById('category').value;
        const priceRange = document.getElementById('price-range').value;
        const popularity = document.getElementById('popularity').value;

        const products = document.querySelectorAll('.product-item');

        products.forEach(product => {
            const productCategory = product.dataset.category;
            const productPrice = parseFloat(product.dataset.price);
            const productPopularity = product.dataset.popularity;

            let show = true;
            console.log(category)
            console.log(productCategory)
            if (category !== 'all' && productCategory !== category) {
                show = false;
            }

            if (priceRange !== 'all') {
                if (priceRange === 'low' && productPrice >= 50) show = false;
                if (priceRange === 'medium' && (productPrice < 50 || productPrice > 100)) show = false;
                if (priceRange === 'high' && productPrice <= 100) show = false;
            }

            if (popularity !== 'all' && productPopularity !== popularity) {
                show = false;
            }

            product.style.display = show ? 'block' : 'none';
        });
    });
});
