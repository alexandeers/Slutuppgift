import { createApp } from 'vue'
import menujson from "./menu.json" assert { type: "json" };
// import { gsap } from '../gsap-public/minified/gsap.min.js'
// import { gsap } from 'gsap'

// fetch("js/menu.json")  
// .then(response => response.json())
// .then(json => 
//     this.menu = json
// );
      
createApp({
	data() {
		return {
			menu: menujson,
			category: 0,
			timerCount: 10,
			animationTrigger: false
		}
	},

	methods: {
		beforeEnter(el) {
			el.style.opacity = 0
			el.style.transform = "translateY(30px)"
		},

		enter(el) {
			gsap.to(el, {
				opacity: 1,
				y: 0,
				duration: 1,
				delay: el.dataset.index*0.1
			});
		}
	}
}).mount('#menuApp');