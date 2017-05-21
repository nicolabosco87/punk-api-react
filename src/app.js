import React from 'react'
// import { TouchableHighlight, View, Text, StyleSheet } from 'react-native'

import { connect } from 'react-redux'
import { fetchData } from './actions'

let styles

const App = (props) => {
  /*const {
    container,
    text,
    button,
    buttonText
  } = styles*/

  return (
    <div>
      <h1>TEST ASYNC REDUX</h1>

      <button onClick={() => {props.fetchData()}} >Load data</button>

      {
        props.appData.data.length ? (
          props.appData.data.map((person, i) => {
            return <div key={i} >
              <p>Name: {person.name}</p>
              <p>Age: {person.age}</p>
            </div>
          })
        ) : null
      }

    </div>
  )

  /*return (
    <View style={container}>
      <Text style={text}>Redux Examples</Text>
      <TouchableHighlight style={button}>
        <Text style={buttonText}>Load Data</Text>
      </TouchableHighlight>
    </View>
  )*/
}

/*styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  }
})*/

function mapStateToProps (state) {
  return {
    appData: state.appData
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)