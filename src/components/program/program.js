const programContainer = document.querySelector('.-program');
const tabs = programContainer.querySelector('.tabs');
tabs && tabs.addEventListener('click', (e) => {
    const tab = e.target.closest('.tab');
    const id = tab.dataset.day;
    if(tab) {
        tabs.querySelector('.tab_active').classList.remove('tab_active');
        tab.classList.add('tab_active');
        tabContentActive(id);
    }
})

const tabContentActive = (id) => {
    document.querySelector('.tabs__content_active').classList.remove('tabs__content_active');
    document.querySelector(`[id = "${id}"]`).classList.add('tabs__content_active');
}
