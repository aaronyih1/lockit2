var styleBackground = {
	width: 100,
	height: 90,
	backgroundColor: "red"
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