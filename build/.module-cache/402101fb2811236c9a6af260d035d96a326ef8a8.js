var Background = React.createClass({displayName: "Background",
  render: function() {
    return (
    	React.createElement(Image, {style: styles.icon, source: {uri: 'https://download.unsplash.com/photo-1414073875831-b47709631146'}}, 
    		React.createElement("div", null, "gello")
    	)
      /*<div style={
      	{
      		backgroundColor:'red',
      		color:'blue',
      		height: 630,
      		width: this.props.value+"%",
      	}}>
      			iulusgusiugsgi
      </div>*/
    );
  }
});
React.render(
  React.createElement(Background, null),
  document.getElementById('content')
);