########################################################################################################
################################## OIPM STOP & SEARCH ANALYSIS  ########################################

# Reset environment
rm(list = ls())

#setwd("/home/pili/code/oipm/oipm_stop_search/R")
#setwd(Sys.getenv("STOP_SEARCH_DIR"))

############################################ SETUP ENV ##################################################

# If source data is available, set to true.
# If the only data available is coming from a public repository, this should probably be set to false.
RECLEAN_DATA <- FALSE

# Timeframe that analysis should cover
analysis.start.year <- 2010
analysis.end.year <- 2018

stops.csv <- "src_data/StopSearch.csv"
clean.stops.csv <- "clean_data/stops_clean_recent.csv"
police.districts.csv <- "src_data/Police_Districts.geojson"

########################################################################################################
######################################## LOAD DEPENDENCIES #############################################

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

