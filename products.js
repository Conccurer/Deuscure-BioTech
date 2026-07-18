// ===================================
// PRODUCTS PAGE JAVASCRIPT
// ===================================

const productsData = [
  {
    id: 1,
    name: 'DEUCIP',
    images: [ 'IMAGES/OUR-PRODUCTS/DEUCIP/WhatsApp Image 2026-05-08 at 7.01.44 PM.jpeg' ],
    infoPath: 'IMAGES/OUR-PRODUCTS/DEUCIP/DEUCIP.txt',
    description: 'Refreshing oral rehydration powder with Vitamin C, glucose, and essential electrolytes to support recovery from dehydration and help maintain fluid balance.',
    details: [
      'Restores water and electrolyte balance after sweating, heat exhaustion, or physical exertion.',
      'Provides quick energy through glucose and fast-digesting carbohydrates.',
      'Supports general wellness with added Vitamin C.'
    ]
  },
  {
    id: 2,
    name: 'DEUPAN DSR',
    images: [ 'IMAGES/OUR-PRODUCTS/DEUPAN DSR/WhatsApp Image 2026-05-08 at 7.01.42 PM.jpeg' ],
    infoPath: 'IMAGES/OUR-PRODUCTS/DEUPAN DSR/DEUPAN-DSR.txt',
    description: 'Prescription-only combination capsule for acid-related gastrointestinal disorders and impaired gut motility.',
    details: [
      'Helps control GERD, acid reflux, and heartburn.',
      'Supports healing in peptic and duodenal ulcer management.',
      'Helps reduce nausea, vomiting, bloating, and abdominal fullness.'
    ]
  },
  {
    id: 3,
    name: 'DEUSCLAV 625',
    images: [ 'IMAGES/OUR-PRODUCTS/DEUSCLAV 625/WhatsApp Image 2026-05-08 at 7.01.36 PM (1).jpeg' ],
    infoPath: 'IMAGES/OUR-PRODUCTS/DEUSCLAV 625/Deusclav LB 625.txt',
    description: 'Broad-spectrum prescription antibiotic tablet with probiotic support for bacterial infection treatment.',
    details: [
      'Used for respiratory tract, ENT, skin, soft tissue, and urinary tract infections.',
      'Combines amoxycillin with clavulanic acid to address resistant bacteria.',
      'Includes lactic acid bacillus to help support gut microflora during antibiotic therapy.'
    ]
  },
  {
    id: 4,
    name: 'DEUSCLAV DS',
    images: [ 'IMAGES/OUR-PRODUCTS/DEUSCLAV DS/WhatsApp Image 2026-05-08 at 7.01.56 PM (1).jpeg' ],
    infoPath: 'IMAGES/OUR-PRODUCTS/DEUSCLAV DS/Deusclav-DS.txt',
    description: 'High-strength pediatric antibiotic powder for oral suspension, used under clinical supervision.',
    details: [
      'Formulated for pediatric bacterial infections including ear, respiratory, skin, and urinary tract infections.',
      'Pairs amoxycillin with potassium clavulanate for broader antibacterial action.',
      'Dry powder is reconstituted before use and consumed within the advised period.'
    ]
  },
  {
    id: 5,
    name: 'DEZMINO LC',
    images: [ 'IMAGES/OUR-PRODUCTS/DEZMINO LC/WhatsApp Image 2026-05-08 at 7.01.37 PM (1).jpeg' ],
    infoPath: 'IMAGES/OUR-PRODUCTS/DEZMINO LC/DEZMINO LC.txt',
    description: 'High-potency nutraceutical supplement with amino acids, L-Carnitine, Vitamin B12, folic acid, and Vitamin D3.',
    details: [
      'Supports cellular energy, muscle vitality, and fatigue management.',
      'Helps maintain nerve health with a therapeutic Vitamin B12 profile.',
      'Provides essential amino acids for tissue repair and protein support.'
    ]
  },
  {
    id: 6,
    name: 'DEZMINO PLUS',
    images: [ 'IMAGES/OUR-PRODUCTS/DEZMINO PLUS/WhatsApp Image 2026-05-08 at 7.01.35 PM.jpeg' ],
    infoPath: 'IMAGES/OUR-PRODUCTS/DEZMINO PLUS/DEZMINO PLUS.txt',
    description: 'Advanced dietary supplement with Ubiquinol, L-Carnitine, Omega-3 fatty acids, Vitamin B12, and Vitamin D3.',
    details: [
      'Supports cellular energy production and metabolic vitality.',
      'Helps maintain cardiovascular wellness with Omega-3 fatty acids.',
      'Supports nerve care and antioxidant protection.'
    ]
  },
  {
    id: 7,
    name: 'DUBATIN 300',
    images: [ 'IMAGES/OUR-PRODUCTS/DUBATIN 300/WhatsApp Image 2026-05-08 at 7.01.53 PM (3).jpeg' ],
    infoPath: 'IMAGES/OUR-PRODUCTS/DUBATIN 300/Dubatin-300.txt',
    description: 'Prescription neurological medication containing Gabapentin for neuropathic pain and seizure management.',
    details: [
      'Helps relieve chronic nerve pain including burning or shooting discomfort.',
      'Used alongside other medicines for partial seizure control.',
      'Acts by calming overactive nerve signals.'
    ]
  },
  {
    id: 8,
    name: 'DUESLIN 16',
    images: [ 'IMAGES/OUR-PRODUCTS/DUESLIN 16/WhatsApp Image 2026-05-08 at 7.01.51 PM (1).jpeg' ],
    infoPath: 'IMAGES/OUR-PRODUCTS/DUESLIN 16/DUESLIN-16.txt',
    description: 'Prescription medicine with Betahistine for balance disorders and inner-ear related symptoms.',
    details: [
      'Helps reduce vertigo episodes linked with Meniere disease.',
      'Supports relief from dizziness and balance discomfort.',
      'Improves microcirculation within the inner ear.'
    ]
  },
  {
    id: 9,
    name: 'DULEM LC',
    images: [ 'IMAGES/OUR-PRODUCTS/DULEM LC/WhatsApp Image 2026-05-08 at 7.01.50 PM (1).jpeg' ],
    infoPath: 'IMAGES/OUR-PRODUCTS/DULEM LC/DULEM-LC.txt',
    description: 'Combination anti-allergic and respiratory medicine for allergic rhinitis and asthma symptom management.',
    details: [
      'Helps relieve runny nose, watery eyes, sneezing, and nasal irritation.',
      'Supports control of airway inflammation and exercise-induced bronchospasm.',
      'Combines a leukotriene receptor antagonist with a non-sedating antihistamine.'
    ]
  },
  {
    id: 10,
    name: 'DUXIN 20',
    images: [ 'IMAGES/OUR-PRODUCTS/DUXIN 20/WhatsApp Image 2026-05-08 at 7.01.52 PM (2).jpeg' ],
    infoPath: 'IMAGES/OUR-PRODUCTS/DUXIN 20/DUXIN-20.txt',
    description: 'Prescription SNRI medication containing Duloxetine in a gastro-resistant tablet base.',
    details: [
      'Used for major depressive disorder and generalized anxiety disorder.',
      'Helps manage chronic neuropathic and musculoskeletal pain.',
      'Balances key chemical messengers in the brain and nervous system.'
    ]
  },
  {
    id: 11,
    name: 'MIE PLUS',
    images: [ 'IMAGES/OUR-PRODUCTS/MIE PLUS/WhatsApp Image 2026-05-08 at 7.01.52 PM.jpeg' ],
    infoPath: 'IMAGES/OUR-PRODUCTS/MIE PLUS/Mie Plus.txt',
    description: 'Ayurvedic uterine tonic formulated to support female reproductive health and physical vitality.',
    details: [
      'Helps support regular menstrual cycles and period comfort.',
      'Aims to manage abnormal white discharge and localized tissue wellness.',
      'Uses rejuvenating herbs to support energy and reduce weakness.'
    ]
  },
  {
    id: 12,
    name: 'PDEXLOR SYP',
    images: [ 'IMAGES/OUR-PRODUCTS/PDEXLOR SYP/WhatsApp Image 2026-05-08 at 7.01.49 PM.jpeg' ],
    infoPath: 'IMAGES/OUR-PRODUCTS/PDEXLOR SYP/PDEXLOR Syrup.txt',
    description: 'Sugar-free cherry-flavored syrup for dry cough, nasal congestion, and common cold or allergy symptoms.',
    details: [
      'Suppresses dry, non-productive cough.',
      'Helps clear nasal congestion and sinus pressure.',
      'Relieves runny nose, sneezing, itchy throat, and watery eyes.'
    ]
  },
  {
    id: 13,
    name: 'RAKEIO DSR',
    images: [ 'IMAGES/OUR-PRODUCTS/RAKEIO DSR/WhatsApp Image 2026-05-08 at 7.01.45 PM (1).jpeg' ],
    infoPath: 'IMAGES/OUR-PRODUCTS/RAKEIO DSR/RAKEIO-DSR.txt',
    description: 'Prescription combination capsule for acid reflux, heartburn, nausea, and impaired digestive motility.',
    details: [
      'Helps manage GERD and chronic acid backflow.',
      'Supports peptic and duodenal ulcer therapy.',
      'Uses enteric-coated and sustained-release technology for longer symptom control.'
    ]
  },
  {
    id: 14,
    name: 'REATE AM',
    images: [ 'IMAGES/OUR-PRODUCTS/REATE AM/WhatsApp Image 2026-05-08 at 7.01.57 PM (1).jpeg' ],
    infoPath: 'IMAGES/OUR-PRODUCTS/REATE AM/Reate-AM.txt',
    description: 'Prescription combination tablet for hypertension management using dual blood-pressure control action.',
    details: [
      'Helps lower elevated blood pressure when single-agent therapy is not enough.',
      'Supports cardiovascular protection by reducing workload on the heart.',
      'Relaxes and widens blood vessels for smoother blood flow.'
    ]
  },
  {
    id: 15,
    name: 'RUXCEF OF',
    images: [ 'IMAGES/OUR-PRODUCTS/RUXCEF OF/WhatsApp Image 2026-05-08 at 7.01.41 PM.jpeg' ],
    infoPath: 'IMAGES/OUR-PRODUCTS/RUXCEF OF/RUXCEF-OF.txt',
    description: 'Prescription dual-action antibiotic tablet combining Cefixime and Ofloxacin for bacterial infections.',
    details: [
      'Used for typhoid fever and severe gastrointestinal bacterial infections.',
      'Manages respiratory tract infections including bronchitis and pneumonia.',
      'Supports treatment of urinary tract and reproductive tract bacterial infections.'
    ]
  },
  {
    id: 16,
    name: 'RUXFER',
    images: [ 'IMAGES/OUR-PRODUCTS/RUXFER/WhatsApp Image 2026-05-08 at 7.01.47 PM (1).jpeg' ],
    infoPath: 'IMAGES/OUR-PRODUCTS/RUXFER/RUXFER.txt',
    description: 'Nutraceutical supplement formulated to support hemoglobin, red blood cell production, and iron replenishment.',
    details: [
      'Supports nutritional iron deficiency and healthy hemoglobin levels.',
      'Helps improve energy in deficiency-related fatigue.',
      'Includes absorption-supporting co-factors and antioxidant botanical extracts.'
    ]
  },
  {
    id: 17,
    name: 'RUXLIV',
    images: [ 'IMAGES/OUR-PRODUCTS/RUXLIV/WhatsApp Image 2026-05-08 at 7.01.54 PM (2).jpeg' ],
    infoPath: 'IMAGES/OUR-PRODUCTS/RUXLIV/RUXLIV.txt',
    description: 'Sugar-free syrup formulated to stimulate appetite, support nutrition, and aid healthy liver functioning.',
    details: [
      'Helps revive appetite and support weight-gain nutrition.',
      'Supports hepatic metabolic pathways and liver function.',
      'Useful for nutritional recovery after illness under suitable guidance.'
    ]
  },
  {
    id: 18,
    name: 'RUXMAB',
    images: [ 'IMAGES/OUR-PRODUCTS/RUXMAB/WhatsApp Image 2026-05-08 at 7.01.43 PM.jpeg' ],
    infoPath: 'IMAGES/OUR-PRODUCTS/RUXMAB/Ruxmab.txt',
    description: 'Prescription triple-action tablet for pain, swelling, and inflammation management.',
    details: [
      'Targets moderate to severe musculoskeletal and joint pain.',
      'Helps reduce swelling and localized tissue inflammation.',
      'Supports post-injury and post-surgery recovery care.'
    ]
  },
  {
    id: 19,
    name: 'RUXTOL D3CAP',
    images: [ 'IMAGES/OUR-PRODUCTS/RUXTOL D3CAP/WhatsApp Image 2026-05-08 at 7.01.46 PM.jpeg' ],
    infoPath: 'IMAGES/OUR-PRODUCTS/RUXTOL D3CAP/RUXTOL D3.txt',
    description: 'High-potency Vitamin D3 softgel capsule for Vitamin D deficiency and bone health support.',
    details: [
      'Helps replenish low Vitamin D levels.',
      'Enhances calcium and phosphorus absorption.',
      'Supports bone mineralization and immune function.'
    ]
  },
  {
    id: 20,
    name: 'RUXTOL INJ',
    images: [ 'IMAGES/OUR-PRODUCTS/RUXTOL INJ/WhatsApp Image 2026-05-08 at 7.01.48 PM (1).jpeg' ],
    infoPath: 'IMAGES/OUR-PRODUCTS/RUXTOL INJ/RUXTOL Injection.txt',
    description: 'Ultra-high potency Vitamin D3 injection in a sterile oily base for severe deficiency management.',
    details: [
      'Used for severe Vitamin D deficiency when oral supplementation is impractical.',
      'Supports bone mineralization in clinical deficiency states.',
      'Strictly for intramuscular administration by qualified healthcare professionals.'
    ]
  },
  {
    id: 21,
    name: 'SEFMIX 500',
    images: [ 'IMAGES/OUR-PRODUCTS/SEFMIX 500/WhatsApp Image 2026-05-08 at 7.01.40 PM (1).jpeg' ],
    infoPath: 'IMAGES/OUR-PRODUCTS/SEFMIX 500/SEFMIX-500.txt',
    description: 'Prescription antibiotic tablet containing Cefuroxime Axetil for a wide range of bacterial infections.',
    details: [
      'Used for respiratory, ENT, urinary tract, skin, and soft tissue infections.',
      'Works by inhibiting bacterial cell wall synthesis.',
      'Patients should complete the full prescribed course.'
    ]
  },
  {
    id: 22,
    name: 'DEUVIT POWDER',
    images: [ 'IMAGES/OUR-PRODUCTS/DEUVIT POWDER/WhatsApp Image 2026-07-18 at 18.07.37.jpeg' ],
    infoPath: 'IMAGES/OUR-PRODUCTS/DEUVIT POWDER/Deuvit Powder.txt',
    description: 'Sugar-free, chocolate-flavored protein supplement designed to support immunity, strength, and daily vitality.',
    details: [
      'Provides balanced nutrition with protein, vitamins, and minerals.',
      'Supports energy, immunity, and muscle maintenance.',
      'Designed as a daily nutritional boost rather than a meal replacement.'
    ]
  },
  {
    id: 23,
    name: 'DEZMINO FORTE',
    images: [ 'IMAGES/OUR-PRODUCTS/DEZMINO FORTE/WhatsApp Image 2026-07-18 at 18.07.36.jpeg' ],
    infoPath: 'IMAGES/OUR-PRODUCTS/DEZMINO FORTE/Dezmino forte.txt',
    description: 'Specialized neuroprotective supplement formulated with B-vitamins and coenzymes to support nerve function and red blood cell health.',
    details: [
      'Supports healthy nerve regeneration and pain relief.',
      'Helps with red blood cell production and energy metabolism.',
      'Formulated for clinical nutritional support under medical guidance.'
    ]
  },
  {
    id: 24,
    name: 'DUXIP SUSPENSION',
    images: [ 'IMAGES/OUR-PRODUCTS/DUXIP SUSPENSION/WhatsApp Image 2026-07-18 at 18.07.37.jpeg' ],
    infoPath: 'IMAGES/OUR-PRODUCTS/DUXIP SUSPENSION/Duxip Suspension.txt',
    description: 'Gastroprotective oral suspension combining sucralfate and oxetacaine for rapid relief from acidity, gastritis, and ulcer discomfort.',
    details: [
      'Forms a protective barrier over damaged gastric lining.',
      'Provides fast-acting numbing relief from heartburn and acidity.',
      'Recommended under prescription for gastric ulcer support.'
    ]
  }
];

document.addEventListener('DOMContentLoaded', function() {
  displayProducts(productsData);
  setupProductModal();
});

const selectedImageByProduct = new Map();
let activeProductId = null;
let activeModalImageIndex = 0;

function displayProducts(products) {
  const container = document.getElementById('productsContainer');
  if (!container) return;

  container.innerHTML = '';

  products.forEach(product => {
    selectedImageByProduct.set(product.id, 0);
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.setAttribute('data-product-id', product.id);
    productCard.innerHTML = `
      <div class="product-image">
        <button class="gallery-arrow gallery-arrow-prev" type="button" data-action="prev" aria-label="Previous ${product.name} image"${product.images.length < 2 ? ' hidden' : ''}>&lsaquo;</button>
        <button class="product-image-button" type="button" data-action="details" aria-label="View ${product.name} details">
          <img src="${product.images[0]}" alt="${product.name}" data-product-image>
        </button>
        <button class="gallery-arrow gallery-arrow-next" type="button" data-action="next" aria-label="Next ${product.name} image"${product.images.length < 2 ? ' hidden' : ''}>&rsaquo;</button>
      </div>
      ${renderThumbnails(product)}
      <div class="product-info">
        <div class="product-card-heading">
          <h3 class="product-name">${product.name}</h3>
          <span class="product-stock stock-available">In Stock</span>
        </div>
        <p class="product-description">${product.description}</p>
        <ul class="product-details">
          ${product.details.map(detail => `<li>${detail}</li>`).join('')}
        </ul>
        <button class="product-details-button" type="button" data-action="details">View Full Information</button>
      </div>
    `;
    container.appendChild(productCard);
  });

  container.addEventListener('click', handleProductClick);
}

function renderThumbnails(product) {
  if (product.images.length < 2) return '';

  return `
    <div class="product-thumbnails" aria-label="${product.name} image thumbnails">
      ${product.images.map((image, index) => `
        <button class="product-thumbnail${index === 0 ? ' active' : ''}" type="button" data-action="thumb" data-image-index="${index}" aria-label="Show ${product.name} image ${index + 1}">
          <img src="${image}" alt="">
        </button>
      `).join('')}
    </div>
  `;
}

function handleProductClick(event) {
  const actionTarget = event.target.closest('[data-action]');
  if (!actionTarget) return;

  const productCard = event.target.closest('.product-card');
  if (!productCard) return;

  const product = getProductById(productCard.dataset.productId);
  if (!product) return;

  const action = actionTarget.dataset.action;
  if (action === 'details') {
    openProductModal(product);
    return;
  }

  if (action === 'prev' || action === 'next' || action === 'thumb') {
    const currentIndex = selectedImageByProduct.get(product.id) || 0;
    let nextIndex = currentIndex;

    if (action === 'prev') nextIndex = (currentIndex - 1 + product.images.length) % product.images.length;
    if (action === 'next') nextIndex = (currentIndex + 1) % product.images.length;
    if (action === 'thumb') nextIndex = Number(actionTarget.dataset.imageIndex);

    updateCardImage(productCard, product, nextIndex);
  }
}

function updateCardImage(productCard, product, nextIndex) {
  selectedImageByProduct.set(product.id, nextIndex);
  const image = productCard.querySelector('[data-product-image]');
  if (image) image.src = product.images[nextIndex];

  productCard.querySelectorAll('.product-thumbnail').forEach((thumbnail, index) => {
    thumbnail.classList.toggle('active', index === nextIndex);
  });
}

function setupProductModal() {
  const modal = document.createElement('div');
  modal.className = 'product-modal';
  modal.setAttribute('aria-hidden', 'true');
  modal.innerHTML = `
    <div class="product-modal-backdrop" data-modal-close></div>
    <div class="product-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="productModalTitle">
      <button class="product-modal-close" type="button" data-modal-close aria-label="Close product details">&times;</button>
      <div class="product-modal-gallery">
        <button class="modal-gallery-arrow modal-gallery-prev" type="button" data-modal-action="prev" aria-label="Previous image">&lsaquo;</button>
        <img src="" alt="" data-modal-image>
        <button class="modal-gallery-arrow modal-gallery-next" type="button" data-modal-action="next" aria-label="Next image">&rsaquo;</button>
        <div class="modal-image-count" data-modal-count></div>
      </div>
      <div class="product-modal-content">
        <div class="product-modal-heading">
          <h3 id="productModalTitle"></h3>
          <span class="product-stock stock-available">In Stock</span>
        </div>
        <div class="product-modal-info" data-modal-info></div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  modal.addEventListener('click', handleModalClick);
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.classList.contains('active')) closeProductModal();
  });
}

async function openProductModal(product) {
  activeProductId = product.id;
  activeModalImageIndex = selectedImageByProduct.get(product.id) || 0;

  const modal = document.querySelector('.product-modal');
  if (!modal) return;

  modal.querySelector('#productModalTitle').textContent = product.name;
  modal.querySelector('[data-modal-info]').innerHTML = '<p>Loading product information...</p>';
  updateModalImage(product);
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  const embeddedInfo = getEmbeddedProductInfo(product.infoPath);
  if (embeddedInfo) {
    modal.querySelector('[data-modal-info]').innerHTML = formatProductInfo(embeddedInfo);
    return;
  }

  try {
    const response = await fetch(encodeURI(product.infoPath));
    if (!response.ok) throw new Error('Product information could not be loaded.');
    const text = await response.text();
    modal.querySelector('[data-modal-info]').innerHTML = formatProductInfo(text);
  } catch (error) {
    modal.querySelector('[data-modal-info]').innerHTML = `
      <p>${product.description}</p>
      <ul>${product.details.map(detail => `<li>${detail}</li>`).join('')}</ul>
      <p class="product-modal-note"><a href="${product.infoPath}" target="_blank" rel="noopener">Open full text information</a></p>
    `;
  }
}

function handleModalClick(event) {
  if (event.target.closest('[data-modal-close]')) {
    closeProductModal();
    return;
  }

  const actionTarget = event.target.closest('[data-modal-action]');
  if (!actionTarget || !activeProductId) return;

  const product = getProductById(activeProductId);
  if (!product || product.images.length < 2) return;

  const action = actionTarget.dataset.modalAction;
  if (action === 'prev') activeModalImageIndex = (activeModalImageIndex - 1 + product.images.length) % product.images.length;
  if (action === 'next') activeModalImageIndex = (activeModalImageIndex + 1) % product.images.length;
  updateModalImage(product);
}

function updateModalImage(product) {
  const modal = document.querySelector('.product-modal');
  if (!modal) return;

  const image = modal.querySelector('[data-modal-image]');
  image.src = product.images[activeModalImageIndex];
  image.alt = product.name;

  modal.querySelector('[data-modal-count]').textContent = `${activeModalImageIndex + 1} / ${product.images.length}`;
  modal.querySelectorAll('[data-modal-action]').forEach(button => {
    button.hidden = product.images.length < 2;
  });
}

function closeProductModal() {
  const modal = document.querySelector('.product-modal');
  if (!modal) return;

  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  activeProductId = null;
}

function formatProductInfo(text) {
  const lines = text.split(/\r?\n/).map(line => line.trim()).filter(Boolean);
  return lines.map(line => {
    if (isProductHeading(line)) return `<h4>${escapeHtml(line)}</h4>`;
    return `<p>${escapeHtml(line)}</p>`;
  }).join('');
}

function getEmbeddedProductInfo(infoPath) {
  if (!globalThis.productFullInfo || !globalThis.productFullInfo[infoPath]) return '';

  const productInfo = globalThis.productFullInfo[infoPath];
  if (typeof productInfo === 'string') return productInfo;
  if (productInfo && typeof productInfo.value === 'string') return productInfo.value;
  return '';
}

function isProductHeading(line) {
  return [
    'Product Overview',
    'Key Benefits & Uses',
    'Composition & Active Ingredients',
    'Composition & Nutritional Information',
    'Directions for Use',
    'Directions for Reconstitution & Preparation',
    'Safety Warnings & Precautions',
    'Storage & Handling',
    'Manufacturer & Marketing Information'
  ].some(heading => line.startsWith(heading));
}

function getProductById(id) {
  return productsData.find(product => product.id === Number(id));
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, function(character) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[character];
  });
}
