import React from 'react'
import Link from 'gatsby-link'
import Plot from 'react-plotly.js';
import stopsByYearJson from "../data/stops-by-year.json";

class IndexPage extends React.Component {
	constructor() {
    super()
    this.state = { data: null }
  }
	componentDidMount() {
		this.setState({
			data: stopsByYearJson.data,
			layout: stopsByYearJson.layout,
			data: stopsByYearJson.data
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

	render() {

		return (
		  <div>
			{this.renderPlot()}
		    <h1 id="tester">Hi people</h1>
		    <p>Welcome to your new Gatsby site.</p>
		    <p>Now go build something great.</p>
		    <Link to="/page-2/">Go to page 2</Link>
		  </div>
		  );
	}
}
export default IndexPage

