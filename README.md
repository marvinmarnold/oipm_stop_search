# OIPM Stop & Search Report
A static website using New Orleans Police Department Stop & Search data from [data.nola.gov](https://datadriven.nola.gov/home/).

### Work in progress
This project is currently under development. All results should be considered unreliable.

See a preview [here](https://marvinmarnold.github.io/oipm_stop_search), or follow the instructions below to create a copy of the website from your own computer.

## Getting Started

### Overview
This project contains two different tech stacks. The data analysis was done using R to generate Plotly compatible JSON. That JSON is then consumed by a React website built with GatsbyJS in order to display graphs on a website.

The top level directory corresponds to the React website. Data analysis code i in the `R/` directory.

### Get the code
```
git clone https://github.com/marvinmarnold/oipm_stop_search
```

### Get the data
1. Download the most recent Stop and Search data [here](https://data.nola.gov/Public-Safety-and-Preparedness/Stop-and-Search-Field-Interviews-/kitu-f4uy). 
2. Select 'Export' -> 'CSV' (not Excel version).
3. The file is currently over 150MB. It will take some time to download.
4. Move and rename the file from its downloaded location to `oipm_stop_search/R/src_data/StopSearch.csv`.

### Installing dependencies
Download Gatsby to build the website. Download R to explore the data.

- Data analysis was written in R with R Studio. 
- Website written with React and compiled with [Gatsby](https://www.gatsbyjs.org/).
- Visualizations using [Plotly](https://plot.ly/products/react/)
- [Mapbox](https://www.mapbox.com/) for Maps.  

### Preview website
```
cd oipm_stop_search
gatsby serve
```

Open up your browser at [localhost:8000](localhost:8000)

### Explore the data

#### R dependencies
**TODO** How to install them

```R
install.packages("devtools")
devtools::install_github('marvinmarnold/roipm')
install.packages("dplyr")
install.packages("tidyr")
install.packages("plotly")
install.packages("anytime")
install.packages("leaflet")

```
#### Environment

Add this line to your `~/.bashrc` file: `export STOP_SEARCH_DIR=/PATH/TO/PROJECT/oipm_stop_search/R`

#### Regenerate analysis
The main entry point to all data analysis is in `R/stop_search.R`. To execute all the analysis, run the code below.

```
cd oipm_stop_search
Rscript R/stop_search.R
```

