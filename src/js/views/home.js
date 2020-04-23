import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar";
import PropTypes from "prop-types";
import "../../styles/home.scss";

export class Home extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return store.product.map((item, index) => {
						return;
						<div key={index}>
							<p className="card-text bg-success">{item.name}</p>
						</div>;
						console.log("it worked");
					});
				}}
			</Context.Consumer>
		);
	}
}

Home.propTypes = {
	history: PropTypes.object
};
