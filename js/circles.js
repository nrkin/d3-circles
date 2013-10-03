var data = [{r: 10, color: '#101010'},
    {r: 20, color: '#202020'},
    {r: 30, color: '#303030'},
    {r: 40, color: '#404040'},
    {r: 50, color: '#505050'},
    {r: 60, color: '#606060'}];

var chart = d3.select("body").append("svg");

chart.attr("width", 500).attr("height", 500);


function draw(){
    var circles = chart.selectAll("circle").data(data);
    circles.enter().append("circle")
        .attr("cx", function(d, i){ console.log("enter i = ", i); return d.r; })
        .transition().duration(250)
        .attr("cx", function(d, i){ return ((i * 50) + 50)})
        .attr("cy", 250)
        .attr("r", 0)
        .transition().duration(250)
        .attr("r", function(d, i) { return d.r + 10;})
        .attr("fill", function(d, i){return d.color})
        .attr("stroke", "#000");

    circles.exit().transition()
        .duration(500)
        .attr("r", function(d, i){ console.log('Removing i = ', i); return 0; }).remove();
}

draw();

setInterval(function(){
    data.shift();
    console.log(data);
    draw();
}, 1500);