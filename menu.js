// mobile menu
const mobileNav = document.getElementById('mobileNav');
const mobileMenu = document.getElementById('mobileMenu');

mobileNav.onclick = () => {
	mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
};
