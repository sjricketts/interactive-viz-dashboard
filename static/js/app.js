
// function to build charts
function makeCharts(vals) {
  // read .json data
  d3.json("samples.json").then((data) => {
    var samples = data.samples;
    var resultArray = samples.filter((sampleObj) => sampleObj.id == vals);
    var result = resultArray[0];
    // console.log(result);
    var sampleValues = result.sample_values;
    // Only take top 10
    var filteredValues = sampleValues.slice(0, 10);
    // Sort descending
    filteredValues = filteredValues.reverse();
    var otuIds = result.otu_ids;
    var otuLabels = result.otu_labels;
    // metadata
    var metadata = data.metadata;
    var metadataArray = metadata.filter((sampleObj) => sampleObj.id == vals);
    var metadataResult = metadataArray[0];

    // Create trace
    let trace1 = {
      x: filteredValues,
      y: otuIds,
      text: otuLabels,
      type: "bar",
      orientation: "h",
    };

    let traces = [trace1];
    let layout = {};
    
    // Create bar chart
    Plotly.newPlot("bar", traces, layout);
  });
};