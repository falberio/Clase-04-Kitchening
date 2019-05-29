let toggleNav = document.querySelector('.toggle-nav');
let mainNav = document.querySelector('#main-nav');




toggleNav.addEventListener('click',function(){
	if(mainNav.classList.contains('active')){
		mainNav.classList.remove('active');
	} else{
		mainNav.classList.add('active');
	};
});