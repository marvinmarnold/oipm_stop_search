import React from 'react'
import Link from 'gatsby-link'
import Plot from 'react-plotly.js';

// const IndexPage = () => (
//   <div>
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <Link to="/page-2/">Go to page 2</Link>
//   </div>
// )

class IndexPage extends React.Component {
	componentDidMount() {
		
		console.log("COMPONENET ")
		// plotly.plot(data, layout, function (err, msg) {
		// 	if (err) return console.log(err);
		// 	console.log(msg);
		// });
	}

	render() {

		return (
		  <div>
		  <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+points',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
      />
		    <h1 id="tester">Hi people</h1>
		    <p>Welcome to your new Gatsby site.</p>
		    <p>Now go build something great.</p>
		    <Link to="/page-2/">Go to page 2</Link>
		  </div>
		  );
	}
}
export default IndexPage



