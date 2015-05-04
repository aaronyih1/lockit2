var styleBackground = {
	width: 100,
	height: 90,
	backgroundImage: url("https://download.unsplash.com/photo-1414073875831-b47709631146")
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