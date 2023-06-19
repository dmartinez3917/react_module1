'use strict';

const e = React.createElement;

class TouchedButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pageText: false };
  }

  render() {
    if (this.state.pageText && this.props.commentID === 1){
      return 'I hope to one day become a full-time web developer.   ' + this.props.commentID
    }
    else if (this.state.pageText && this.props.commentID === 2){
        return 'This site is an eyesore, but I hope to change that as I learn more about React.  ' + this.props.commentID
    }
    else if (this.state.pageText && this.props.commentID === 3){
          return 'I served 20 years in the Air Force as a photojournalist and am now a student at MCC.  ' + this.props.commentID
    }
    return e(
      'button',
      { onClick: () => this.setState({ pageText: true }) },
      'Click me!',
    );
  }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('#text_container')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    const root = ReactDOM.createRoot(domContainer);
    root.render(
      e(TouchedButton, { commentID: commentID})
    );
  });