var matte= React.createClass({displayName: "matte",
		render: function(){
			return(React.createElement("div", {className: "matte"}, "nothing here"));
		}
	});
React.render(React.createElement("matte", null), document.getElementById('matte'));