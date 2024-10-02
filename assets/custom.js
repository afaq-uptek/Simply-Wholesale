/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you are an app developer and requires the theme to re-render the mini-cart, you can trigger your own event. If
 * you are adding a product, you need to trigger the "product:added" event, and make sure that you pass the quantity
 * that was added so the theme can properly update the quantity:
 *
 * document.documentElement.dispatchEvent(new CustomEvent('product:added', {
 *   bubbles: true,
 *   detail: {
 *     quantity: 1
 *   }
 * }));
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

const storefront_filters = document.querySelector('.storefront-filters');
const price_inputs = storefront_filters.querySelectorAll('[name="filter-price-group"]');
price_inputs.forEach( El => {
    El.addEventListener('change', (event) => {
        const price_values = El.value.split('-');
        // console.log(price_values);
        const price_min = price_values[0].trim();
        const price_max = price_values[1].trim();
        const input_price_min = El.closest('.collection__filter-group').querySelector(`[name="filter.v.price.gte"]`);
        const input_price_max = El.closest('.collection__filter-group').querySelector(`[name="filter.v.price.lte"]`);
        console.log(input_price_min.value, input_price_max.value);
        input_price_min.value = price_min;
        input_price_max.value = price_max
    })
})