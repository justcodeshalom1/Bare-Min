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
						<div key={index} className="card mt-5 col-4" style={{ width: "50%" }}>
							<img src="..." className="card-img-top" />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">{item.price}</p>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the cards
									content.
								</p>
								<button type="button btn-primary" onClick={() => actions.addToCart(index, item)}>
									add to cart
								</button>
							</div>
						</div>
					</>
				);
			})}
		</div>
	);
};

Home.propTypes = {
	history: PropTypes.object
};
