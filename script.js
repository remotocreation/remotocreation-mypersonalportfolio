const header = document.querySelector("header");
window.addEventListener("scroll", function()
{
	header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.nav-list');

menu.onclick = () =>
{
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

window.onscroll = () =>
{
	menu.classList.remove('bx-x');
	navlist.classList.remove('open');
};
document.onkeydown = function(e)
		{
			if(event.keyCode == 123)
			{
				return false;
			}
			if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0))
			{
				return false;
			}
			if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0))
			{
				return false;
			}
			if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))
			{
				return false;
			}
		}