var testData = React.createClass({
	getInitialState:function(){
		return{
			id:'',
			message:''
		};
	},

	componentDidMount:function(){
		$.get(this.props.source, function(result) {
      	var lastGist = result['a'];
      	if (this.isMounted()) {
        	this.setState({
          	id: lastGist.owner.login,
          	message: lastGist.html_url
        	});
      	}
    	}.bind(this));
  	},

  	render: function(){
  		return(
  			<div>
  				{this.props.sexState}
  				{this.state.id}s last gitst is
  			</div>
  			);
  	}
  });

React.render(
	<testData sexState="https://rocky-meadow-2530.herokuapp.com/" />,
	document.getElementById('container')
	);
