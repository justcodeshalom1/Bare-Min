import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import PropTypes from "prop-types";
import "../../styles/home.scss";

export const Cart = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			{store.cart.map((item, index) => {
				return (
					<>
						<div key={index} className="card mt-5">
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">{item.price}</p>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the cards
									content.
								</p>
								<button type="button btn-primary" onClick={() => actions.deleteFromCart(item, index)}>
									Delete
								</button>
							</div>
						</div>
					</>
				);
			})}
		</div>
	);
};

Cart.propTypes = {
	history: PropTypes.object
};
