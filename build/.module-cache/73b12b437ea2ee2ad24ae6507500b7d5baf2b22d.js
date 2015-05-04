var Background = React.createClass({displayName: "Background",
  render: function() {
    return (
      React.createElement("div", {style: 
      	{
      		backgroundImage:"https://download.unsplash.com/photo-1414073875831-b47709631146",
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