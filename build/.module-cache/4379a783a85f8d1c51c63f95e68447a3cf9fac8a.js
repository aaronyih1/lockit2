var testData = React.createClass({displayName: "testData",
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
          	username: lastGist.owner.login,
          	lastGistUrl: lastGist.html_url
        	});
      	}
    	}.bind(this));
  	},

  	render: function(){
  		return(
  			React.createElement("div", null, 
  				this.state.id, "s last gitst is"
  			)
  			);
  	}
  });

React.render(
	React.createElement("testData", {source: "https://rocky-meadow-2530.herokuapp.com/"}),
	mountNode
	);
