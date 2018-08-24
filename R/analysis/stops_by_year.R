check.vars(c("stops.all", "analysis.start.year", "analysis.end.year"))

real.stops <- stops.all %>% filter(event.year >= analysis.start.year, event.year <= analysis.end.year)

stops.by.year <- real.stops %>% distinct(FieldInterviewID, .keep_all = TRUE) %>% group_by(event.year) %>% summarise(count = n())
people.stopped.by.year <- real.stops %>% group_by(event.year) %>% summarise(count = n())

p.stops <- plot_ly(stops.by.year, 
        name = "Number of stops",
        x = ~event.year, 
        y = ~count, 
        type = 'scatter', mode = 'lines') %>% 
  
  add_trace(name = "Number of people stopped", y = people.stopped.by.year$count) %>%
  
  layout(
    hovermode="compare",
    yaxis = list(range=c(0,90000)))

# Write plot to JSON
gen.plotly.json(p.stops, "stops-by-year")
