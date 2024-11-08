$(document).ready(function() {
    // Function to show selected variant details
    function showVariantDetails(variantId) {
        // Hide all images and body texts
        $('.variant-image').hide();
        $('.variant-body-text').hide();

        // Show only the selected variant's image and body text
        $('#image-' + variantId).show();
        $('#bodyText-' + variantId).show();
    }

    // Function to check stock and hide the "Add to Cart" button if out of stock
    function checkStockAndHideAddToCart(variantId) {
        var variantStock = $('input[name="purchasableId"][value="' + variantId + '"]').closest('label').find('span').text().toLowerCase();
        
        const addToCartDiv = $('.add-to-cart');
        
        // Check if the variant stock text contains "out of stock"
        if (variantStock.includes('out of stock') || !variantStock) {
            addToCartDiv.addClass('no-show');
        } else {
            addToCartDiv.removeClass('no-show');
        }
    }

    // Set up event listener for radio button change
    $('input[name="purchasableId"]').change(function() {
        const selectedVariantId = $(this).val();
        showVariantDetails(selectedVariantId);
        checkStockAndHideAddToCart(selectedVariantId);
    });

    // Trigger the display for the default selected variant on page load
    const defaultVariantId = $('input[name="purchasableId"]:checked').val();
    if (defaultVariantId) {
        showVariantDetails(defaultVariantId);
        checkStockAndHideAddToCart(defaultVariantId);
    }
});