# OIPM Stop & Search Report
A static website using New Orleans Police Department Stop & Search data from [data.nola.gov](https://datadriven.nola.gov/home/).

### Work in progress
This project is currently under development. All results should be considered unreliable.



See a preview [here](https://marvinmarnold.github.io/oipm_stop_search), or follow the instructions below to create a copy of the website from your own computer.

## Getting Started

### Get the code
```
git clone https://github.com/marvinmarnold/oipm_stop_search
```

### Get the data
1. Download the most recent Stop and Search data [here](https://data.nola.gov/Public-Safety-and-Preparedness/Stop-and-Search-Field-Interviews-/kitu-f4uy). 
2. Select 'Export' -> 'CSV' (not Excel version).
3. **TODO**: Where to move the file

### Installing dependencies
Download Gatsby to build the website. Download R to explore the data.

- Data analysis was written in R with R Studio. 
- Website written with React and compiled with [Gatsby](https://www.gatsbyjs.org/).
- Visualizations using [Plotly](https://plot.ly/products/react/)
- Mapbox for Maps. 

### Preview website
```
cd oipm_stop_search
gatsby serve
```

Open up your browser at [localhost:8000](localhost:8000)

### Explore the data

R dependencies: require(roipm)
require(dplyr)
require(tidyr)
require(anytime)
require(plotly)
require(leaflet)



**TODO**: Instructions for setting the path

```
cd oipm_stop_search
Rscript R/stop_search.R
```

