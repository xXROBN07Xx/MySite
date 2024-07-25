// Contact confirmation
document.querySelectorAll('a[href^="tel:"], a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        if (confirm("Do you want to proceed with this action?")) {
            window.location.href = link.href;
        }
    });
});

// Shop search functionality
document.querySelector('#shop-search').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll('.product').forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
});

// Shop filter functionality
document.querySelector('#shop-filter').addEventListener('change', (e) => {
    const category = e.target.value;
    document.querySelectorAll('.product').forEach(product => {
        if (category === 'all' || product.dataset.category === category) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
});