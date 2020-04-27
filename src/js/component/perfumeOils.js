import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import PropTypes from "prop-types";
import "../../styles/home.scss";

export const PerfumeOils = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			{store.product.map((item, index) => {
				return (
					<>
						<div key={index} className="card mt-5">
							PerfumeOils
						</div>
					</>
				);
			})}
		</div>
	);
};

PerfumeOils.propTypes = {
	history: PropTypes.object
};
