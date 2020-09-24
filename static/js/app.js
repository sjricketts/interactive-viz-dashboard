
// read .json data
d3.json("samples.json").then((data) => {
  var samples = data.samples;
  var resultArray = samples.filter((sampleObj) => sampleObj.id == idx);
  var result = resultArray[0];
  console.log(result);
  var sampleValues = result.sample_values;
  var otuIds = result.otu_ids;
  var otuLabels = result.otu_labels;

  // Sort descending

  // Only take top 10

  // Create bar chart trace
  // let trace1 = {
  //     x: ,
  //     y: ,
  //     type: 'bar',
  //     orientation: 'h'
  // };
  // Use sample_values as the values for the bar chart.

  // Use otu_ids as the labels for the bar chart.

  // Use otu_labels as the hovertext for the chart.
  // let traces = [trace1];
  // let layout = {

  // };

  // Plotly.newPlot("bar", traces, layout);
});