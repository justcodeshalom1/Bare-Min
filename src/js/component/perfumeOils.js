import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/home.scss";

export class PerfumeOils extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<React.Fragment>
							<div>perfume oils page</div>
						</React.Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}

PerfumeOils.propTypes = {
	history: PropTypes.object
};
