var React = require('react')
var ReactDOM = require('react-dom');

var USER_DATA = {
  name: 'Stanley Louis',
  username: 'stanlouis',
  image: 'https://avatars0.githubusercontent.com/u/7891366?v=3&s=460'
}
/*
Components must be F.I.R.S.T
Focus
Independent
Reusable
Small
Testable
*/
var ProfilePic = React.createClass({
  render: function () {
    return <img src= {this.props.imageUrl} style={{height: 100, width: 100}} />
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <a href ={`https://www.github.com/${this.props.username}`}>
          {this.props.username}
        </a>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function () {
    return (
      <div>
        <h3>{this.props.name}</h3>
      </div>
    )
  }
});

var Avatar = React.createClass({
  render: function () {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
})
ReactDOM.render(<Avatar user={USER_DATA} />, document.getElementById('app'));
