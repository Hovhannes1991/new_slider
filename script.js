let images = ['buffalo.jpg', 'cat.jpg', 'coins.jpg', 'dog.jpg', 'horse.jpg', 'icecream.jpg', 'light_house.jpg', 'map.jpg', 'rose.jpg', 'with_love.jpg' ];


let slider = document.getElementsByClassName('slider')[0];


function random(min, max){
	return Math.floor(Math.random() * (max - min) ) + min;
}

function setImages(){
	images = images.sort(() => {
	return Math.random() - Math.random();
})

	for(let i = 0; i < images.length; i++){
		let div = document.createElement('div');		
		div.classList.add('image_container');
		div.style.background = `url('src/${images[i]}')`;
		div.style.backgroundSize = 'contain';
		div.style.backgroundRepeat = 'no-repeat';
		div.style.backgroundPosition = 'center center';
		div.style.transform = `rotate(${random(-11,15)}deg)  translate(${random(-5,5)}px, ${random(-5,5)}px)`;
		slider.append(div);		
	}
}

setImages();


slider.addEventListener('click', function(){
	if(event.target.classList.contains('image_container')){
		event.target.classList.add('remove');
		let item = event.target;
		setTimeout( () => {
			slider.removeChild(item);
			if(slider.children.length == 0){
				setImages();
			}
		}, 2000)
	}		
})