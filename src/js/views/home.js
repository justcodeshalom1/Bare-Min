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
					return (
						<React.Fragment>
							<div className="container">
								<div className="row row-cols-1 row-cols-md-2">
									<div className="col mb-4 mt-5">
										<div className="card">
											<img src="..." className="card-img-top" alt="..." />
											<div className="card-body">
												<h5 className="card-title">Rose</h5>
												<p className="card-text">29.99</p>
												<button
													onClick={() => actions.addToCart(index, item.name)}
													type="button"
													className="btn btn-danger float-right border-danger">
													Add TO CART
												</button>
											</div>
										</div>
									</div>
									<div className="col mb-4 mt-5">
										<div className="card">
											<img src="..." className="card-img-top" alt="..." />
											<div className="card-body">
												<h5 className="card-title">Jasmine</h5>
												<p className="card-text">24.99</p>
												<button
													onClick={() => actions.addToCart(index, item.name)}
													type="button"
													className="btn btn-danger float-right border-danger">
													Add TO CART
												</button>
											</div>
										</div>
									</div>
									<div className="col mb-4">
										<div className="card">
											<img src="..." className="card-img-top" alt="..." />
											<div className="card-body">
												<h5 className="card-title">Coco Vain/Blueberry</h5>
												<p className="card-text">49.99</p>
												<button
													onClick={() => actions.addToCart(index, item.name)}
													type="button"
													className="btn btn-danger float-right border-danger">
													Add TO CART
												</button>
											</div>
										</div>
									</div>
									<div className="col mb-4">
										<div className="card">
											<img src="..." className="card-img-top" alt="..." />
											<div className="card-body">
												<h5 className="card-title">Lavender</h5>
												<p className="card-text">34.99</p>
												<button
													onClick={() => actions.addToCart(index, item.name)}
													type="button"
													className="btn btn-danger float-right border-danger">
													Add TO CART
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</React.Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}

Home.propTypes = {
	history: PropTypes.object
};
