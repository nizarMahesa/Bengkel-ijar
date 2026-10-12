/* ============ DATA PRODUK ============ */
/* Menggunakan Font Awesome icons, bukan emoji */
const products = [
  { id:1, name:"Knalpot Racing R25 Full System", brand:"Akrapovic", price:2500000, oldPrice:3000000, cat:"knalpot", image:"knalpot-racing-r25.jpg", icon:'<i class="fa-solid fa-fire"></i>', stock:12, badge:"HOT", rating:4.8, sold:156, desc:"Knalpot full system racing dengan performa maksimal. Bahan stainless steel anti karat, suara bass menggelegar. Cocok untuk motor sport 250cc." },
  { id:2, name:"Knalpot Standar Vario 125", brand:"AHM Original", price:450000, oldPrice:550000, cat:"knalpot", image:"knalpot-vario-125.jpg", icon:'<i class="fa-solid fa-fire"></i>', stock:25, rating:4.6, sold:320, desc:"Knalpot standar original AHM untuk Honda Vario 125. Dijamin original, awet, dan suara senyap sesuai standar pabrik." },
  { id:3, name:"Knalpot Yoshimura TR1", brand:"Yoshimura", price:3200000, oldPrice:3500000, cat:"knalpot", image:"knalpot-yoshimura-tr1.jpg", icon:'<i class="fa-solid fa-fire"></i>', stock:5, badge:"PREMIUM", rating:4.9, sold:89, desc:"Knalpot premium Yoshimura TR1 dengan teknologi terbaru. Menambah tenaga hingga 15%, suara khas racing." },
  { id:4, name:"Spion CNC Universal", brand:"Rizoma", price:280000, oldPrice:350000, cat:"spion", image:"spion-cnc-universal.jpg", icon:'<i class="fa-solid fa-eye"></i>', stock:40, rating:4.7, sold:245, desc:"Spion CNC universal dengan desain elegan. Bahan aluminium anodized, tahan karat. Cocok untuk semua motor." },
  { id:5, name:"Spion Standar Beat FI", brand:"AHM", price:85000, oldPrice:110000, cat:"spion", image:"spion-beat-fi.jpg", icon:'<i class="fa-solid fa-eye"></i>', stock:60, rating:4.5, sold:512, desc:"Spion standar original Honda Beat FI. Original AHM, kualitas terjamin." },
  { id:6, name:"Spion Bar End Retro", brand:"Custom", price:150000, oldPrice:200000, cat:"spion", image:"spion-bar-end-retro.jpg", icon:'<i class="fa-solid fa-eye"></i>', stock:30, rating:4.4, sold:178, desc:"Spion bar end gaya retro klasik. Cocok untuk motor custom, cafe racer, dan scooter klasik." },
  { id:7, name:"Lampu LED Depan 12V", brand:"Philips", price:180000, oldPrice:220000, cat:"lampu", image:"lampu-led-depan.jpg", icon:'<i class="fa-solid fa-lightbulb"></i>', stock:35, rating:4.8, sold:389, desc:"Lampu LED depan 12V dengan cahaya terang. Hemat daya, tahan lama hingga 30.000 jam." },
  { id:8, name:"Lampu Sein LED Smoked", brand:"Wiser", price:95000, oldPrice:130000, cat:"lampu", image:"lampu-sein-led.jpg", icon:'<i class="fa-solid fa-lightbulb"></i>', stock:50, rating:4.6, sold:267, desc:"Lampu sein LED dengan cover smoked. Tampilan sporty, terang maksimal." },
  { id:9, name:"Lampu Belakang Vario 150", brand:"AHM Original", price:220000, oldPrice:280000, cat:"lampu", image:"lampu-belakang-vario.jpg", icon:'<i class="fa-solid fa-lightbulb"></i>', stock:18, rating:4.7, sold:145, desc:"Lampu belakang original Vario 150. Original AHM, plug and play." },
  { id:10, name:"Aki Kering YTZ6V 5AH", brand:"Yuasa", price:320000, oldPrice:380000, cat:"aki", image:"aki-kering-ytz6v.jpg", icon:'<i class="fa-solid fa-car-battery"></i>', stock:22, rating:4.9, sold:423, desc:"Aki kering Yuasa YTZ6V 5AH. Maintenance free, tahan lama, cocok untuk motor injeksi." },
  { id:11, name:"Aki GS Astra GTZ5S", brand:"GS Astra", price:280000, oldPrice:330000, cat:"aki", image:"aki-gs-astra.jpg", icon:'<i class="fa-solid fa-car-battery"></i>', stock:30, rating:4.7, sold:356, desc:"Aki GS Astra GTZ5S original. Awet dan bergaransi resmi 1 tahun." },
  { id:12, name:"Ban Tubeless IRC 80/90-14", brand:"IRC", price:175000, oldPrice:210000, cat:"ban", image:"ban-irc-tubeless.jpg", icon:'<i class="fa-solid fa-circle-dot"></i>', stock:45, rating:4.6, sold:534, desc:"Ban tubeless IRC ukuran 80/90-14. Cocok untuk motor matic. Anti bocor, grip maksimal." },
  { id:13, name:"Ban Michelin Pilot Street", brand:"Michelin", price:420000, oldPrice:500000, cat:"ban", image:"ban-michelin-pilot.jpg", icon:'<i class="fa-solid fa-circle-dot"></i>', stock:15, badge:"HOT", rating:4.9, sold:289, desc:"Ban Michelin Pilot Street premium. Grip maksimal, awet, dan nyaman. Cocok untuk harian dan touring." },
  { id:14, name:"Cover CVT Beat/Vario", brand:"Variasi", price:130000, oldPrice:170000, cat:"aksesoris", image:"cover-cvt.jpg", icon:'<i class="fa-solid fa-gear"></i>', stock:28, rating:4.5, sold:198, desc:"Cover CVT variasi untuk Beat/Vario. Bahan aluminium, tampilan sporty." },
  { id:15, name:"Handle Rem CNC Universal", brand:"Rizoma", price:250000, oldPrice:320000, cat:"aksesoris", image:"handle-rem-cnc.jpg", icon:'<i class="fa-solid fa-wrench"></i>', stock:20, rating:4.7, sold:167, desc:"Handle rem CNC universal. Bahan aluminium anodized, anti karat, tampilan premium." },
  { id:16, name:"Filter Udara Racing", brand:"K&N", price:190000, oldPrice:240000, cat:"aksesoris", image:"filter-udara-racing.jpg", icon:'<i class="fa-solid fa-gear"></i>', stock:33, rating:4.8, sold:412, desc:"Filter udara racing K&N. Menambah performa mesin, dapat dibersihkan ulang." },
  { id:17, name:"Busi Iridium NGK", brand:"NGK", price:85000, oldPrice:110000, cat:"aksesoris", image:"busi-ngk.jpg", icon:'<i class="fa-solid fa-plug"></i>', stock:100, rating:4.9, sold:687, desc:"Busi iridium NGK. Menambah performa & irit bahan bakar. Tahan hingga 40.000 km." },
  { id:18, name:"Rantai & Gir Set SSS", brand:"SSS", price:380000, oldPrice:450000, cat:"aksesoris", image:"rantai-gir-sss.jpg", icon:'<i class="fa-solid fa-link"></i>', stock:25, rating:4.7, sold:234, desc:"Rantai & gir set SSS original. Awet, kuat, cocok untuk motor sport & matic." },
  { id:19, name:"Kampas Rem Depan Aspira", brand:"Aspira", price:65000, oldPrice:85000, cat:"aksesoris", image:"kampas-rem-aspira.jpg", icon:'<i class="fa-solid fa-hand"></i>', stock:80, rating:4.5, sold:567, desc:"Kampas rem depan Aspira. Pengereman pakem, awet, harga terjangkau." },
  { id:20, name:"Shockbreaker YSS Tabung", brand:"YSS", price:750000, oldPrice:900000, cat:"aksesoris", image:"shockbreaker-yss.jpg", icon:'<i class="fa-solid fa-magnet"></i>', stock:18, rating:4.8, sold:145, desc:"Shockbreaker YSS tabung. Nyaman, stabil, cocok untuk touring jauh." },
];

const categories = [
  { id:"knalpot", name:"Knalpot", icon:'<i class="fa-solid fa-fire"></i>' },
  { id:"spion", name:"Spion", icon:'<i class="fa-solid fa-eye"></i>' },
  { id:"lampu", name:"Lampu", icon:'<i class="fa-solid fa-lightbulb"></i>' },
  { id:"aki", name:"Aki", icon:'<i class="fa-solid fa-car-battery"></i>' },
  { id:"ban", name:"Ban", icon:'<i class="fa-solid fa-circle-dot"></i>' },
  { id:"aksesoris", name:"Aksesoris", icon:'<i class="fa-solid fa-gear"></i>' },
];

/* ============ STATE ============ */
let cart = JSON.parse(localStorage.getItem('cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
let orders = JSON.parse(localStorage.getItem('orders') || '[]');
let currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
let users = JSON.parse(localStorage.getItem('users') || '[]');
let searchQuery = '';
let previousPage = 'home';
let currentCategoryProducts = [];
let selectedShippingCost = 15000;
let selectedPaymentMethod = 'Transfer Bank';

const formatRupiah = (num) => 'Rp ' + num.toLocaleString('id-ID');
const saveState = () => {
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
  localStorage.setItem('orders', JSON.stringify(orders));
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
};

/* ============ HELPER: RENDER GAMBAR PRODUK ============ */
function renderProductMedia(p) {
  if (p.image) {
    return `<img src="${p.image}" alt="${p.name}" onerror="this.parentElement.innerHTML='<span style=\\'font-size:50px;color:#d32f2f\\'>${p.icon}</span>'">`;
  }
  return p.icon;
}

/* ============ NAVIGASI ============ */
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-' + pageId);
  if (page) {
    page.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function goHome() {
  showPage('home');
  document.getElementById('breadcrumb').style.display = 'none';
  renderHome();
}

function goBack() {
  if (previousPage === 'category') showPage('category');
  else if (previousPage === 'detail') showPage('detail');
  else goHome();
}

/* ============ RENDER HOME ============ */
function renderCategories() {
  const container = document.getElementById('categories');
  container.innerHTML = categories.map(c => {
    const count = products.filter(p => p.cat === c.id).length;
    return `
      <div class="cat-card" onclick="openCategory('${c.id}', '${c.name}')">
        <div class="icon">${c.icon}</div>
        <p>${c.name}</p>
        <div class="count">${count} produk</div>
      </div>
    `;
  }).join('');
}

function renderHome() {
  renderCategories();
  const featured = products.filter(p => p.badge || p.sold > 300).slice(0, 8);
  document.getElementById('featuredProducts').innerHTML = renderProductCards(featured);
  const newest = products.slice(-8).reverse();
  document.getElementById('newProducts').innerHTML = renderProductCards(newest);
}

/* ============ KATEGORI ============ */
function openCategory(catId, catName) {
  previousPage = 'category';
  currentCategoryProducts = products.filter(p => p.cat === catId);
  document.getElementById('categoryTitle').textContent = catName;
  document.getElementById('breadcrumb').style.display = 'block';
  document.getElementById('bcCurrent').textContent = catName;
  document.getElementById('sortSelect').value = 'default';
  document.getElementById('priceFilter').value = 'all';
  document.getElementById('categoryProducts').innerHTML = renderProductCards(currentCategoryProducts);
  showPage('category');
}

function applySort() {
  let list = [...currentCategoryProducts];
  const sort = document.getElementById('sortSelect').value;
  const priceFilter = document.getElementById('priceFilter').value;

  if (priceFilter !== 'all') {
    const [min, max] = priceFilter.split('-').map(Number);
    list = list.filter(p => p.price >= min && p.price <= max);
  }
  if (sort === 'price-low') list.sort((a,b) => a.price - b.price);
  else if (sort === 'price-high') list.sort((a,b) => b.price - a.price);
  else if (sort === 'name') list.sort((a,b) => a.name.localeCompare(b.name));
  else if (sort === 'rating') list.sort((a,b) => b.rating - a.rating);

  document.getElementById('categoryProducts').innerHTML = renderProductCards(list);
}

/* ============ PRODUK CARDS ============ */
function renderProductCards(list) {
  if (list.length === 0) {
    return '<div class="empty-state" style="grid-column:1/-1"><div class="icon"><i class="fa-solid fa-magnifying-glass"></i></div><h3>Produk tidak ditemukan</h3><p>Coba ubah filter atau kata kunci</p></div>';
  }
  return list.map(p => {
    const inWishlist = wishlist.includes(p.id);
    const heartClass = inWishlist ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
    return `
      <div class="product-card" onclick="openDetail(${p.id})">
        ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
        <button class="wishlist-heart ${inWishlist?'active':''}" onclick="event.stopPropagation(); toggleWishlist(${p.id}, this)">
          <i class="${heartClass}"></i>
        </button>
        <div class="product-img">${renderProductMedia(p)}</div>
        <div class="product-info">
          <h3>${p.name}</h3>
          <div class="brand">${p.brand}</div>
          <div class="rating"><i class="fa-solid fa-star"></i> ${p.rating} · ${p.sold} terjual</div>
          <div class="price">${formatRupiah(p.price)}</div>
          ${p.oldPrice ? `<div class="old-price">${formatRupiah(p.oldPrice)}</div>` : ''}
          <div class="stock"><i class="fa-solid fa-check"></i> Stok: ${p.stock}</div>
          <button class="add-btn" onclick="event.stopPropagation(); addToCart(${p.id})">
            <i class="fa-solid fa-cart-plus"></i> Keranjang
          </button>
        </div>
      </div>
    `;
  }).join('');
}

/* ============ DETAIL PRODUK ============ */
function openDetail(productId) {
  const p = products.find(x => x.id === productId);
  if (!p) return;
  previousPage = document.getElementById('page-category').classList.contains('active') ? 'category' : 'home';

  const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  const catName = categories.find(c => c.id === p.cat)?.name || p.cat;
  const inWishlist = wishlist.includes(p.id);
  const related = products.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 4);
  const heartClass = inWishlist ? 'fa-solid fa-heart' : 'fa-regular fa-heart';

  document.getElementById('breadcrumb').style.display = 'block';
  document.getElementById('bcCurrent').textContent = p.name;

  document.getElementById('detailContent').innerHTML = `
    <div class="detail-img">${renderProductMedia(p)}</div>
    <div class="detail-info">
      ${p.badge ? `<span class="badge" style="position:static;display:inline-block;border-radius:15px;margin-bottom:10px">${p.badge}</span>` : ''}
      <h1>${p.name}</h1>
      <div class="brand-tag"><i class="fa-solid fa-tag"></i> ${p.brand} · ${catName}</div>
      <div class="rating" style="margin-bottom:10px"><i class="fa-solid fa-star"></i> ${p.rating} · ${p.sold} terjual</div>
      <div class="detail-price">${formatRupiah(p.price)}</div>
      ${p.oldPrice ? `<div class="detail-old-price">${formatRupiah(p.oldPrice)}</div>` : ''}
      ${discount > 0 ? `<div class="detail-discount">Diskon ${discount}%</div>` : ''}
      <div><div class="detail-stock"><i class="fa-solid fa-check"></i> Stok tersedia: ${p.stock} unit</div></div>

      <div class="detail-desc">
        <h3>Deskripsi Produk</h3>
        <p>${p.desc}</p>
      </div>

      <div class="detail-actions">
        <div class="qty-selector">
          <button onclick="changeDetailQty(-1)">&minus;</button>
          <span id="detailQty">1</span>
          <button onclick="changeDetailQty(1)">+</button>
        </div>
        <button class="btn-add-cart" onclick="addToCartFromDetail(${p.id})">
          <i class="fa-solid fa-cart-plus"></i> Tambah ke Keranjang
        </button>
      </div>
      <button class="btn-buy-now" onclick="buyNow(${p.id})"><i class="fa-solid fa-bolt"></i> Beli Sekarang</button>
      <button class="btn-secondary" onclick="toggleWishlist(${p.id}, this)">
        <i class="${heartClass}"></i> ${inWishlist ? 'Hapus dari Wishlist' : 'Tambah ke Wishlist'}
      </button>

      ${related.length ? `
        <div style="margin-top:30px; padding-top:20px; border-top:1px solid #eee">
          <h3 style="margin-bottom:15px">Produk Terkait</h3>
          <div class="products" style="grid-template-columns:repeat(auto-fill,minmax(180px,1fr))">
            ${related.map(r => `
              <div class="product-card" onclick="openDetail(${r.id})" style="cursor:pointer">
                <div class="product-img" style="height:120px;font-size:36px">${renderProductMedia(r)}</div>
                <div class="product-info" style="padding:10px">
                  <h3 style="font-size:13px;min-height:auto">${r.name}</h3>
                  <div class="price" style="font-size:14px;margin-top:5px">${formatRupiah(r.price)}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}
    </div>
  `;

  window.currentDetailQty = 1;
  showPage('detail');
}

function changeDetailQty(delta) {
  window.currentDetailQty = Math.max(1, (window.currentDetailQty || 1) + delta);
  document.getElementById('detailQty').textContent = window.currentDetailQty;
}

function addToCartFromDetail(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);
  const qty = window.currentDetailQty || 1;
  if (existing) existing.qty += qty;
  else cart.push({ ...product, qty });
  updateCart();
  showToast(`${qty}x ${product.name} ditambahkan`);
}

function buyNow(id) {
  addToCartFromDetail(id);
  setTimeout(() => goCheckout(), 400);
}

/* ============ WISHLIST ============ */
function toggleWishlist(id, el) {
  const idx = wishlist.indexOf(id);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    showToast('Dihapus dari wishlist');
  } else {
    wishlist.push(id);
    showToast('Ditambahkan ke wishlist');
  }
  saveState();
  if (el && el.classList) {
    const active = wishlist.includes(id);
    el.classList.toggle('active', active);
    const icon = el.querySelector('i');
    if (icon) {
      icon.className = active ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
    } else if (el.tagName === 'BUTTON' && el.textContent.includes('Wishlist')) {
      el.innerHTML = `<i class="${active ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}"></i> ${active ? 'Hapus dari Wishlist' : 'Tambah ke Wishlist'}`;
    }
  }
}

function openWishlist() {
  if (wishlist.length === 0) {
    document.getElementById('wishlistProducts').innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <div class="icon"><i class="fa-regular fa-heart"></i></div>
        <h3>Wishlist masih kosong</h3>
        <p>Tambahkan produk favorit Anda</p>
        <button class="btn-primary" style="max-width:200px;margin:0 auto" onclick="goHome()">Mulai Belanja</button>
      </div>
    `;
  } else {
    const list = products.filter(p => wishlist.includes(p.id));
    document.getElementById('wishlistProducts').innerHTML = renderProductCards(list);
  }
  showPage('wishlist');
}

/* ============ SEARCH ============ */
function searchProduct() {
  searchQuery = document.getElementById('searchInput').value.trim();
  if (!searchQuery) { goHome(); return; }

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  previousPage = 'category';
  currentCategoryProducts = filtered;
  document.getElementById('categoryTitle').textContent = `Hasil pencarian: "${searchQuery}"`;
  document.getElementById('breadcrumb').style.display = 'block';
  document.getElementById('bcCurrent').textContent = 'Pencarian';
  document.getElementById('categoryProducts').innerHTML = renderProductCards(filtered);
  showPage('category');
}
document.getElementById('searchInput').addEventListener('keypress', e => {
  if (e.key === 'Enter') searchProduct();
});

/* ============ CART ============ */
function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(item => item.id === id);
  if (existing) existing.qty++;
  else cart.push({ ...product, qty: 1 });
  updateCart();
  showToast(`${product.name} ditambahkan`);
}

function updateCart() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cartCount').textContent = count;
  renderCartItems();
  saveState();
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const totalDiv = document.getElementById('cartTotal');
  const checkoutBtn = document.getElementById('checkoutBtn');

  if (cart.length === 0) {
    container.innerHTML = `<div class="empty-cart"><div class="icon"><i class="fa-solid fa-cart-shopping"></i></div><p>Keranjang masih kosong</p></div>`;
    totalDiv.style.display = 'none';
    checkoutBtn.style.display = 'none';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="emoji">${item.image ? `<img src="${item.image}" style="width:40px;height:40px;object-fit:cover;border-radius:6px">` : item.icon}</div>
      <div class="cart-item-detail">
        <h4>${item.name}</h4>
        <p>${formatRupiah(item.price)} × ${item.qty} = ${formatRupiah(item.price * item.qty)}</p>
      </div>
      <div class="qty-controls">
        <button onclick="changeQty(${item.id}, -1)">&minus;</button>
        <span>${item.qty}</span>
        <button onclick="changeQty(${item.id}, 1)">+</button>
      </div>
      <button class="remove-btn" onclick="removeItem(${item.id})"><i class="fa-solid fa-trash"></i></button>
    </div>
  `).join('');

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  document.getElementById('totalPrice').textContent = formatRupiah(total);
  totalDiv.style.display = 'flex';
  checkoutBtn.style.display = 'block';
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  updateCart();
}

function removeItem(id) {
  cart = cart.filter(i => i.id !== id);
  updateCart();
}

function openCart() { document.getElementById('cartModal').classList.add('active'); }
function closeCart() { document.getElementById('cartModal').classList.remove('active'); }
document.getElementById('cartModal').addEventListener('click', e => {
  if (e.target.id === 'cartModal') closeCart();
});

/* ============ CHECKOUT ============ */
function goCheckout() {
  if (cart.length === 0) {
    showToast('Keranjang masih kosong!', true);
    return;
  }
  closeCart();
  if (currentUser) {
    document.getElementById('coName').value = currentUser.name || '';
    document.getElementById('coPhone').value = currentUser.phone || '';
  }
  renderCheckout();
  previousPage = 'home';
  showPage('checkout');
}

function renderCheckout() {
  const container = document.getElementById('checkoutItems');
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  container.innerHTML = cart.map(item => `
    <div class="summary-item">
      <span>${item.name} × ${item.qty}</span>
      <span>${formatRupiah(item.price * item.qty)}</span>
    </div>
  `).join('');
  document.getElementById('coSubtotal').textContent = formatRupiah(subtotal);
  updateCheckoutTotal();
}

function updateCheckoutTotal() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const total = subtotal + selectedShippingCost;
  document.getElementById('coShipping').textContent = selectedShippingCost === 0 ? 'Gratis' : formatRupiah(selectedShippingCost);
  document.getElementById('coTotal').textContent = formatRupiah(total);
}

function selectShipping(el, cost) {
  el.parentElement.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  selectedShippingCost = cost;
  updateCheckoutTotal();
}

function selectPayment(el, method) {
  el.parentElement.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  selectedPaymentMethod = method;
}

function processOrder() {
  const name = document.getElementById('coName').value.trim();
  const phone = document.getElementById('coPhone').value.trim();
  const address = document.getElementById('coAddress').value.trim();
  const city = document.getElementById('coCity').value.trim();

  if (!name || !phone || !address || !city) {
    showToast('Lengkapi data pengiriman!', true);
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const total = subtotal + selectedShippingCost;
  const orderId = 'MP-' + Date.now().toString().slice(-6);

  const order = {
    id: orderId,
    date: new Date().toLocaleString('id-ID'),
    items: [...cart],
    subtotal,
    shipping: selectedShippingCost,
    total,
    customer: { name, phone, address, city, zip: document.getElementById('coZip').value },
    shipping_method: selectedShippingCost === 0 ? 'Ambil di Toko' : 'Reguler/Express',
    payment: selectedPaymentMethod,
    note: document.getElementById('coNote').value,
    status: 'pending',
    user: currentUser ? currentUser.email : 'guest'
  };

  orders.unshift(order);
  cart = [];
  saveState();
  updateCart();

  document.getElementById('successOrderId').textContent = '#' + orderId;
  showPage('success');
}

/* ============ ORDERS ============ */
function openOrders() {
  const container = document.getElementById('ordersList');
  const userOrders = currentUser ? orders.filter(o => o.user === currentUser.email) : orders;

  if (userOrders.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="icon"><i class="fa-solid fa-box-open"></i></div>
        <h3>Belum ada pesanan</h3>
        <p>Yuk mulai belanja spare part motor!</p>
        <button class="btn-primary" style="max-width:200px;margin:0 auto" onclick="goHome()">Mulai Belanja</button>
      </div>
    `;
  } else {
    container.innerHTML = userOrders.map(o => `
      <div class="order-card">
        <div class="order-header">
          <div class="order-id">#${o.id}</div>
          <div class="order-status status-${o.status}">${statusLabel(o.status)}</div>
        </div>
        <div style="font-size:12px;color:#999;margin-bottom:10px">${o.date}</div>
        <div class="order-items">
          ${o.items.map(i => `• ${i.name} × ${i.qty}`).join('<br>')}
        </div>
        <div style="font-size:13px;color:#666;margin-top:10px">
          ${o.customer.name} · ${o.customer.phone}<br>
          ${o.customer.address}, ${o.customer.city}<br>
          ${o.payment} · ${o.shipping_method}
        </div>
        <div class="order-total">
          <span>Total</span>
          <span>${formatRupiah(o.total)}</span>
        </div>
      </div>
    `).join('');
  }
  showPage('orders');
}

function statusLabel(s) {
  return {
    pending: 'Menunggu',
    processed: 'Diproses',
    shipped: 'Dikirim',
    completed: 'Selesai'
  }[s] || s;
}

/* ============ AUTH ============ */
function registerUser() {
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const phone = document.getElementById('regPhone').value.trim();
  const password = document.getElementById('regPassword').value;

  if (!name || !email || !phone || !password) {
    showToast('Lengkapi semua data!', true); return;
  }
  if (password.length < 6) {
    showToast('Password minimal 6 karakter!', true); return;
  }
  if (users.find(u => u.email === email)) {
    showToast('Email sudah terdaftar!', true); return;
  }

  const user = { name, email, phone, password };
  users.push(user);
  currentUser = user;
  saveState();
  updateUserUI();
  showToast('Registrasi berhasil!');
  goHome();
}

function loginUser() {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;

  if (!email || !password) {
    showToast('Isi email & password!', true); return;
  }

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    showToast('Email atau password salah!', true); return;
  }

  currentUser = user;
  saveState();
  updateUserUI();
  showToast(`Selamat datang, ${user.name}!`);
  goHome();
}

function logoutUser() {
  currentUser = null;
  saveState();
  updateUserUI();
  showToast('Anda telah logout');
  goHome();
}

function updateUserUI() {
  if (currentUser) {
    document.getElementById('userInfo').style.display = 'flex';
    document.getElementById('loginBtn').style.display = 'none';
    document.getElementById('userAvatar').textContent = currentUser.name.charAt(0).toUpperCase();
  } else {
    document.getElementById('userInfo').style.display = 'none';
    document.getElementById('loginBtn').style.display = 'block';
  }
}

function openProfile() {
  if (!currentUser) { showPage('login'); return; }
  document.getElementById('profileAvatar').textContent = currentUser.name.charAt(0).toUpperCase();
  document.getElementById('profileName').textContent = currentUser.name;
  document.getElementById('profileEmail').innerHTML = currentUser.email;
  document.getElementById('profilePhone').innerHTML = currentUser.phone || '-';
  showPage('profile');
}

/* ============ TOAST ============ */
function showToast(msg, isError = false) {
  const toast = document.getElementById('toast');
  const icon = isError ? '<i class="fa-solid fa-triangle-exclamation"></i>' : '<i class="fa-solid fa-check"></i>';
  toast.innerHTML = `${icon} ${msg}`;
  toast.classList.toggle('error', isError);
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

/* ============ SCROLL ============ */
function scrollToCategories() {
  document.querySelector('#page-home .container').scrollIntoView({ behavior: 'smooth' });
}

/* ============ INIT ============ */
renderHome();
updateCart();
updateUserUI();
