
var Background = React.createClass({displayName: "Background",
  render: function() {
    return (
      React.createElement("img", {id: "img"}, 
        "Hello, world! I am a CommentBox."
      )
    );
  }
});
React.render(
  React.createElement(Background, null),
  document.getElementById('content')
);