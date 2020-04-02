import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<React.Fragment>
				<div className="container">
					<nav className="navbar navbar-expand-md navbar-light bg-secondary">
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav">
								<li className="nav-item">
									<Link className="nav-link" to="/">
										Home
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/bodyButters">
										Body Butters
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/bodyWash">
										Body Wash
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/perfumeOils">
										Perfume Oils
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/soapScrubs">
										Soap Scrubs
									</Link>
								</li>
							</ul>
						</div>
						<div className="nav-item mb-2">
							<Context.Consumer>
								{({ store }) => {
									return (
										<Link className="badge badge-success ml-2 mt-2" to="/cart">
											Cart {store.cart.length}
										</Link>
									);
								}}
							</Context.Consumer>
						</div>
					</nav>
				</div>
			</React.Fragment>
		);
	}
}
