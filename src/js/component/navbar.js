import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export default function Navbar(props) {
	const [search, setSearch] = useState("");

	function handleSearchChange(e) {
		setSearch(e.target.placeholder);
	}

	return (
		<>
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
					<input
						classNmae="form-control mr-sm-2"
						type="search"
						placeholder={search}
						aria-label="Search"
						onChange={handleSearchChange}
					/>
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
						Search
					</button>
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
		</>
	);
}
