// State Management
let currentCategory = 'All';
let searchQuery = '';
let showingBookmarksOnly = false;
let currentModalGuideId = null;

// Load persisted bookmarks and step progress from localStorage
let savedGuides = JSON.parse(localStorage.getItem('ugastep_saved_guides') || '[]');
let completedSteps = JSON.parse(localStorage.getItem('ugastep_completed_steps') || '{}');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    updateSavedCount();
    renderGuides();
    
    // Check if URL has a hash or query param to open a guide directly
    const urlParams = new URLSearchParams(window.location.search);
    const guideParam = urlParams.get('guide');
    if (guideParam && guidesData.some(g => g.id === guideParam)) {
        openGuideModal(guideParam);
    }
});

// Render Guide Cards
function renderGuides() {
    const grid = document.getElementById('guides-grid');
    const noResults = document.getElementById('no-results');
    const countLabel = document.getElementById('guide-count-label');
    const sectionTitle = document.getElementById('section-title');

    if (!grid || typeof guidesData === 'undefined') return;

    const filtered = guidesData.filter(guide => {
        const matchesCat = currentCategory === 'All' || guide.category === currentCategory;
        const matchesBookmark = !showingBookmarksOnly || savedGuides.includes(guide.id);
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch = !q ||
            guide.title.toLowerCase().includes(q) ||
            guide.description.toLowerCase().includes(q) ||
            guide.agency.toLowerCase().includes(q) ||
            guide.category.toLowerCase().includes(q) ||
            guide.location.toLowerCase().includes(q) ||
            guide.steps.some(s => s.title.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q));

        return matchesCat && matchesBookmark && matchesSearch;
    });

    // Update Title & Count
    if (showingBookmarksOnly) {
        sectionTitle.textContent = 'Your Saved UgaStep Guides';
    } else if (currentCategory === 'All') {
        sectionTitle.textContent = 'All Step-by-Step Guides';
    } else {
        sectionTitle.textContent = `${currentCategory} Guides`;
    }

    countLabel.textContent = `Showing ${filtered.length} practical UgaStep procedure${filtered.length === 1 ? '' : 's'}`;

    if (filtered.length === 0) {
        grid.innerHTML = '';
        noResults.classList.remove('hidden');
        return;
    }

    noResults.classList.add('hidden');
    grid.innerHTML = filtered.map(guide => {
        const isSaved = savedGuides.includes(guide.id);
        const doneCount = (completedSteps[guide.id] || []).length;
        const totalSteps = guide.steps.length;

        return `
        <article class="bg-slate-900 rounded-2xl border border-slate-800 hover:border-slate-700 overflow-hidden flex flex-col shadow-lg transition-all duration-200 hover:-translate-y-1 group">
            <!-- Card Top Banner / Image -->
            <div class="relative h-40 overflow-hidden bg-slate-800 cursor-pointer" onclick="openGuideModal('${guide.id}')">
                <img src="${guide.image}" alt="${escapeHtml(guide.title)}" class="w-full h-full object-cover opacity-75 group-hover:scale-105 group-hover:opacity-90 transition-all duration-300" loading="lazy">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                
                <!-- Category Pill -->
                <span class="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-950/85 text-slate-200 border border-slate-700/80 backdrop-blur-sm">
                    ${escapeHtml(guide.category)}
                </span>

                <!-- Bookmark Button -->
                <button onclick="event.stopPropagation(); toggleBookmark('${guide.id}')" title="${isSaved ? 'Remove from Saved' : 'Save Guide'}"
                    class="absolute top-3 right-3 w-8 h-8 rounded-lg bg-slate-950/85 border border-slate-700/80 text-slate-300 hover:text-uganda-yellow flex items-center justify-center backdrop-blur-sm transition-colors">
                    <i class="${isSaved ? 'fa-solid fa-bookmark text-uganda-yellow' : 'fa-regular fa-bookmark'} text-xs"></i>
                </button>

                <!-- Agency Badge -->
                <div class="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                    <div class="w-8 h-8 rounded-lg ${guide.color} border flex items-center justify-center shrink-0 backdrop-blur-md">
                        <i class="fa-solid ${guide.icon} text-sm"></i>
                    </div>
                    <span class="text-[11px] font-medium text-slate-300 truncate">${escapeHtml(guide.agency)}</span>
                </div>
            </div>

            <!-- Card Content -->
            <div class="p-5 flex-grow flex flex-col">
                <h3 onclick="openGuideModal('${guide.id}')" class="font-display font-bold text-lg text-white group-hover:text-uganda-yellow transition-colors cursor-pointer line-clamp-2 leading-snug">
                    ${escapeHtml(guide.title)}
                </h3>
                <p class="mt-2 text-xs text-slate-400 line-clamp-2 leading-relaxed flex-grow">
                    ${escapeHtml(guide.description)}
                </p>

                <!-- Metadata Tags -->
                <div class="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5 text-[11px] text-slate-400">
                    <div class="flex items-center gap-2">
                        <i class="fa-solid fa-coins text-emerald-400 w-3.5 text-center"></i>
                        <span class="truncate">${escapeHtml(guide.cost)}</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <i class="fa-regular fa-clock text-amber-400 w-3.5 text-center"></i>
                        <span class="truncate">${escapeHtml(guide.time)}</span>
                    </div>
                </div>

                <!-- Card Actions -->
                <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                    <button onclick="openGuideModal('${guide.id}')" class="flex-1 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5">
                        <span>Quick View (${totalSteps} Steps)</span>
                        ${doneCount > 0 ? `<span class="px-1.5 py-0.5 text-[10px] rounded bg-emerald-500/20 text-emerald-300">${doneCount}/${totalSteps}</span>` : ''}
                    </button>
                    <a href="guides/${guide.id}.html" title="Open Full Standalone Guide Page" class="py-2 px-3 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-uganda-yellow text-xs font-semibold transition-colors flex items-center gap-1">
                        <span>Full Page</span>
                        <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    </a>
                </div>
            </div>
        </article>
        `;
    }).join('');
}

// Filter by Category
function filterCategory(category) {
    showingBookmarksOnly = false;
    currentCategory = category;

    document.querySelectorAll('.cat-btn').forEach(btn => {
        if (btn.dataset.cat === category) {
            btn.className = 'cat-btn active px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm bg-slate-100 text-slate-900';
        } else {
            btn.className = 'cat-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 transition-all';
        }
    });

    renderGuides();
}

// Handle Search Input
function handleSearch() {
    const input = document.getElementById('search-input');
    const clearBtn = document.getElementById('clear-search');
    searchQuery = input.value;

    if (searchQuery.length > 0) {
        clearBtn.classList.remove('hidden');
    } else {
        clearBtn.classList.add('hidden');
    }

    renderGuides();
}

function clearSearch() {
    const input = document.getElementById('search-input');
    input.value = '';
    searchQuery = '';
    document.getElementById('clear-search').classList.add('hidden');
    renderGuides();
}

function resetFilters() {
    showingBookmarksOnly = false;
    clearSearch();
    filterCategory('All');
}

// Bookmarks Handling
function toggleBookmark(guideId) {
    const index = savedGuides.indexOf(guideId);
    if (index === -1) {
        savedGuides.push(guideId);
        showToast('Guide saved to your bookmarks', 'fa-bookmark text-uganda-yellow');
    } else {
        savedGuides.splice(index, 1);
        showToast('Removed from saved guides', 'fa-circle-info text-slate-400');
    }

    localStorage.setItem('ugastep_saved_guides', JSON.stringify(savedGuides));
    updateSavedCount();
    renderGuides();

    if (currentModalGuideId === guideId) {
        updateModalBookmarkBtn(guideId);
    }
}

function toggleBookmarkCurrent() {
    if (currentModalGuideId) {
        toggleBookmark(currentModalGuideId);
    }
}

function updateSavedCount() {
    const badge = document.getElementById('saved-count');
    if (badge) badge.textContent = savedGuides.length;
}

function scrollToBookmark() {
    showingBookmarksOnly = !showingBookmarksOnly;
    if (showingBookmarksOnly) {
        document.querySelectorAll('.cat-btn').forEach(btn => {
            btn.className = 'cat-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 transition-all';
        });
        showToast('Showing saved guides', 'fa-bookmark text-uganda-yellow');
    } else {
        filterCategory(currentCategory);
    }
    renderGuides();
    document.getElementById('guides-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Detailed Guide Modal Logic
function openGuideModal(guideId) {
    const guide = guidesData.find(g => g.id === guideId);
    if (!guide) return;

    currentModalGuideId = guideId;

    document.getElementById('modal-category').textContent = guide.category;
    document.getElementById('modal-agency').textContent = guide.agency;
    document.getElementById('modal-title').textContent = guide.title;
    document.getElementById('modal-cost').textContent = guide.cost;
    document.getElementById('modal-time').textContent = guide.time;
    document.getElementById('modal-location').textContent = guide.location;
    document.getElementById('modal-location').title = guide.location;

    const linkEl = document.getElementById('modal-link');
    linkEl.href = guide.link;

    const iconBg = document.getElementById('modal-icon-bg');
    iconBg.className = `w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0 shadow-sm border ${guide.color}`;
    document.getElementById('modal-icon').className = `fa-solid ${guide.icon}`;

    document.getElementById('modal-description').textContent = guide.description;

    // Render Documents
    const docsContainer = document.getElementById('modal-docs');
    docsContainer.innerHTML = guide.documents.map(doc => `
        <div class="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950 border border-slate-800/80 text-slate-300">
            <i class="fa-solid fa-file-circle-check text-emerald-400 mt-0.5 shrink-0"></i>
            <span>${escapeHtml(doc)}</span>
        </div>
    `).join('');

    // Render Steps
    renderModalSteps(guide);
    updateModalBookmarkBtn(guideId);

    const modal = document.getElementById('guide-modal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function renderModalSteps(guide) {
    const stepsContainer = document.getElementById('modal-steps-container');
    const guideProgress = completedSteps[guide.id] || [];

    document.getElementById('step-progress').textContent = `${guideProgress.length}/${guide.steps.length} completed`;

    stepsContainer.innerHTML = guide.steps.map((step, idx) => {
        const isDone = guideProgress.includes(idx);
        const formattedDesc = formatStepText(step.desc);

        return `
        <div class="p-4 sm:p-5 rounded-2xl border transition-all ${isDone ? 'bg-emerald-950/20 border-emerald-800/50' : 'bg-slate-950 border-slate-800'}">
            <div class="flex items-start gap-3.5">
                <button onclick="toggleStepDone('${guide.id}', ${idx})" 
                    class="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs transition-all border ${isDone ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-uganda-yellow hover:text-uganda-yellow'}">
                    ${isDone ? '<i class="fa-solid fa-check"></i>' : idx + 1}
                </button>
                <div class="flex-1 min-w-0">
                    <div class="flex items-center justify-between gap-2">
                        <h5 class="font-display font-bold text-base ${isDone ? 'text-emerald-300 line-through opacity-80' : 'text-white'}">${escapeHtml(step.title)}</h5>
                    </div>
                    <div class="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2">
                        ${formattedDesc}
                    </div>
                    ${step.image ? `<img src="${step.image}" alt="${escapeHtml(step.title)}" class="mt-3 rounded-xl max-h-48 object-cover border border-slate-800" loading="lazy">` : ''}
                </div>
            </div>
        </div>
        `;
    }).join('');
}

function toggleStepDone(guideId, stepIndex) {
    if (!completedSteps[guideId]) {
        completedSteps[guideId] = [];
    }

    const idx = completedSteps[guideId].indexOf(stepIndex);
    if (idx === -1) {
        completedSteps[guideId].push(stepIndex);
    } else {
        completedSteps[guideId].splice(idx, 1);
    }

    localStorage.setItem('ugastep_completed_steps', JSON.stringify(completedSteps));

    const guide = guidesData.find(g => g.id === guideId);
    if (guide) {
        renderModalSteps(guide);
        renderGuides();
    }
}

function updateModalBookmarkBtn(guideId) {
    const btn = document.getElementById('bookmark-btn');
    const isSaved = savedGuides.includes(guideId);
    if (isSaved) {
        btn.innerHTML = `<i class="fa-solid fa-bookmark text-uganda-yellow"></i><span>Saved</span>`;
    } else {
        btn.innerHTML = `<i class="fa-regular fa-bookmark"></i><span>Save Guide</span>`;
    }
}

function closeModal() {
    document.getElementById('guide-modal').classList.add('hidden');
    document.body.style.overflow = '';
    currentModalGuideId = null;
}

// Other Modals
function showFeedbackModal() {
    document.getElementById('feedback-modal').classList.remove('hidden');
}
function closeFeedbackModal() {
    document.getElementById('feedback-modal').classList.add('hidden');
}
function handleSuggestSubmit(e) {
    e.preventDefault();
    e.target.reset();
    closeFeedbackModal();
    showToast('Thank you! Your guide suggestion has been received.', 'fa-circle-check text-emerald-400');
}

function openSupportModal() {
    document.getElementById('support-modal').classList.remove('hidden');
}
function closeSupportModal() {
    document.getElementById('support-modal').classList.add('hidden');
}
function handleContactSubmit(e) {
    e.preventDefault();
    e.target.reset();
    closeSupportModal();
    showToast('Support message sent! We will respond shortly.', 'fa-circle-check text-emerald-400');
}

function openTermsModal() {
    document.getElementById('terms-modal').classList.remove('hidden');
}
function closeTermsModal() {
    document.getElementById('terms-modal').classList.add('hidden');
}

function openPrivacyModal() {
    document.getElementById('privacy-modal').classList.remove('hidden');
}
function closePrivacyModal() {
    document.getElementById('privacy-modal').classList.add('hidden');
}

// Toast Notification
let toastTimeout;
function showToast(message, iconClass = 'fa-circle-check text-emerald-400') {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-msg');
    const toastIcon = document.getElementById('toast-icon');

    toastMsg.textContent = message;
    toastIcon.className = `fa-solid ${iconClass}`;

    toast.classList.remove('translate-y-20', 'opacity-0');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
}

// Helpers
function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function formatStepText(text) {
    const escaped = escapeHtml(text);
    return escaped
        .replace(/(WHERE TO GO:|WHAT TO DO:|WHAT TO DO \(Mobile Money\):|WHAT TO DO \(Bank\):|WHAT'S NEXT:|EXAMPLE:|FEES:)/g, '<strong class="text-uganda-yellow font-semibold">$1</strong>')
        .replace(/\n/g, '<br>');
}

// Close modals on Escape key or backdrop click
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
        closeFeedbackModal();
        closeSupportModal();
        closeTermsModal();
        closePrivacyModal();
    }
});

['guide-modal', 'feedback-modal', 'support-modal', 'terms-modal', 'privacy-modal'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
        el.addEventListener('click', (e) => {
            if (e.target === el) {
                el.classList.add('hidden');
                document.body.style.overflow = '';
            }
        });
    }
});
