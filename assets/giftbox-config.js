// Hide qty selector manually

if (window.location.pathname == "/cart") {
  let gbInterval = setInterval(() => {
    let gifts = document.querySelectorAll('a[href*="free"]');

    if (!gifts) return;

    gifts.forEach((gift) => {
      let container = gift?.closest(".cart-item--inner");

      let qty = container?.querySelectorAll('select[aria-label="Quantity"]');

      qty?.forEach((el) => {
        el.style["pointer-events"] = "none";
        el.disabled = true;
        el.style.opacity = "0.5";
      });

      
    });
    clearInterval(gbInterval)
  }, 100);
}
