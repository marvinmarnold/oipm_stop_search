check.vars(c("stops.all", "stops.for.year"))

stops.all.by.district <- stops.all %>% group_by(District) %>% summarise(count = n())
stops.year.by.district <- stops.for.year %>% group_by(District) %>% summarise(count = n())

stops.by.district = data.frame(
  District = stops.all.by.district$District,
  All.Stops = stops.all.by.district$count,
  Stops.For.Year = stops.year.by.district$count
)

p.stops.all.by.district <- plot_ly(stops.by.district,
                                   type = "bar",
                                   x = ~District,
                                   y = ~All.Stops,
                                   name = "Stops All Years") %>%
  
  layout(
    xaxis = list(dtick = 1),
    yaxis = list(title = "Number of Stops")
  )

p.stops.all.by.district
gen.plotly.json(p.stops.all.by.district, "all-stops-by-district")

p.stops.year.by.district <- plot_ly(stops.by.district,
                                   type = "bar",
                                   x = ~District,
                                   y = ~Stops.For.Year,
                                   name = paste("Stops in", analysis.year)) %>%
  
  layout(
    xaxis = list(dtick = 1),
    yaxis = list(title = "Number of Stops")
  )

p.stops.year.by.district
gen.plotly.json(p.stops.year.by.district, "year-stops-by-district")
