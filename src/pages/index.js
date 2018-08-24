import React from 'react'
import Link from 'gatsby-link'
import Plot from 'react-plotly.js';
import { Button } from 'reactstrap';

import stopsByYearJson from "../data/stops-by-year.json";


class IndexPage extends React.Component {
	constructor() {
    super()
    this.state = { data: null }
  }
	componentDidMount() {
		let adjustedLayout = stopsByYearJson.layout
		adjustedLayout["width"] = 400
		adjustedLayout["height"] = 300

		this.setState({
			data: stopsByYearJson.data,
			layout: adjustedLayout
		})
	}

	renderPlot() {
		if (!this.state.data) {
			return <h1>Loading plot</h1>
		} else {
			return (
				<Plot
				    data={this.state.data}
				    layout={this.state.layout}
				    config={this.state.config}
				    onInitialized={(figure) => this.setState(figure)}
				    onUpdate={(figure) => this.setState(figure)}
				/>
			)
		}
	}

	renderIntroText() {
		return (
			<div>
				<p className="lead">Introduction goes here</p>
			</div>
		)
	}

	renderTeaserGraph() {
		return (
			<div>
				{this.renderPlot()}
			</div>
		)
	}

	renderContinueButton() {
		return (
			<div className="my-5">
				<Link to="/page-2/"><Button color="primary" size="lg" block>Continue to Report</Button></Link>
			</div>
		)
	}

	renderFirstRow() {
		return (
			<div className="row my-5">
				<div className="col-md">
					{this.renderIntroText()}
				</div>
				<div className="col-md">
					{this.renderTeaserGraph()}
				</div>
			</div>
		)
	}

	render() {

		return (
		  <div className="text-center">
		    <h5 className="text-center mt-3">New Orleans Independent Police Monitor</h5>
				<h2>Stop & Frisk Report</h2>

				{this.renderFirstRow()}

				{this.renderContinueButton()}
		  </div>
		  );
	}
}
export default IndexPage
