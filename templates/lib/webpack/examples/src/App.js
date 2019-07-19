import React, { Component, Fragment } from 'react'

import CS, { Card as CSCard } from '{{packageName}}'
import Card from '{{packageName}}/card'

const RCS = require('{{packageName}}')
const { Card: RCSCard } = require('{{packageName}}')
const RCard = require('{{packageName}}/card')

export default class App extends Component {
  render () {
    return (
      <Fragment>
        <div>
          <h1>Imported as ES6 module</h1>
          <Card 
            className="demo-card"
            showPlaceholder={ false }
            onCardClick={ () => { alert('clicked') } }
          >
            <div className="card-body">
              <h2>Card Box - declared as Card </h2>
              <p>This is a card.</p>
              <p>For more: <a href="https://getbootstrap.com/docs/4.0/components/card/" target="_blank">Bootstrap Cards</a></p>
            </div>
          </Card>

          <CSCard 
            className="demo-card"
            showPlaceholder={ false }
            onCardClick={ () => { alert('clicked') } }
          >
            <div className="card-body">
              <h2>Card Box 2 - declared as CSCard </h2>
              <p>This is a card.</p>
              <p>For more: <a href="https://getbootstrap.com/docs/4.0/components/card/" target="_blank">Bootstrap Cards</a></p>
            </div>
          </CSCard>
          
          <CS.Card
            className="demo-card"
            showPlaceholder={ false }
            onCardClick={ () => { alert('clicked') } }
          >
            <div className="card-body">
              <h2>Card Box 3 - declared as CS.Card </h2>
              <p>This is a card.</p>
              <p>For more: <a href="https://getbootstrap.com/docs/4.0/components/card/" target="_blank">Bootstrap Cards</a></p>
            </div>
          </CS.Card>
        </div>
        <br />
        <div>
          <h1>Imported as require module</h1>
          <RCard 
            className="demo-card"
            showPlaceholder={ false }
            onCardClick={ () => { alert('clicked') } }
          >
            <div className="card-body">
              <h2>Card Box - declared as RCard </h2>
              <p>This is a card.</p>
              <p>For more: <a href="https://getbootstrap.com/docs/4.0/components/card/" target="_blank">Bootstrap Cards</a></p>
            </div>
          </RCard>

          <RCSCard 
            className="demo-card"
            showPlaceholder={ false }
            onCardClick={ () => { alert('clicked') } }
          >
            <div className="card-body">
              <h2>Card Box 2 - declared as RCSCard </h2>
              <p>This is a card.</p>
              <p>For more: <a href="https://getbootstrap.com/docs/4.0/components/card/" target="_blank">Bootstrap Cards</a></p>
            </div>
          </RCSCard>
          
          <RCS.Card
            className="demo-card"
            showPlaceholder={ false }
            onCardClick={ () => { alert('clicked') } }
          >
            <div className="card-body">
              <h2>Card Box 3 - declared as RCS.Card </h2>
              <p>This is a card.</p>
              <p>For more: <a href="https://getbootstrap.com/docs/4.0/components/card/" target="_blank">Bootstrap Cards</a></p>
            </div>
          </RCS.Card>
        </div>
      </Fragment>
    )
  }
}
