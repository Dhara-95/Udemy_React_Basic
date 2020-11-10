var Hello = React.createClass({
    render: function() {
        return (
          <h2>How are you?</h2>
        );
    }
});

React.render(<Hello/>, document.getElementById("root"));