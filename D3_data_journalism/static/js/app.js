// @TODO: YOUR CODE HERE!


// I had the opportunity to get this initial starter code from Erin Wills (TA) 

// Layout of this document
// 1.  Data Exploration 
// 2.  Define Functions 
//      a.  xScale(healthData, chosenXAxis):  Scales data to svg width (var width defined in Section 3: Setup SVG )
//              inputs:  (data like "healthData", an axis name like "hair_length")
//              returns:  scaled data function
//      b.  renderAxes(newXScale, xAxis): Uses the xScale function and sets new x-axis values
//              inputs:  (function like "xLinearScale", object like xAxis)
//              outputs:  returns new xAxis values
//      c.  renderCircles(circlesGroup, newXScale, chosenXAxis):  Takes grouped elements like "circlesGroup" and scales data of a given axis and assigns it to the elements attribute "cx"
//              inputs:  (grouped elements like "circlesGroup", a function like "xLinearScale", a specified axis name like "chosenXAxis" (ie "hair_length"))
//              outputs:  returns updated circlesGroup elements with new x values
//      d.  **new** rendertextCircles(textcirclesGroup, newXScale, chosenXAxis)
//              inputs: (element like "textcirclesGroup", function like "xLinearScale", a specified axis name like "chosenXAxis" (ie "hair_length"))
//              outputs:  returns an updated textcirclesGroup group element with new labels
//      e.  updateToolTip:  updates circlesGroup with textbox messages
//              inputs:  (a specified axis name like "chosenXAxis", elements like "circlesGroup")
//              outputs:  calls the D3 function tip() that helps automate the tooltip message generation - returns html that is assigned to circlesGroup and has mouseover, mouseout interactivity
// 3.  Setup SVG
// 4.  BRING in Data and ADD Structure /layout
//      a.  convert data to numericals
//      b.  scale and assign axis
//      c.  create circlsGroupAll elements and circlesGroup and textcirclesGroup elements
//      d.  create 2 x-label groups, one y-label group, one albumGroup, one tooltip group
// 5. ADD updates upon clicking axis text  
//      a. Reassign these objects/elements with new values after click
//          i.  xLinearScale
//          ii. xAxis
//          iii. circlesGroup
//          iv. textcirclesGroup
//          v.  circlesGroup/tooltip
//          vi.  x-axis styling 



// TO DO:
// 1) Fix bold of x-axis labels
// 2) Fix circle text and color
// 3) Add Y-axis selections
// 4) Adjust location of Y-axis label?
// 5) Fix tooltip display



// #######################  1.  Data Exploration  ################ //
// CSV file shows that
//  Data has following columns:  rockband, hair_length, num_hits, num_albums
//  Once read by d3.csv then it is like an array of 20 objects as key-value pair format so I will need to use foreach or arrow functions to get arrays
//  console.log(healthData) see below after d3.csv






// #################### 2.  Define Function ###############//
// function used for updating x-scale var upon click on axis label
// scaling function: https://www.d3indepth.com/scales/
function xScale(healthData, chosenXAxis) {
    // create scales
    var xLinearScale = d3.scaleLinear()
        .domain([d3.min(healthData, d => d[chosenXAxis]) * 0.8,
            d3.max(healthData, d => d[chosenXAxis]) * 1.2
        ])
        .range([0, width]); //width define at beginning of main code

    return xLinearScale;

}

// function used for updating xAxis var upon click on axis label
function renderAxes(newXScale, xAxis) {
    var bottomAxis = d3.axisBottom(newXScale);

    xAxis.transition()
        .duration(1000)
        .call(bottomAxis);

    return xAxis;
}

// function used for updating circles group with a transition to
// new circles
function renderCircles(circlesGroup, newXScale, chosenXAxis) {

    circlesGroup.transition()
        .duration(1000)
        .attr("cx", d => newXScale(d[chosenXAxis]));

    return circlesGroup;
}


// Added by Erin
// Note:  as compared to renderCircles, the attr iterator needs to match what is created initially
// So above I use "cx" and below I use "x" -  this needs to match the attr on line 245
// text is positioned by x,y attributes, circles are positioned by cx, cy attributes
function rendertextCircles(textcirclesGroup, newXScale, chosenXAxis) {

    textcirclesGroup.transition()
        .duration(1000)
        .attr("x", d => newXScale(d[chosenXAxis]));

    return textcirclesGroup;
}

// function used for updating circles group with new tooltip
function updateToolTip(chosenXAxis, circlesGroup) {

    var label;

    if (chosenXAxis === "poverty") {
        label = "In Poverty (%):";
    } else if (chosenXAxis === "age") {
        label = "Age (Median):";
    } else {
        label = "Household Income (Median):";
    }


    var toolTip = d3.tip()
        .attr("class", "tooltip")
        .offset([80, 60])
        .html(function(d) {
            return (`${d.abbr}<br>${label} ${d[chosenXAxis]}`);
        });

    //Note:  Below circlesGroup is having the tooltip added but other elements could also have the tool tip added
    circlesGroup.call(toolTip);

    circlesGroup.on("mouseover", function(data) {
            toolTip.show(data);
        })
        // onmouseout event
        .on("mouseout", function(data, index) {
            toolTip.hide(data);
        });

    return circlesGroup;
}