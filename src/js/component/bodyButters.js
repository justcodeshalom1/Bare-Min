import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import PropTypes from "prop-types";
import "../../styles/home.scss";

export const BodyButters = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			{store.product.map((item, index) => {
				return (
					<>
						<div key={index} className="card mt-5">
							BodyButters
						</div>
					</>
				);
			})}
		</div>
	);
};

BodyButters.propTypes = {
	history: PropTypes.object
};
