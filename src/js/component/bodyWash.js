import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/home.scss";

export class BodyWash extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return <React.Fragment></React.Fragment>;
				}}
			</Context.Consumer>
		);
	}
}

BodyWash.propTypes = {
	history: PropTypes.object
};
