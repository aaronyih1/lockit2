var Matte = React.createClass({displayName: "Matte",
  render: function() {
    return (
      React.createElement("div", {style: 
      	{
      		color:'blue',
      		width: 320,
      	}, id: "divvy"}, 
      			"iulusgusiugsgi"
      )
    );
  }
});
React.render(
  		React.createElement(Matte, null),
  		document.getElementById('content')
);