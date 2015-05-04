var background = React.createClass({displayName: "background",
	render: function(){
		return(
			React.createElement("div", {id: "bgImage", style: 
				backgroundImage=url("../boat.jpg")
			}
			)
			);
	}
});

React.render(
		React.createElement("background", null),
		document.getElementById('bg')
	);