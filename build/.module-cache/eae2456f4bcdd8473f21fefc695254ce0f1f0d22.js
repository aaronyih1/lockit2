var Background = React.createClass({displayName: "Background",
	render: function(){
		return(
			React.createElement("div", {id: "bgImage", style: 
				{
					width:100,
					height:90,
					backgroundColor:'red'	
				}
				
			}
			)
			);
	}
});

React.render(
		React.createElement(Background, null),
		document.getElementById('bg')
);