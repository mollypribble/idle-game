console.log("hello world")

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

maxNow = 1

document.addEventListener("DOMContentLoaded", function(){
   console.log("loaded")
	// Vue, take control of SOME ELEMENT
	new Vue({
		template: `
			<div>
				<div>
				A REACTIVE PAGE by {{name}} {{emoji}}
				</div>
			
				<div>
				Based off of COMP_SCI 396 Social AR/VR Studio by Kate Compton
				</div>

				<div>
				</div>

				<div>
				{{points}} point(s)
				</div>

				<div>
				Multiplier: {{multi}}
				</div>

				<div>
				</div>

				<div>
				<button @click="score">take</button>
				<button @click="give">give</button>
				</div>
				
				<div>
				</div>

				<div>
				your points: {{yourPoints}}
				</div>

				<div>
				opponents points: {{opponentsPoints}}
				</div>

			</div>
		`,
		el: "#app",

		methods: {
			score() {
				console.log("SCORE")
				// Increment
				this.yourPoints += (this.points * this.multi)
				// Get new point value
				this.points = getRandomInt(maxNow) + 1
				console.log(this.yourPoints)
			},
			give() {
				console.log("GIVE")
				// Increment opponents
				this.opponentsPoints += this.points
				// Recalculate maxNow
				maxNow = maxNow + Math.floor((this.opponentsPoints/(this.yourPoints+this.opponentsPoints))*2)
				this.multi = Math.floor(maxNow/10) + 1
				console.log(maxNow)
				console.log(this.multi)
				// Get new point value
				this.points = getRandomInt(maxNow) + 1
			}
		},

		// mounted() {

		// 	setInterval(() => {
		// 		console.log("Tick")
		// 		this.points += 1
		// 	}, 300)
		// },

		data: {
			points: 1,
			multi: 1,
			yourPoints: 0,
			opponentsPoints: 0,
			name: "Molly",
			emoji: "🐋"
		}
	}) 
});

