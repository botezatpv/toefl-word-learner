import React from 'react';
import * as Ons from 'react-onsenui';

export default class AppComponent extends React.Component {
  render() {
    return (
      <Ons.Page>
        <div className='main-screen'>
          <h1>Hello World</h1>
          <Ons.Button>A lot of button text, too much to be real true text of my person</Ons.Button>
          <Ons.Button>Small amount of text</Ons.Button>
          <Ons.Button>A lot of button text, too much to be real true text of my person</Ons.Button>
        </div>
      </Ons.Page>
    );
  }
}
