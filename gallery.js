// Quirky Pixels gallery
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalAbstract = document.getElementById('modalAbstract');
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
	if (window.scrollY > 50) 
		header.classList.add('shrink')
		else 
		header.classList.remove('shrink');
});

images.forEach(src => {
	const galleryitem = document.createElement('div');
	galleryitem.classList.add('gallery-item');
	const img = document.createElement('img');
	img.src = 'images/'+src.image;
	img.alt = 'Quirky Pixels original humorous  digital art #QuirkyPixels';
	img.onclick = () => {
		modal.style.display = 'flex';
		modalImage.src = 'images/'+src.image;
		modalName.textContent = '"' + src.name + '"';
		modalAbstract.textContent = src.abstract;
	};
	const title = document.createElement('span');
	title.textContent = src.name;
	galleryitem.appendChild( img );
	galleryitem.appendChild( title );
	gallery.appendChild(galleryitem);
});

modal.onclick = () => {
	modal.style.display = 'none';
};

const mobileNav = document.getElementById('mobileNav');
const mobileMenu = document.getElementById('mobileMenu');

mobileNav.onclick = () => {
	mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
};
