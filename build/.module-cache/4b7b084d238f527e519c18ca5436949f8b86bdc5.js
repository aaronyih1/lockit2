var Background = React.createClass({displayName: "Background",
  render: function() {
    return (
      React.createElement("div", {style: 
      	{
      		backgroundColor: 'red',
      		color:'blue',
      		height: 700,
      		width: this.props.value+"%"}}, 
      			"iulusgusiugsgi"
      )
    );
  }
});
React.render(
  React.createElement(Background, null),
  document.getElementById('content')
);