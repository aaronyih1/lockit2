var Background = React.createClass({displayName: "Background",
  render: function() {
    return (
      React.createElement("div", {style: 
      	{
      		background: image(require('./boat.jpg')),
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