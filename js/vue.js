import { createApp } from 'vue'
import menujson from "./menu.json" assert { type: "json" };

// fetch("js/menu.json")  
// .then(response => response.json())
// .then(json => 
//     this.menu = json
// );
      
createApp({
    data() {
        return {
          menu: menujson,
          category: 0
        }
      },
    methods: {
        ChangeCategory() {
            category = 2;
        }
    }
}).mount('#menuApp');