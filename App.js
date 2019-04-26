import App from './src/App'
import { Provider } from 'react-redux'
import store from './src/state/store'
import React from 'react'

class AppRedux extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <App isSimulator={this.props.isSimulator} />
      </Provider>
    )
  }
}

export default AppRedux
