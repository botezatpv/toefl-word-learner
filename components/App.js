import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  Navigator,
  Tab,
  Tabbar,
  Page,
  Splitter,
  ListItem,
  List,
  SplitterSide,
  SplitterContent,
  Icon,
  Toolbar,
  ToolbarButton,
  BackButton
} from 'react-onsenui';
import AppContainer from '../containers/App';

class AppComponent extends AppContainer {

  renderToolbar(title, backButton, navigator, show) {
    return (
      <Toolbar>
        <div className='left'>
        { backButton
        ? <BackButton
            onClick={() => navigator.popPage()}>
          </BackButton>
        : <ToolbarButton onClick={() => this.show()}>
            <Icon icon='md-menu' />
          </ToolbarButton>
        }
        </div>
        <div className='center'>
          {
            (navigator.pages.length < 2)
            ? <img src='img/logo.png' className='logoImage'/>
            : title
          }
        </div>
        <div className='right'>
        </div>
      </Toolbar>
    );
  }

  /**
   * App splitter menu.
   * @access private
   * @return {Object} Splitter - OnsenUI splitter with list of pages
   * @property {Object} List - List of React pages
   */
    // <ListItem
    //     key={'Favorites'}
    //     tappable
    //     onClick={() =>
    //       this.pushPage(this.state.navigator, FavoritPage, 'Favorites', true)}
    //   >
    //   Favorites
    //   </ListItem>
  splitterSide() {
    return (
      <SplitterSide
          width={'60%'}
          side='left'
          collapse={true}
          isSwipeable={true}
          isOpen={this.state.isOpen}
      >
        <Page>
          <List>
            <ListItem
              key={'Options'}
              tappable
              onClick={() =>
                this.pushPage(this.state.navigator, OptionPage,
                  translate[this.props.Options.language_id].OPTIONS, true)}
            >
              {translate[this.props.Options.language_id].OPTIONS}
            </ListItem>
            <ListItem
              key={'About'}
              tappable
              onClick={() =>
                this.pushPage(this.state.navigator, AboutPage,
                  translate[this.props.Options.language_id].ABOUT, true)}>
              {translate[this.props.Options.language_id].ABOUT}
            </ListItem>
          </List>
        </Page>
      </SplitterSide>
    );
  }

  /**
   * Render splitter page area
   * @access private
   * @return {Object} SplitterContent - Area where all pages are shown
   */
  splitterContent(route, navigator) {
    window.onsNavigator = navigator;
    this.state.navigator = navigator;
    this.state.route = route;
    return (
      <Page key={route.title}
        renderToolbar={() =>
          this.renderToolbar(route.title, route.backButton, navigator)
          }
      >
        {React.createElement(route.component)}
      </Page>
    );
  }

  /**
   * Draw App without navigation bar.
   * @access private
   * @return {Object} Page - OnsenUI Component
   * @property {Object} RenderToolbar - Render {@link renderToolbar}
   * @property {Object} SplitterSide - Render {@link splitterSide}
   * @property {Object} SplitterContent - Render {@link SplitterContent}
   */
  render(route, navigator) {
    return (
      <Page>
          <Splitter>
          {this.splitterSide()}
            <SplitterContent>
              <Navigator renderPage={this.splitterContent}
                initialRoute={{
                  component: CableSizingTabs,
                  backButton: false,
                  key: 'Cable sizer'
                }}
                animationOptions={{duration: 0.1, delay: 0.05, timing: 'ease-in'}}
              />
            </SplitterContent>
          </Splitter>
      </Page>
    );
  }
}
const mapStateToProps = (state) => ({

  Options: state.Options
});

export default connect(
  mapStateToProps
)(AppComponent);