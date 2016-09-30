import React, {Component} from 'react';
import PageHeaderLogo from './PageHeaderLogo';
import Navbar from './Navbar';

export default class ContentHeader extends Component {
  render() {
    return (
      <header className="main-header">
        <PageHeaderLogo />
        <Navbar />
      </header>
    )
  }
}