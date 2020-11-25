var app = new Vue({
	el: '#app',
	data: {
		chattons: [],
		nom: "",
		age: 0,
		description: ""
	},
	created: function() {
		this.recupererListeChattons();
	},
	methods: {
		recupererListeChattons: function() {
			let vm = this;
			axios.get('/chattons').then(function(reponse) {
				if (reponse.status !== 200) {
					alert('Impossible de récupérer la liste des chattons :(');
					return;
				}
				console.log(reponse.data)
				reponse.data.forEach(function(chatton) {
					vm.chattons.push(chatton);
				});
			});
		},
		ajouterChatton: function() {
			let vm = this;
			axios.post('/chattons', {
				nom: vm.nom,
				age: vm.age,
				description: vm.description
			}).then(function(reponse) {
				console.log(reponse)
			});
		}
	}
})