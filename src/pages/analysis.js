import React from 'react'
import Link from 'gatsby-link'
import { Row, Col } from 'reactstrap';
import Plot from 'react-plotly.js';

import LoadingPlot from "../components/loading-plot.js";

import allStopsByDistrictJson from "../data/all-stops-by-district.json";
import yearStopsByDistrictJson from "../data/year-stops-by-district.json";


class AnalysisPage extends React.Component {
  constructor() {
    super()
    this.state = { data: null }
  }

  componentDidMount() {
    let adjustedLayout = allStopsByDistrictJson.layout
    adjustedLayout["width"] = 300
    adjustedLayout["height"] = 250

    this.setState({
      allStopsByDistrictData: allStopsByDistrictJson.data,
      allStopsByDistrictLayout: adjustedLayout
    })

    adjustedLayout = yearStopsByDistrictJson.layout
    adjustedLayout["width"] = 300
    adjustedLayout["height"] = 250

    this.setState({
      yearStopsByDistrictData: yearStopsByDistrictJson.data,
      yearStopsByDistrictLayout: adjustedLayout
    })
  }

  render() {
    return (
      <div className="py-5">
        <Row>
          <Col>
            <p>Analysis goes here</p>
          </Col>

          <Col>
            <LoadingPlot
                data={this.state.allStopsByDistrictData}
                layout={this.state.allStopsByDistrictLayout}
                config={this.state.allStopsByDistrictConfig}
            />
            <h6 className="text-center">Stops by District (since 2010)</h6>
          </Col>

          <Col>
            <LoadingPlot
                data={this.state.yearStopsByDistrictData}
                layout={this.state.yearStopsByDistrictLayout}
                config={this.state.yearStopsByDistrictConfig}
            />
            <h6 className="text-center">Stops by District (only 2018)</h6>
          </Col>
        </Row>
      </div>
    )
  }
}

export default AnalysisPage
