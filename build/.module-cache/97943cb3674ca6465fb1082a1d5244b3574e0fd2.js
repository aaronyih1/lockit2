var Matte = React.createClass({displayName: "Matte",
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

  React.createElement(Matte, null),
  document.getElementById('content')
);