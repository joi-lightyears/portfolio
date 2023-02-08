//ref https://github.com/joi-lightyears/jquery-svg3dtagcloud-plugin
var entries = [
    {label: 'ReactJs'},
    {label: 'ReactJs'},
    {label: 'ReactJs'},
    {label: 'ReactJs'},
    {label: 'ReactJs'},
    {label: 'ReactJs'},
    {label: 'ReactJs'},
    {label: 'ReactJs'},
    {label: 'ReactJs'},
    {label: 'ReactJs'},
    {label: 'ReactJs'},
    {label: 'ReactJs'},
    {label: 'ReactJs'},
    {label: 'ReactJs'},
    {label: 'ReactJs'},
]
var settings = {
    entries: entries,
    width: 480,
    height: 480,
    radius: "65%",
    bgColor: "#1D1D1D",
    speed: 0.5,
    fontColor: "#3ac5c9",
}
var svg3dtagcloud = new SVG3DTagCloud(document.getElementById("container"),settings)