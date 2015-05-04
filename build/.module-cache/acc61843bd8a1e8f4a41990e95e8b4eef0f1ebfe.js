var matte= React.createClass({displayName: "matte",
		render: function(){
			return(React.createElement("div", {className: "matte"}, "nothing here"));
		}
	});
React.render(React.createElement("matte", null), document.getElementById('matte'));

var CommentBox = React.createClass({displayName: "CommentBox",
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        "Hello, world! I am a CommentBox."
      )
    );
  }
});
React.render(
  React.createElement(CommentBox, null),
  document.getElementById('matte')
);