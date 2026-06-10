// Product Database
const PRODUCTS = [
  {
    id: 1,
    name: "Solid Oak Pilates Reformer — Classic Wooden Core Bed",
    price: "US$200-350",
    image_url: "https://s.alicdn.com/@sc04/kf/Hcc41b9a6ccc545668aed9f4e3de688803/-.jpg",
    product_url: "https://www.alibaba.com/product-detail/Solid-Oak-Pilates-Reformer-Classic-Wooden_1601762015615.html",
    category: "Yoga & Pilates",
    specs: {
      "Material": "Solid Oak Wood & Heavy-Duty Steel",
      "Certification": "CE Approved",
      "Dimensions": "2280 x 600 x 350 mm",
      "Customization": "OEM Logo & Leather Color customization",
      "Packaging": "Standard Wooden Crate Packaging"
    }
  },
  {
    id: 2,
    name: "CE-Approved Maple Wood Pilates Reformer — Custom Logo, Studio Grade",
    price: "US$200-350",
    image_url: "https://s.alicdn.com/@sc04/kf/H74dbbfd4ef324c28a7cd03c8e47b7bb2j/CE-.png",
    product_url: "https://www.alibaba.com/product-detail/CE-Approved-Maple-Wood-Pilates-Reformer_1601762054259.html",
    category: "Yoga & Pilates",
    specs: {
      "Material": "Premium Canadian Maple Wood & Stainless Steel",
      "Certification": "CE Certified",
      "Application": "Professional Studio & Commercial Grade",
      "Logo": "Custom Laser Engraved Logo",
      "Springs": "5 high-quality tension springs (different resistance)"
    }
  },
  {
    id: 3,
    name: "Aluminum Alloy Folding Pilates Reformer — Space-Saving Portable Core Trainer",
    price: "US$500-585",
    image_url: "https://s.alicdn.com/@sc04/kf/H1c70972853d14d04bdef7288a1aa7759K/-.png",
    product_url: "https://www.alibaba.com/product-detail/Commercial-Grade-Aluminum-Alloy-Folding-Pilates_1601786173584.html",
    category: "Yoga & Pilates",
    specs: {
      "Material": "Aviation-grade Aluminum Alloy & Premium Leather",
      "Feature": "Foldable design with transport wheels",
      "Weight Capacity": "150 kg",
      "Folded Size": "1200 x 600 x 250 mm",
      "Spring Resistance": "Adjustable 4-spring tension system"
    }
  },
  {
    id: 4,
    name: "Premium Oak Wood Pilates Spine Corrector — Arc Barrel Back Support",
    price: "US$54-65",
    image_url: "https://s.alicdn.com/@sc04/kf/Hdcc3b128c847467f9cd0647e910bf627q/-.png",
    product_url: "https://www.alibaba.com/product-detail/Premium-Oak-Wood-Pilates-Spine-Corrector_1601757190995.html",
    category: "Yoga & Pilates",
    specs: {
      "Material": "Selected Solid Oak Wood & High-density Foam padding",
      "Purpose": "Spine rehabilitation, core strengthening & flexibility",
      "Weight": "8.5 kg",
      "Handle": "Integrated dual wooden handgrips",
      "Finish": "Eco-friendly varnished protection"
    }
  },
  {
    id: 5,
    name: "Heavy-Duty Commercial Pilates Reformer — Studio Core Trainer",
    price: "US$200-350",
    image_url: "https://s.alicdn.com/@sc04/kf/Hbff0ef11019345f69dbb976b3cc2caa49/-.jpg",
    product_url: "https://www.alibaba.com/product-detail/Heavy-Duty-Commercial-Pilates-Reformer-Studio_1601761971861.html",
    category: "Yoga & Pilates",
    specs: {
      "Material": "Heavy-duty Reinforced Steel Frame & Premium Oak Wood",
      "Certification": "CE Approved & SGS Tested",
      "Sling/Ropes": "Fully adjustable premium nylon pulley system",
      "Footbar": "4-position locking footbar with foam padding",
      "Target Use": "High-intensity Pilates studio or home gym"
    }
  },
  {
    id: 6,
    name: "Durable Maple Wood Adjustable Pilates Reformer — Home & Studio",
    price: "US$200-350",
    image_url: "https://s.alicdn.com/@sc04/kf/H4e187a442bf844bb82afb28e7555deed0/-.png",
    product_url: "https://www.alibaba.com/product-detail/Durable-Maple-Wood-Soft-Pliable-Pilates_1601762059338.html",
    category: "Yoga & Pilates",
    specs: {
      "Material": "First-grade Maple Wood & Deluxe PU Leather upholstery",
      "Adjustability": "Fully adjustable carriage distance, gear bar, and footbar",
      "Wheels": "Whisper-quiet PU rollers with precision ball bearings",
      "Includes": "Sitting box and jump board included",
      "Assembly": "Partial assembly required (instructions provided)"
    }
  },
  {
    id: 7,
    name: "OEM Portable Foldable Electric Walking Pad — LED Screen, Remote, Incline",
    price: "US$65-75",
    image_url: "https://s.alicdn.com/@sc04/kf/H010752e1f75f404a9f8ad95d2f75ace0g/OEM-LED-.png",
    product_url: "https://www.alibaba.com/product-detail/OEM-Portable-Home-Fitness-Running-Machine_1601758214501.html",
    category: "Cardio / Aerobic",
    specs: {
      "Motor Power": "1.5 HP brushless DC motor",
      "Speed Range": "1.0 - 6.0 km/h",
      "Control": "Smart remote control & App integration",
      "Console": "Integrated LED screen (time, distance, speed, calories)",
      "Max User Weight": "100 kg"
    }
  },
  {
    id: 8,
    name: "Mini CE-Certified LED Walking Pad — Foldable Under-Desk Treadmill",
    price: "US$58.28-75",
    image_url: "https://s.alicdn.com/@sc04/kf/H1c23c179ca424d84899cfa9cee61dcd6O/-CE-LED-.jpg",
    product_url: "https://www.alibaba.com/product-detail/Mini-CE-Certified-LED-Screen-Speed_1601759640405.html",
    category: "Cardio / Aerobic",
    specs: {
      "Motor Power": "1.25 HP peak output",
      "Design": "Ultra-thin under-desk profile, thickness only 12cm",
      "Certification": "CE Certified & RoHS compliant",
      "Noise Level": "Super quiet running noise < 50dB",
      "Mobility": "Built-in front wheels for effortless storage"
    }
  },
  {
    id: 9,
    name: "2026 Electric Foldable Portable Treadmill — Auto Incline 1-15°, LED",
    price: "US$200-230",
    image_url: "https://s.alicdn.com/@sc04/kf/H3835da4b38be465fa7dfbb6f47de39673/2026-1-15-LED-.jpg",
    product_url: "https://www.alibaba.com/product-detail/2026-Electric-Foldable-Portable-Home-Treadmill_1601760189293.html",
    category: "Cardio / Aerobic",
    specs: {
      "Motor Power": "2.5 HP continuous power",
      "Incline System": "1-15 levels automatic incline adjustable",
      "Running Belt": "450 x 1200 mm multi-layer shock-absorption belt",
      "Folding Style": "Soft-drop hydraulic folding mechanism",
      "Connectivity": "Bluetooth speakers, USB charge port, App sync"
    }
  },
  {
    id: 10,
    name: "Smart LCD Electric Foldable Commercial Treadmill — 2.5HP Auto/Manual Incline",
    price: "US$112-126",
    image_url: "https://s.alicdn.com/@sc04/kf/Hae3ca9a11f55470aba169d8e17668cffM/-2-5-.jpg",
    product_url: "https://www.alibaba.com/product-detail/Smart-LCD-Screen-Electric-Foldable-Commercial_1601760115717.html",
    category: "Cardio / Aerobic",
    specs: {
      "Motor Power": "2.5 HP steady-state commercial AC motor",
      "Console Display": "10-inch LCD blue backlight screen",
      "Speed Range": "0.8 - 16.0 km/h",
      "Max User Weight": "130 kg",
      "Safety": "Dual security tether clip & emergency stop button"
    }
  },
  {
    id: 11,
    name: "Multi-Functional Smith Machine — Pro Home Trainer, Stainless Steel",
    price: "US$773.44-920",
    image_url: "https://s.alicdn.com/@sc04/kf/H653bb04e51b748d38eb1e670d0aabe3aw/-.png",
    product_url: "https://www.alibaba.com/product-detail/Multi-Functional-Smith-Multifunctional-Trainer-Professional_1601808618037.html",
    category: "Strength Training",
    specs: {
      "Material": "Industrial Stainless Steel & 3mm Thick Steel Tube",
      "Functions": "Squat, smith bar, dual cable pulleys, pull-up, row, landmine",
      "Weight Stacks": "Dual independent selectorized weight stacks (90kg each)",
      "Cables": "Aviation-grade 6mm steel cable, 1000kg tensile strength limit",
      "Footprint": "1450 x 2050 x 2180 mm"
    }
  },
  {
    id: 12,
    name: "Straight-Arm Chest Fly / Reverse Fly Trainer — Commercial Strength Machine",
    price: "US$660-690",
    image_url: "https://s.alicdn.com/@sc04/kf/Hf73b399c9e32431ab62bed714bc76e9dF/-.png",
    product_url: "https://www.alibaba.com/product-detail/Straight-Arm-Chest-Fly-Reverse-Flying_1601808680466.html",
    category: "Strength Training",
    specs: {
      "Material": "Commercial-grade Q235 carbon steel frame",
      "Upholstery": "High-density foam covered with premium PVC leather",
      "Adjustment": "5-position adjustable seat height for varying user heights",
      "Weight Stack": "80 kg precision solid steel weight plates",
      "Safety Shield": "Translucent polycarbonate full weight stack shroud"
    }
  },
  {
    id: 13,
    name: "KY OK1013 Factory-Direct Rubber Hex Dumbbell — Chrome Handle, Wooden Crate",
    price: "US$5-6",
    image_url: "https://s.alicdn.com/@sc04/kf/H042b4b76397e49e4b7f050a4092806de2/KY-OK1013-.png",
    product_url: "https://www.alibaba.com/product-detail/KY-OK1013-Factory-Direct-Selling-Gym_1601790813587.html",
    category: "Free Weights",
    specs: {
      "Material": "Natural Virgin Rubber Encased Cast Iron Head",
      "Handle": "Ergonomic knurled chrome steel handle",
      "Logo": "Embossed custom KY logo",
      "Available Weights": "2.5kg up to 50kg (sold individually or in sets)",
      "Packaging": "Standard premium export wooden crate"
    }
  },
  {
    id: 14,
    name: "KY Brand Durable Rubber Hex Dumbbell Set — Custom Logo, Multi Weight",
    price: "US$5-6",
    image_url: "https://s.alicdn.com/@sc04/kf/Haaf9055945734cb28eb6dfcd9dc41658h/KY-.png",
    product_url: "https://www.alibaba.com/product-detail/KY-Brand-Factory-Direct-Durable-Rubber_1601790828596.html",
    category: "Free Weights",
    specs: {
      "Material": "Heavy-duty odorless vulcanized rubber & knurled chrome grip",
      "Logo": "Custom color laser/molded logo customization",
      "Design": "Hexagonal design prevents dumbbell from rolling on floors",
      "Tolerance": "Calibrated within +/- 2% of stated weight",
      "Set Inclusions": "Packaged inside customized wooden boxes with security locks"
    }
  },
  {
    id: 15,
    name: "PU Rubber 5mm Sports Yoga Mat — Alignment Lines, Non-Slip with Strap",
    price: "US$10-15",
    image_url: "https://s.alicdn.com/@sc04/kf/H93e0dd1a875e49b4bc0779b83cee9ad93/PU-5-.jpg",
    product_url: "https://www.alibaba.com/product-detail/Pu-Rubber-5mm-Thick-Sports-Yoga_1601817857044.html",
    category: "Yoga & Pilates",
    specs: {
      "Material": "Premium Eco-friendly Natural PU Rubber (Polyurethane)",
      "Dimensions": "1830 x 680 x 5 mm",
      "Texture": "Laser engraved alignment system, ultimate non-slip grip",
      "Weight": "3.2 kg",
      "Accessories": "Complementary high-strength adjustable carrying strap"
    }
  }
];

// Helper to parse numerical price
function parsePrice(priceStr) {
  // Cleans "US$200-350" -> 200; "US$58.28-75" -> 58.28
  const clean = priceStr.replace('US$', '').split('-')[0].trim();
  const parsed = parseFloat(clean);
  return isNaN(parsed) ? 0 : parsed;
}

// Shopping Cart Functions using LocalStorage
class CartManager {
  static getCart() {
    try {
      return JSON.parse(localStorage.getItem('ky_cart')) || [];
    } catch (e) {
      return [];
    }
  }

  static saveCart(cart) {
    localStorage.setItem('ky_cart', JSON.stringify(cart));
    // Dispatch event to update elements globally
    window.dispatchEvent(new Event('cartUpdated'));
  }

  static addToCart(productId, qty = 1) {
    const cart = this.getCart();
    const existing = cart.find(item => item.id === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ id: productId, qty: qty });
    }
    this.saveCart(cart);
    this.showToast(productId, qty);
  }

  static updateQty(productId, qty) {
    let cart = this.getCart();
    const existing = cart.find(item => item.id === productId);
    if (existing) {
      existing.qty = qty;
      if (existing.qty <= 0) {
        cart = cart.filter(item => item.id !== productId);
      }
    }
    this.saveCart(cart);
  }

  static removeFromCart(productId) {
    let cart = this.getCart();
    cart = cart.filter(item => item.id !== productId);
    this.saveCart(cart);
  }

  static getCount() {
    const cart = this.getCart();
    return cart.reduce((sum, item) => sum + item.qty, 0);
  }

  static getTotal() {
    const cart = this.getCart();
    return cart.reduce((sum, item) => {
      const product = PRODUCTS.find(p => p.id === item.id);
      if (product) {
        return sum + (parsePrice(product.price) * item.qty);
      }
      return sum;
    }, 0);
  }

  static showToast(productId, qty) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <div class="toast-msg">Added ${qty} × <strong>${product.name.split(' — ')[0]}</strong> to collection.</div>
      <div class="toast-close">&times;</div>
    `;

    container.appendChild(toast);

    const closeToast = () => {
      toast.classList.add('removing');
      setTimeout(() => {
        toast.remove();
      }, 500);
    };

    toast.querySelector('.toast-close').addEventListener('click', closeToast);

    // Auto close
    setTimeout(closeToast, 4000);
  }
}

// UI Controllers
document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initCartDrawer();
  initInquiryModal();

  // Route page renders
  if (document.querySelector('.products-grid')) {
    initIndexPage();
  } else if (document.getElementById('product-detail-root')) {
    initProductPage();
  }

  // Sync state initially
  updateCartUI();

  // Listen for custom cart events to update badges and drawer
  window.addEventListener('cartUpdated', () => {
    updateCartUI();
  });
});

// Scroll Effects
function initNavbarScroll() {
  const header = document.querySelector('header');
  if (!header) return;

  const checkScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Initial load check
}

// Mobile navigation menu
function initMobileMenu() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close when links clicked
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });
}

// Slide-out Shopping Cart Drawer
function initCartDrawer() {
  const cartBtn = document.querySelector('.cart-icon-btn');
  const closeBtn = document.querySelector('.close-cart-btn');
  const cartDrawer = document.querySelector('.cart-drawer');
  const overlay = document.querySelector('.cart-overlay-bg');

  if (!cartDrawer) return;

  // Ensure overlay exists, if not create it
  let activeOverlay = overlay;
  if (!activeOverlay) {
    activeOverlay = document.createElement('div');
    activeOverlay.className = 'cart-overlay-bg';
    document.body.appendChild(activeOverlay);
  }

  const openDrawer = () => {
    cartDrawer.classList.add('active');
    activeOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop background scrolling
  };

  const closeDrawer = () => {
    cartDrawer.classList.remove('active');
    activeOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (cartBtn) cartBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  activeOverlay.addEventListener('click', closeDrawer);

  // Global listener to trigger cart drawer opening
  window.addEventListener('openCartDrawer', openDrawer);
}

// Renders the mini cart listing inside drawer
function updateCartUI() {
  const badge = document.querySelector('.cart-count');
  if (badge) {
    const totalCount = CartManager.getCount();
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? 'flex' : 'none';
  }

  const listContainer = document.querySelector('.cart-items-list');
  const totalValueEl = document.querySelector('.cart-total-value');
  const checkoutBtn = document.querySelector('.checkout-btn');

  if (!listContainer) return;

  const cart = CartManager.getCart();

  if (cart.length === 0) {
    listContainer.innerHTML = `
      <div class="empty-cart-msg">
        <p>Your luxury collection is empty</p>
        <button class="btn-outline close-cart-btn" onclick="document.querySelector('.close-cart-btn').click();" style="font-size:10px; padding:12px 30px;">Discover Products</button>
      </div>
    `;
    if (totalValueEl) totalValueEl.textContent = 'US$0.00';
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  if (checkoutBtn) checkoutBtn.disabled = false;

  let listHtml = '';
  cart.forEach(cartItem => {
    const product = PRODUCTS.find(p => p.id === cartItem.id);
    if (!product) return;

    listHtml += `
      <div class="cart-item" data-id="${product.id}">
        <div class="cart-item-img">
          <img src="${product.image_url}" alt="${product.name}">
        </div>
        <div class="cart-item-info">
          <h4 class="cart-item-title"><a href="product.html?id=${product.id}">${product.name}</a></h4>
          <div class="cart-item-price">${product.price}</div>
          <div class="cart-item-footer">
            <div class="cart-item-qty">
              <button class="qty-btn dec-qty">&minus;</button>
              <input type="text" class="qty-input" value="${cartItem.qty}" readonly>
              <button class="qty-btn inc-qty">&plus;</button>
            </div>
            <div class="remove-item-btn">Remove</div>
          </div>
        </div>
      </div>
    `;
  });

  listContainer.innerHTML = listHtml;
  if (totalValueEl) {
    totalValueEl.textContent = `US$${CartManager.getTotal().toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
  }

  // Bind event listeners for qty buttons
  listContainer.querySelectorAll('.cart-item').forEach(itemEl => {
    const id = parseInt(itemEl.dataset.id);

    itemEl.querySelector('.inc-qty').addEventListener('click', () => {
      const cart = CartManager.getCart();
      const item = cart.find(i => i.id === id);
      if (item) CartManager.updateQty(id, item.qty + 1);
    });

    itemEl.querySelector('.dec-qty').addEventListener('click', () => {
      const cart = CartManager.getCart();
      const item = cart.find(i => i.id === id);
      if (item) CartManager.updateQty(id, item.qty - 1);
    });

    itemEl.querySelector('.remove-item-btn').addEventListener('click', () => {
      CartManager.removeFromCart(id);
    });
  });
}

// Index Page Routing & Product Grid Filtering
function initIndexPage() {
  const grid = document.querySelector('.products-grid');
  const tabContainer = document.querySelector('.filter-tabs');

  if (!grid) return;

  // Render all initially
  renderProducts(PRODUCTS);

  // Bind Tab Filter Listeners
  if (tabContainer) {
    tabContainer.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        tabContainer.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const category = tab.dataset.category;
        if (category === 'all') {
          renderProducts(PRODUCTS);
        } else {
          const filtered = PRODUCTS.filter(p => p.category.toLowerCase() === category.toLowerCase());
          renderProducts(filtered);
        }
      });
    });
  }
}

// Dynamic Product Renderer
function renderProducts(items) {
  const grid = document.querySelector('.products-grid');
  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML = `<div class="empty-msg">No premium gym equipment found matching criteria.</div>`;
    return;
  }

  grid.innerHTML = items.map(item => `
    <div class="product-card">
      <div class="prod-img-box">
        <a href="product.html?id=${item.id}">
          <img src="${item.image_url}" alt="${item.name}">
        </a>
      </div>
      <div class="prod-category">${item.category}</div>
      <a href="product.html?id=${item.id}" class="prod-title-link">
        <h3 class="prod-title">${item.name}</h3>
      </a>
      <div class="prod-footer">
        <span class="prod-price">${item.price}</span>
        <span class="add-to-cart-btn" data-id="${item.id}">Add to Cart</span>
      </div>
    </div>
  `).join('');

  // Bind Add to Cart buttons
  grid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(btn.dataset.id);
      CartManager.addToCart(id, 1);
    });
  });
}

// Product Detail Page Routing
function initProductPage() {
  const root = document.getElementById('product-detail-root');
  if (!root) return;

  // Extract ?id=N
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));

  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    root.innerHTML = `
      <div class="container text-center" style="padding: 100px 0; text-align: center;">
        <h2 class="serif-title" style="font-size: 36px; margin-bottom: 20px;">Premium Product Not Found</h2>
        <p style="color:var(--text-secondary); margin-bottom: 40px;">The specified luxury training item is not in our direct database.</p>
        <a href="index.html#collection" class="btn-gold">Back to Collection</a>
      </div>
    `;
    return;
  }

  // Render Product Detail Layout
  const specItemsHtml = Object.entries(product.specs).map(([lbl, val]) => `
    <div class="spec-item">
      <span class="spec-label">${lbl}</span>
      <span class="spec-value">${val}</span>
    </div>
  `).join('');

  root.innerHTML = `
    <div class="container">
      <div class="detail-grid">
        <div class="detail-gallery">
          <img src="${product.image_url}" alt="${product.name}" id="main-product-img">
        </div>
        <div class="detail-info">
          <div class="detail-category">${product.category}</div>
          <h1 class="serif-title detail-title">${product.name}</h1>
          <div class="detail-price">${product.price}</div>
          <p class="detail-desc">
            Experience unparalleled craftsmanship. Handcrafted with precision by the industry leading masters of KY. This premium fitness apparatus elevates your private sanctuary with the absolute finest aesthetics and materials — representing top-tier OEM factory-direct production with CE safety certification, specially styled for discerning luxury residences and wellness clubs.
          </p>
          <div class="specs-list">
            ${specItemsHtml}
          </div>
          <div class="purchase-actions">
            <div class="qty-selector">
              <button class="qty-btn" id="qty-dec">&minus;</button>
              <input type="text" class="qty-input" id="qty-val" value="1" readonly>
              <button class="qty-btn" id="qty-inc">&plus;</button>
            </div>
            <button class="btn-gold" id="detail-add-btn">Add to Collection</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Bind qty controls
  const qtyInput = document.getElementById('qty-val');
  const decBtn = document.getElementById('qty-dec');
  const incBtn = document.getElementById('qty-inc');
  const addBtn = document.getElementById('detail-add-btn');

  decBtn.addEventListener('click', () => {
    let val = parseInt(qtyInput.value);
    if (val > 1) qtyInput.value = val - 1;
  });

  incBtn.addEventListener('click', () => {
    let val = parseInt(qtyInput.value);
    qtyInput.value = val + 1;
  });

  addBtn.addEventListener('click', () => {
    const qty = parseInt(qtyInput.value);
    CartManager.addToCart(product.id, qty);
  });

  // Render Related Products
  renderRelatedProducts(product);
}

// Related Products Section below Details
function renderRelatedProducts(currentProduct) {
  const container = document.getElementById('related-products-grid');
  if (!container) return;

  // Filter 3 related in same category, exclude current
  const related = PRODUCTS
    .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
    .slice(0, 3);

  // If not enough items in same category, fill with others
  if (related.length < 3) {
    const others = PRODUCTS.filter(p => p.id !== currentProduct.id && !related.find(r => r.id === p.id));
    related.push(...others.slice(0, 3 - related.length));
  }

  container.innerHTML = related.map(item => `
    <div class="product-card">
      <div class="prod-img-box">
        <a href="product.html?id=${item.id}">
          <img src="${item.image_url}" alt="${item.name}">
        </a>
      </div>
      <div class="prod-category">${item.category}</div>
      <a href="product.html?id=${item.id}" class="prod-title-link">
        <h3 class="prod-title">${item.name}</h3>
      </a>
      <div class="prod-footer">
        <span class="prod-price">${item.price}</span>
        <span class="add-to-cart-btn" data-id="${item.id}">Add to Cart</span>
      </div>
    </div>
  `).join('');

  // Bind buttons
  container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      CartManager.addToCart(id, 1);
    });
  });
}

// Custom Contact/Inquiry Modal Controls
function initInquiryModal() {
  const modal = document.getElementById('inquiry-modal');
  const triggerBtns = document.querySelectorAll('.inquiry-trigger, .checkout-btn, .footer-inquiry-btn');
  const closeBtn = document.querySelector('.modal-close-btn');
  const bg = document.querySelector('.modal-bg');
  const form = document.getElementById('inquiry-form');
  const messageInput = document.getElementById('inquiry-message');

  if (!modal) return;

  const openModal = (e) => {
    // If opened via Checkout, preload cart items in the inquiry text!
    if (e && (e.currentTarget.classList.contains('checkout-btn') || e.target.classList.contains('checkout-btn'))) {
      const cart = CartManager.getCart();
      if (cart.length > 0) {
        let itemsSummary = 'Dear KY team,\n\nI would like to inquire about customized pricing and technical details for the following premium equipment:\n';
        cart.forEach(item => {
          const product = PRODUCTS.find(p => p.id === item.id);
          if (product) {
            itemsSummary += `- ${item.qty} × ${product.name} (${product.price})\n`;
          }
        });
        itemsSummary += '\nPlease provide specifications, shipping to my region, and estimated lead times.\n\nThank you.';
        if (messageInput) messageInput.value = itemsSummary;
      }
    } else {
      // Regular contact us trigger
      if (messageInput) messageInput.value = 'Dear KY team,\n\nI am highly interested in your premium OEM fitness equipment. Please send me your latest product catalogue and custom capabilities overview.\n\nThank you.';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(e);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (bg) bg.addEventListener('click', closeModal);

  // Form submission handler
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Collect data
      const name = document.getElementById('inquiry-name').value;
      const email = document.getElementById('inquiry-email').value;
      const phoneEl = document.getElementById('inquiry-phone');
      const phone = phoneEl ? phoneEl.value : '';
      const message = messageInput ? messageInput.value : '';

      // Build a real email to KY headquarters via the visitor's mail client
      const KY_EMAIL = '1679632172@qq.com';
      const subject = 'KY Fitness Inquiry - ' + (name || 'New Lead');
      const bodyLines = [
        'New inquiry from KY Fitness website:',
        '',
        'Name: ' + name,
        'Email: ' + email,
        'Phone: ' + phone,
        '',
        'Inquiry / Specifications:',
        message
      ];
      const mailto = 'mailto:' + KY_EMAIL +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(bodyLines.join('\n'));
      window.location.href = mailto;

      // Show beautiful custom notification instead of standard ugly alerts!
      let container = document.querySelector('.toast-container');
      if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
      }

      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.style.borderColor = '#c5a880';
      toast.innerHTML = `
        <div class="toast-msg">Thank you, <strong>${name}</strong>! Your luxury inquiry has been dispatched to KY headquarters. We will contact you at <strong>${email}</strong> within 12 hours.</div>
        <div class="toast-close">&times;</div>
      `;

      container.appendChild(toast);

      // Reset & Clear Cart on inquiry checkout
      const cart = CartManager.getCart();
      if (cart.length > 0) {
        localStorage.removeItem('ky_cart');
        window.dispatchEvent(new Event('cartUpdated'));
        // Close Cart drawer if active
        const cartDrawer = document.querySelector('.cart-drawer');
        const overlay = document.querySelector('.cart-overlay-bg');
        if (cartDrawer) cartDrawer.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
      }

      form.reset();
      closeModal();

      const closeToast = () => {
        toast.classList.add('removing');
        setTimeout(() => {
          toast.remove();
        }, 500);
      };

      toast.querySelector('.toast-close').addEventListener('click', closeToast);
      setTimeout(closeToast, 7000);
    });
  }
}
