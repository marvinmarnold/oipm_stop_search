import React from 'react'
import Link from 'gatsby-link'
import Plot from 'react-plotly.js'

import { } from 'reactstrap'

class LoadingPlot extends React.Component {

  constructor() {
    super()
    this.state = { }
  }

  render() {
    if (!this.props.data) {
			return <h1>Loading plot</h1>
		} else {
			return (
				<Plot
				    data={this.props.data}
				    layout={this.props.layout}
				    config={this.props.config}
				    onInitialized={(figure) => this.setState(figure)}
				    onUpdate={(figure) => this.setState(figure)}
				/>
			)
  		}
  }
}

export default LoadingPlot
