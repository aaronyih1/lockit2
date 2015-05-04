var Background = React.createClass({displayName: "Background",
  render: function() {
    return (
      React.createElement("div", {style: 
      	{
      		backgroundColor: 'red',
      		color:'blue',
      		height: 630,
      		width: this.props.value+"%",
      		margin:0
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