import React from 'react';

const LogInOut = ({body, uri}) => {
  let message = body.user ? 'sign out' : 'sign in';
  let path = body.user ? '/logout' : '/login';
  console.log(message)

  return (
    <div>
      <a href={uri + path}>{message}</a>
    </div>
  )

  
}
export default LogInOut;

// export default class LogInOut extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     let message = (this.props.body.user)
//       ? 'sign in'
//       : 'sign out';

//     let path = (this.props.body.user)
//       ? '/login'
//       : '/logout';

//     return (
//       <a href={this.props.uri + path}>{message}</a>
//     );
//   }
// }
