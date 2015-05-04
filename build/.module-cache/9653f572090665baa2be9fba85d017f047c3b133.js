
var Background = React.createClass({displayName: "Background",
  render: function() {
    return (
      React.createElement("h2", {style: {backgroundColor: 'red', color:'blue'}}, "iulusgusiugsgi")
    );
  }
});
React.render(
  React.createElement(Background, null),
  document.getElementById('content')
);