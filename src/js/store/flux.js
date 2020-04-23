const getState = ({ getStore, setStore }) => {
	return {
		store: {
			cart: [],
			product: []
		},

		actions: {
			addToCart: (elementId, name) => {
				const store = getStore();
				setStore({ cart: store.cart.concat({ Index: elementId, name: name }) });
			},
			deleteFromCart: (elementId, index) => {
				const store = getStore();
				setStore({ cart: store.cart.filter((item, i) => i !== index) });
			},
			loadSomeData: () => {
				fetch("https://3000-ea7fbada-80c0-445f-b440-e201d48b02f6.ws-us02.gitpod.io/product")
					.then(resp => resp.json())
					.then(data => {
						const store = getStore();
						setStore({ store: product });
						console.log(data);
					});
			}
		}
	};
};

export default getState;
