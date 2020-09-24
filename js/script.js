const seccionesPagina = new fullpage('#fullpage', {
	//   :::::: Opciones Basicas
	// ──────────────────────────────────────────────────
		 autoScrolling: true, // Se activa el scroll.
		 fitToSection: false, // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
		 fitToSectionDelay: 300, // Delay antes de acomodar la seccion automaticamente.
		 easing: 'easeInOutCubic', // Funcion de tiempo de la animacion.
		 scrollingSpeed: 700, // Velocidad del scroll. Valores: en milisegundos.
		 css3: true, // Si usara CSS3 o javascript.
		 easingcss3: 'ease-out', // Curva de velocidad del efecto.
		loopBottom: false, // Regresa a la primera seccion
		 scrollBar: true,
		 
		 
// ──────────────────────────────────────────────────
	//   :::::: Barra de navegación
	// ──────────────────────────────────────────────────
		 navigation: true, // Muesta la barra de navegación.
		 menu: '#menu', // Menu de navegación.
		 anchors: ['home', 'portfolio', 'contact'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
		 navigationTooltips: ['Home', 'Portfolio', 'Contact'], // Tooltips que mostrara por cada boton.
		 showActiveTooltip: false, // Mostrar tooltip activa.
		 
		 // ──────────────────────────────────────────────────
	//   :::::: Secciones
	// ──────────────────────────────────────────────────
		 sectionsColor : ['#000', '#c2c2c2', '#000'], // Color de fondo de cada seccion.
		 verticalCentered: true, // Si alineara de forma vertical los contenidos de cada seccion.

//   :::::: Slides
	// ──────────────────────────────────────────────────
		 controlArrows: true, // Flechas del slide
		 slidesNavigation: false, // Indicadores del slide
		 // afterLoad: funcion(origin, destination){
		 // 	if(destination.anchor == 'contacto'){
		 // 		document.querySelector('.footer h2').style.opacity = 1;
		 // 	}
		 // }

});

//selectors

const mail = document.querySelector('.fa-envelope');
const close = document.querySelector('.close');
const contact = document.querySelector('.contact');
const preview1 = document.getElementById('preview1')
const preview2 = document.getElementById('preview2')
const preview3 = document.getElementById('preview3')
const preview4 = document.getElementById('preview4')
const preview5 = document.getElementById('preview5')
const preview6 = document.getElementById('preview6')

//toggle mailto

mail.addEventListener('click', () => {

	contact.style.display = "initial";

})

close.addEventListener('click', () => {
	
	contact.style.display = 'none';
	
})

function iOS() {
	return [
		'iPad Simulator',
		'iPhone Simulator',
		'iPod Simulator',
		'iPad',
		'iPhone',
		'iPod'
	].includes(navigator.platform)
		// iPad on iOS 13 detection
		|| (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

if (iOS() === true) {
	preview1.src = './media/item1.jpg';
	preview2.src = './media/item2.jpg';
	preview3.src = './media/item3.jpg';
	preview4.src = './media/item4.jpg';
	preview5.src = './media/item5.jpg';
	preview6.src = './media/item6.jpg';
}
