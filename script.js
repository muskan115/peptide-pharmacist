// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    const wasActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('active');
      i.querySelector('.faq-icon').textContent = '+';
    });
    if (!wasActive) {
      item.classList.add('active');
      item.querySelector('.faq-icon').textContent = '−';
    }
  });
});

// Cart
let cartCount = 0;
const cartBadge = document.getElementById('cartBadge');
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    cartCount++;
    cartBadge.textContent = cartCount;
    btn.textContent = 'Added ✓';
    setTimeout(() => { btn.textContent = 'Add to Cart'; }, 1000);
  });
});

// Product tabs / filter
const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.product-card');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;
    cards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Newsletter form (front-end only)
const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = newsletterForm.querySelector('input');
  if (input.value) {
    input.value = '';
    input.placeholder = 'Subscribed! ✓';
    setTimeout(() => { input.placeholder = 'Enter your email'; }, 2000);
  }
});
