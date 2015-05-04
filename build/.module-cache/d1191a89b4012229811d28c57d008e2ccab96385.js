var styleBackground = {
	width: cover,
	height: 90,
	backgroundImage: 'url(boat.jpg)'
};

var Background = React.createClass({displayName: "Background",
	render: function(){
		return(
			React.createElement("div", {id: "bgImage", style: styleBackground}
			)
			);
	}
});

React.render(
		React.createElement(Background, null),
		document.getElementById('bg')
);