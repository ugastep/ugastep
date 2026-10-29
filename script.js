// Global Application State
let currentCategory = 'All';
let searchQuery = '';
let selectedGuide = null;
let bookmarks = JSON.parse(localStorage.getItem('ugastep_bookmarks')) || [];
let completedSteps = JSON.parse(localStorage.getItem('ugastep_progress')) || {};

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
    renderGuides();
    updateBookmarkCount();
});

// Render Guides Grid
function renderGuides() {
    const grid = document.getElementById('guides-grid');
    const noResults = document.getElementById('no-results');
    const countLabel = document.getElementById('guide-count-label');
    const sectionTitle = document.getElementById('section-title');

    // Filter logic
    const filtered = guidesData.filter(guide => {
        const matchesCat = currentCategory === 'All' || guide.category === currentCategory;
        const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              guide.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              guide.agency.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '';
        noResults.classList.remove('hidden');
        countLabel.textContent = `Showing 0 results`;
        return;
    }

    noResults.classList.add('hidden');
    countLabel.textContent = `Showing ${filtered.length} practical UgaStep procedure${filtered.length === 1 ? '' : 's'}`;

    grid.innerHTML = filtered.map(guide => {
        const isBookmarked = bookmarks.includes(guide.id);
        return `
            <div onclick="openGuideModal('${guide.id}')" class="bg-white rounded-2xl border border-slate-200/80 hover:border-slate-300 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group relative overflow-hidden">
                <!-- Top Accent Line -->
                <div class="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent group-hover:from-uganda-yellow group-hover:to-uganda-red transition-all"></div>

                <div>
                    <div class="flex items-center justify-between mb-4">
                        <div class="w-12 h-12 rounded-xl ${guide.color} border flex items-center justify-center text-xl shadow-sm">
                            <i class="fa-solid ${guide.icon}"></i>
                        </div>
                        <span class="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">${guide.category}</span>
                    </div>
                    
                    <span class="text-xs font-semibold text-slate-400 block mb-1">${guide.agency}</span>
                    <h3 class="font-display font-bold text-lg text-slate-900 group-hover:text-uganda-darkRed transition-colors line-clamp-2 mb-2">
                        ${guide.title}
                    </h3>
                    <p class="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                        ${guide.description}
                    </p>
                </div>

                <div class="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                    <span class="flex items-center gap-1.5"><i class="fa-regular fa-clock text-amber-500"></i> ${guide.time}</span>
                    <span class="text-slate-900 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-semibold">
                        View Steps <i class="fa-solid fa-arrow-right text-[10px]"></i>
                    </span>
                </div>
            </div>
        `;
    }).join('');
}

// Search & Filter Handlers
function handleSearch() {
    const input = document.getElementById('search-input');
    const clearBtn = document.getElementById('clear-search');
    searchQuery = input.value.trim();

    if (searchQuery.length > 0) {
        clearBtn.classList.remove('hidden');
    } else {
        clearBtn.classList.add('hidden');
    }
    renderGuides();
}

function clearSearch() {
    document.getElementById('search-input').value = '';
    document.getElementById('clear-search').classList.add('hidden');
    searchQuery = '';
    renderGuides();
}

function filterCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll('.cat-btn').forEach(btn => {
        if (btn.getAttribute('data-cat') === cat) {
            btn.className = "cat-btn active px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-sm bg-slate-900 text-white";
        } else {
            btn.className = "cat-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-all";
        }
    });
    document.getElementById('section-title').textContent = cat === 'All' ? 'All Step-by-Step Guides' : `${cat} Guides`;
    renderGuides();
}

// Modal Control
function openGuideModal(id) {
    selectedGuide = guidesData.find(g => g.id === id);
    if (!selectedGuide) return;

    document.getElementById('modal-title').textContent = selectedGuide.title;
    document.getElementById('modal-category').textContent = selectedGuide.category;
    document.getElementById('modal-agency').textContent = selectedGuide.agency;
    document.getElementById('modal-cost').textContent = selectedGuide.cost;
    document.getElementById('modal-time').textContent = selectedGuide.time;
    document.getElementById('modal-location').textContent = selectedGuide.location;
    document.getElementById('modal-description').textContent = selectedGuide.description;
    
    const linkEl = document.getElementById('modal-link');
    linkEl.href = selectedGuide.link;

    const iconBg = document.getElementById('modal-icon-bg');
    iconBg.className = `w-12 h-12 rounded-2xl flex items-center justify-center text-xl shrink-0 shadow-sm ${selectedGuide.color}`;
    document.getElementById('modal-icon').className = `fa-solid ${selectedGuide.icon}`;

    // Render Docs
    const docsContainer = document.getElementById('modal-docs');
    docsContainer.innerHTML = selectedGuide.documents.map(doc => `
        <div class="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700">
            <i class="fa-solid fa-circle-check text-emerald-500 shrink-0"></i>
            <span>${doc}</span>
        </div>
    `).join('');

    renderModalSteps();
    updateBookmarkButtonState();

    document.getElementById('guide-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('guide-modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
    selectedGuide = null;
}

// Render Steps inside Modal with Checklist State
function renderModalSteps() {
    if (!selectedGuide) return;
    const container = document.getElementById('modal-steps-container');
    
    if (!completedSteps[selectedGuide.id]) {
        completedSteps[selectedGuide.id] = [];
    }

    const completedList = completedSteps[selectedGuide.id];
    const total = selectedGuide.steps.length;
    const doneCount = completedList.length;

    document.getElementById('step-progress').textContent = `${doneCount}/${total} completed`;

    container.innerHTML = selectedGuide.steps.map((step, index) => {
        const isChecked = completedList.includes(index);
        return `
            <div onclick="toggleStep(${index})" class="p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${isChecked ? 'bg-emerald-50/40 border-emerald-200 text-slate-700' : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800'}">
                <div class="w-7 h-7 rounded-full flex items-center justify-center shrink-0 font-bold text-xs mt-0.5 ${isChecked ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-700'}">
                    ${isChecked ? '<i class="fa-solid fa-check"></i>' : index + 1}
                </div>
                <div class="flex-grow">
                    <h5 class="font-display font-bold text-sm ${isChecked ? 'line-through text-slate-500' : 'text-slate-900'}">${step.title}</h5>
                    <p class="text-xs text-slate-500 mt-1 leading-relaxed">${step.desc}</p>
                </div>
            </div>
        `;
    }).join('');
}

function toggleStep(index) {
    if (!selectedGuide) return;
    if (!completedSteps[selectedGuide.id]) {
        completedSteps[selectedGuide.id] = [];
    }

    const list = completedSteps[selectedGuide.id];
    const pos = list.indexOf(index);

    if (pos > -1) {
        list.splice(pos, 1);
    } else {
        list.push(index);
    }

    localStorage.setItem('ugastep_progress', JSON.stringify(completedSteps));
    renderModalSteps();
}

// Bookmarking System
function toggleBookmarkCurrent() {
    if (!selectedGuide) return;
    const index = bookmarks.indexOf(selectedGuide.id);

    if (index > -1) {
        bookmarks.splice(index, 1);
    } else {
        bookmarks.push(selectedGuide.id);
    }

    localStorage.setItem('ugastep_bookmarks', JSON.stringify(bookmarks));
    updateBookmarkCount();
    updateBookmarkButtonState();
}

function updateBookmarkButtonState() {
    if (!selectedGuide) return;
    const btn = document.getElementById('bookmark-btn');
    const isBookmarked = bookmarks.includes(selectedGuide.id);

    if (isBookmarked) {
        btn.innerHTML = `<i class="fa-solid fa-bookmark text-amber-500"></i><span>Saved Guide</span>`;
        btn.className = "px-4 py-2 bg-amber-50 border border-amber-300 rounded-xl text-xs font-bold text-amber-900 transition-all flex items-center gap-2";
    } else {
        btn.innerHTML = `<i class="fa-regular fa-bookmark"></i><span>Save Guide</span>`;
        btn.className = "px-4 py-2 bg-white border border-slate-300 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 transition-all flex items-center gap-2";
    }
}

function updateBookmarkCount() {
    document.getElementById('saved-count').textContent = bookmarks.length;
}

function scrollToBookmark() {
    currentCategory = 'All';
    searchQuery = '';
    document.getElementById('search-input').value = '';
    
    // Filter to show only bookmarked guides
    const grid = document.getElementById('guides-grid');
    const noResults = document.getElementById('no-results');
    const countLabel = document.getElementById('guide-count-label');
    const sectionTitle = document.getElementById('section-title');

    sectionTitle.textContent = "Saved Guides";
    const filtered = guidesData.filter(g => bookmarks.includes(g.id));

    if (filtered.length === 0) {
        grid.innerHTML = '';
        noResults.classList.remove('hidden');
        countLabel.textContent = `Showing 0 saved guides`;
        window.scrollTo({ top: 400, behavior: 'smooth' });
        return;
    }

    noResults.classList.add('hidden');
    countLabel.textContent = `Showing ${filtered.length} saved guide${filtered.length === 1 ? '' : 's'}`;

    grid.innerHTML = filtered.map(guide => `
        <div onclick="openGuideModal('${guide.id}')" class="bg-white rounded-2xl border border-slate-200/80 hover:border-slate-300 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group relative overflow-hidden">
            <div class="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent group-hover:from-uganda-yellow group-hover:to-uganda-red transition-all"></div>
            <div>
                <div class="flex items-center justify-between mb-4">
                    <div class="w-12 h-12 rounded-xl ${guide.color} border flex items-center justify-center text-xl shadow-sm">
                        <i class="fa-solid ${guide.icon}"></i>
                    </div>
                    <span class="px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold"><i class="fa-solid fa-bookmark mr-1"></i> Saved</span>
                </div>
                <span class="text-xs font-semibold text-slate-400 block mb-1">${guide.agency}</span>
                <h3 class="font-display font-bold text-lg text-slate-900 group-hover:text-uganda-darkRed transition-colors line-clamp-2 mb-2">
                    ${guide.title}
                </h3>
                <p class="text-xs text-slate-500 line-clean-2 leading-relaxed mb-4">
                    ${guide.description}
                </p>
            </div>
            <div class="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-500">
                <span class="flex items-center gap-1.5"><i class="fa-regular fa-clock text-amber-500"></i> ${guide.time}</span>
                <span class="text-slate-900 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-semibold">
                    View Steps <i class="fa-solid fa-arrow-right text-[10px]"></i>
                </span>
            </div>
        </div>
    `).join('');

    window.scrollTo({ top: 400, behavior: 'smooth' });
}

// Modal Management for Feedback / Support
function showFeedbackModal() {
    document.getElementById('feedback-modal').classList.remove('hidden');
}

function closeFeedbackModal() {
    document.getElementById('feedback-modal').classList.add('hidden');
}

function handleSuggestSubmit(e) {
    e.preventDefault();
    alert('Thank you! Your suggested guide has been submitted for review.');
    closeFeedbackModal();
    e.target.reset();
}

function openSupportModal() {
    document.getElementById('support-modal').classList.remove('hidden');
}

function closeSupportModal() {
    document.getElementById('support-modal').classList.add('hidden');
}

function handleContactSubmit(e) {
    e.preventDefault();
    alert('Message received! Our UgaStep team will get back to you via WhatsApp or Email shortly.');
    closeSupportModal();
    e.target.reset();
}