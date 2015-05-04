var Background = React.createClass({displayName: "Background",
  render: function() {
    return (
      React.createElement("div", {style: 
      	{
      		backgroundColor: rgba(103,86,70,0.37),
      		color:'blue',
      		height: 630,
      		width: this.props.value+"%",
      	}}, 
      			"iulusgusiugsgi"
      )
    );
  }
});
React.render(
  React.createElement(Background, null),
  document.getElementById('content')
);