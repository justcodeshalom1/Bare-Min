import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/home.scss";

export class Cart extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<React.Fragment>
							<div>shopping cart page</div>
						</React.Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}

Cart.propTypes = {
	history: PropTypes.object
};
