const CONTACT_EMAIL = "aikomatchaph@gmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/";

// Hamburger menu
function toggleMenu() {
  document.querySelector('.mobile-nav')?.classList.toggle('open');
}

// Cart functions
function getCart() {
  try {
    return JSON.parse(localStorage.getItem('aikoCart') || '[]');
  } catch {
    return [];
  }
}

function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0
  );

  document.querySelectorAll('#cart-count').forEach(el => {
    el.textContent = count;
  });
}

// Update cart count when page loads or another page changes the cart
document.addEventListener('DOMContentLoaded', updateCartCount);
window.addEventListener('storage', updateCartCount);

// Inquiry form
document.querySelectorAll('[data-inquiry-form]').forEach(form =>
  form.addEventListener('submit', e => {
    e.preventDefault();

    const data = new FormData(form);
    const subject = encodeURIComponent(
      'AIKŌ Matcha inquiry — ' + (data.get('product') || 'General')
    );

    const body = encodeURIComponent(
      `Name: ${data.get('name')}
Email: ${data.get('email')}
Product: ${data.get('product') || 'General'}
Quantity: ${data.get('quantity') || 'Not specified'}
Message: ${data.get('message') || ''}`
    );

    if (CONTACT_EMAIL === 'YOUR_EMAIL_HERE') {
      alert('Please add your contact email in assets/script.js before using the inquiry form.');
      window.open(INSTAGRAM_URL, '_blank', 'noopener');
      return;
    }

    window.location.href =
      mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body};
  })
);

// Automatic copyright year
document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});
Gumawa
Sumulat sa Nicole Anciano
