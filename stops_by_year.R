stops.all <- read.csv("stops_all_clean_2018-07-22.csv", stringsAsFactors = FALSE)

real.stops <- stops.all %>% filter(event.year >= 2010, event.year <= 2017)

stops.by.year <- real.stops %>% distinct(FieldInterviewID, .keep_all = TRUE) %>% group_by(event.year) %>% summarise(count = n())
people.stopped.by.year <- real.stops %>% group_by(event.year) %>% summarise(count = n())

plot_ly(stops.by.year, 
        name = "Number of stops",
        x = ~event.year, 
        y = ~count, 
        type = 'scatter', mode = 'lines') %>% 
  
  add_trace(name = "Number of people stopped", y = people.stopped.by.year$count) %>%
  
  layout(
    hovermode="compare",
    yaxis = list(range=c(0,90000)))
                                                                                                 
                                                                                                 


