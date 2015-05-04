var {vw, vh, vmin, vmax} = require('react-native-viewport-units');
var Background = React.createClass({displayName: "Background",
  render: function() {
    return (
      React.createElement("div", {style: 
      	{
      		backgroundColor: 'red',
      		color:'blue',
      		height:500,
      		width:50*vh}}, 
      			"iulusgusiugsgi"
      )
    );
  }
});
React.render(
  React.createElement("vw", null),
  React.createElement(Background, null),
  document.getElementById('content')
);