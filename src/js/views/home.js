import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import PropTypes from "prop-types";
import "../../styles/home.scss";

export const Home = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="jumbotron">
			{store.product.map((item, index) => {
				return <div key={index}>{item.name}</div>;
			})}
		</div>
	);
};

Home.propTypes = {
	history: PropTypes.object
};
