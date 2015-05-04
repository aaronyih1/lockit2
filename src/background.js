var styleBackground = {
	backgroundImage: 'url(boat.jpg)'
};

var Background = React.createClass({
	render: function(){
		return(
			<div id ="bgImage" style={styleBackground}>
			</div>
			);
	}
});

React.render(
		<Background />,
		document.getElementById('bg')
);