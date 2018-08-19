########################################################################################################
################################## OIPM STOP & SEARCH ANALYSIS  ########################################

# Reset environment
rm(list = ls())

setwd(Sys.getenv("WORKING_DIR"))

############################################ SETUP ENV ##################################################

# If source data is available, set to true.
# If the only data available is coming from a public repository, this should probably be set to false.
RECLEAN_DATA <- TRUE

# Timeframe that analysis should cover
analysis.start.year <- 2010
analysis.end.year <- 2018

stops.csv <- "src_data/StopSearch_DNG_20180721.csv"
clean.stops.csv <- "clean_data/stops_clean_recent.csv"
police.districts.csv <- "clean_data/Police_Districts.geojson"

########################################################################################################
######################################## LOAD DEPENDENCIES #############################################

#devtools::install_github('marvinmarnold/roipm')
require(roipm)
require(dplyr)
require(tidyr)
require(anytime)
require(plotly)
require(leaflet)
require(jsonlite)

########################################################################################################
############################################# LOAD DATA ################################################

# Public data
source("analysis/police_districts.R")

# Data coming from non-public sources
if (RECLEAN_DATA) {
  source("clean_primary_stop_data.R")
} 

source("analysis/stops_by_year.R")

