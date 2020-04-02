import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/home.scss";

export class SoapScrubs extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<React.Fragment>
							<div>soap scrub page</div>
						</React.Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}

SoapScrubs.propTypes = {
	history: PropTypes.object
};
