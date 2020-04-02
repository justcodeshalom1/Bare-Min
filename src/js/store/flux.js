const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			cart: [],
			products: []
		},

		actions: {
			addToCart: (elementId, name) => {
				const store = getStore();
				setStore({ cart: store.cart.concat({ Index: elementId, name: name }) });
			},
			deleteFromCart: (elementId, index) => {
				const store = getStore();
				setStore({ cart: store.cart.filter((item, i) => i !== index) });
			}
		}
	};
};

export default getState;
