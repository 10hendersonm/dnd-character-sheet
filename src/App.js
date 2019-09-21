import React, { Component } from 'react'

// custom
import Layout from './components/Layout/Layout'
import CharacterSheet from './components/CharacterSheet/CharacterSheet'

class App extends Component {
  render() {
    return (
      <Layout>
        <CharacterSheet />
      </Layout>
    )
  }
}

export default App
