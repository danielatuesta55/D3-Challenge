// I worked with Erin Wills (TA) and the following people:  JD
// Remember to comment your code as we discuss it.  Commenting the code is required.
// Prior to starting, make sure  you have already created and cloned your repo.



// Refer to the pdf diagram to see the visual relationship of the code

// Layout of this document
// 1.  Data Exploration (always do this; understand its structure)
// 2.  Define Functions (a and e used in page load, a through e used in click event)
//      a.  xScale(hairData, chosenXAxis):  Scales data to svg width (var width defined in Section 3: Setup SVG )
//              inputs:  (data like "hairData", an axis name like "hair_length")
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





// #######################  1.  Data Exploration  ################ //
// CSV file shows that
//  Data has following columns:  rockband, hair_length, num_hits, num_albums
//  Once read by d3.csv then it is like an array of 20 objects as key-value pair format so I will need to use foreach or arrow functions to get arrays
//  console.log(hairData) see below after d3.csv






// #################### 2.  Define Function ###############//
// function used for updating x-scale var upon click on axis label
// scaling function: https://www.d3indepth.com/scales/


// function used for updating xAxis var upon click on axis label

// function used for updating circles group with a transition to
// new circles


// Added by Erin
// Note:  as compared to renderCircles, the attr iterator needs to match what is created initially
// So above I use "cx" and below I use "x" -  this needs to match the attr on line 245
// text is positioned by x,y attributes, circles are positioned by cx, cy attributes

// function used for updating circles group with new tooltip


//Note:  Below circlesGroup is having the tooltip added but other elements could also have the tool tip added






//########################  3.  SVG Setup ###################################//



// xScale uses width so xScale() can only be called below this point


// Create an SVG wrapper, append an SVG group that will hold our chart,
// and shift the latter by left and top margins.


// Append an SVG group





// #################### 4.  BRING in Data and ADD Structure ###############//

// Initial Params - includes any axis selection that has multiple options



// Retrieve data from the CSV file and execute everything below


// parse data - set values to numerical data types

// Data Exploration (Section 1)
// console.log(hairData)

// xLinearScale function above csv import; Note:  xLinearScale is functioncontains scaled data specific to the defined axis
// Important note:  xScale uses width that is defined above; xScale can only be called below width in the code
// scaling function: https://www.d3indepth.com/scales/


// Create y scale function

// Create initial axis functions; generates the scaled axis

// append x axis; adds x axis chart data tick marks to chartgroup
// for future axis value changes then the renderAxes() function needs called

// append y axis


// New by Erin - provide data first to grouped elements 
// case is important - selectAll() works but SelectAll() would produce a type error - the capitalizaton makes a difference


// modfied by Erin - data is already bound to circlesGroupAll and now I am adding the 'circles' with one circle for each data
// note that the attributes are "cx" and "cy"; the data is being scaled by the scaling functions defined above; see it is a function
// the centers of the circles are also coming from the specific x data group 'chosenXAxis'
// append initial circles

// added by Erin - I wanted to add text to the circles - probably several ways of doing this but here is one.
// data is bound to ciclesGroupAll like above and now I add a text element at "x" and "y", not the difference from above.
// added round function to make the numbers in the cirlces have no decimals; this is a random data selection; I just wanted something inside the circles. If you want to see why these values are like they are then you need to back-calculate what xScale and transpose is doing


// Create group for two x-axis labels




// append y axis


// updateToolTip function above csv import






// #################### 5.  ADD updates upon clicking axis text  ###############//

// x axis labels event listener
// if you comment out the entire labelsGroup section then you can see that the plot populates but does not update when selecting the axis
// note that above this section, only the updateToolTip and xScale functions are called of all the user created functions at the top of the script
// the other functions at the top of the page are used to re-define the data applied to the xLinearScale function, xAxis object, circlesGroup elements, textcirclesGroup elements, circlesGroup elements

// get value of selection


// replaces chosenXAxis with value


// console.log(chosenXAxis)

// functions here found above csv import
// updates x scale for new data


// updates x axis with transition


// updates circles with new x values

// New - updates text labels within circles

// updates tooltips with new info


// changes classes to change bold text