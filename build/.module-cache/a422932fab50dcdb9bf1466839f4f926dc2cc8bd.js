var Background = React.createClass({displayName: "Background",
  render: function() {
    return (
      React.createElement("div", {style: 
      	{
      		color:'blue',
      		height: 630,
      		width: this.props.value+"%",
      	}, id: "divvy"}, 
      			"iulusgusiugsgi"
      )
    );
  }
});
React.render(
  React.createElement(Background, null),
  document.getElementById('content')
);