import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import PropTypes from "prop-types";
import "../../styles/home.scss";

export const Home = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			{store.product.map((item, index) => {
				return (
					<>
						<div key={index} className="card mt-5">
							{item.name}, {item.price}
						</div>
						<button type="button btn-primary" onClick={() => actions.addToCart(index, item)}>
							add to cart
						</button>
					</>
				);
			})}
		</div>
	);
};

Home.propTypes = {
	history: PropTypes.object
};
