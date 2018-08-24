import React from 'react'
import Link from 'gatsby-link'
import { Button } from 'reactstrap';

import LoadingPlot from "../components/loading-plot.js";
import stopsByYearJson from "../data/stops-by-year.json";

class IndexPage extends React.Component {
	constructor() {
    super()
    this.state = { data: null, layout: null }
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

	renderIntroText() {
		return (
			<div className="text-left">
				<p className="lead">Introduction goes here</p>
				<p className="lead">
					After you are done reading this report, check out our interactive
					<Link to="https://annual-report-2017.nolaipm.gov"> 2017 Annual Annual Report </Link>
					or one of our <Link to="http://nolaipm.gov/category/reports-public-letters/">
					other reports</Link>.
				</p>

				<p className="lead">
					The source code that created this site and all analysis is
					available	<Link to="https://github.com/marvinmarnold/oipm_stop_search">
					on Github</Link>.
				</p>
				{this.renderContinueButton()}
			</div>
		)
	}

	renderContinueButton() {
		return (
			<div className="my-5">
				<Link to="/analysis/"><Button color="primary" size="lg" block>Continue to the report</Button></Link>
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
					<LoadingPlot data={this.state.data} layout={this.state.layout} config={this.state.config} />
				</div>
			</div>
		)
	}

	render() {

		return (
		  <div className="text-center">
		    <h5 className="text-center mt-3">New Orleans Independent Police Monitor</h5>
				<h2>Stop & Frisk Report</h2>

				<h1>This is a work in progress!</h1>
				<h2>
				<strong>
				None of the numbers herein should be relied on until the report is officially released later in 2018.
				</strong>
				</h2>

				{this.renderFirstRow()}
		  </div>
		  );
	}
}
export default IndexPage
