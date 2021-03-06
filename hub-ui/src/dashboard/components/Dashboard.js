import React, { Component } from 'react';
import ChatWidget from '../../components/chat/ChatWidget';
import AddDashboardDialog from './AddDashboardDialog';
import { DatePicker, Progress, Card } from 'antd';
import PingWidget from '../../ping/components/pingWidget';
import { connect } from 'react-redux';


let ReactGridLayout = require('react-grid-layout');

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    console.log('Dashboard.constructor', props);
  }

  handleOnNewDashboardClick() {

  }

  render() {
    // layout is an array of objects, see the demo for more complete usage
    let layout = [
      {i: 'a', x: 0, y: 0, w: 4, h: 4, static: true},
      {i: 'b', x: 4, y: 0, w: 4, h: 4, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 1, w: 4, h: 4}
    ];
    let testComponent = this.props.component.slug;
    // console.log('testComponent: ');
    // console.log(testComponent);
    // return <this.props.component.slug className='text'>
    //   {this.props.component.value}
    // </this.props.component.slug>;
    return <testComponent className='text'>
      {this.props.component.value}
    </testComponent>;
  }
}

/*

      <DatePicker />
      <Card title="Card title" extra={<a href="#">More</a>} style={{ width: 300 }}>
        <div>
          <Progress percent={30} strokeWidth={5} />
          <Progress percent={50} strokeWidth={5} status="active" />
          <Progress percent={70} strokeWidth={5} status="exception" />
          <Progress percent={100} strokeWidth={5} />
          <Progress percent={50} strokeWidth={5} showInfo={false} />
          <Progress type="circle" percent={30} width={80} />
          <Progress type="circle" percent={70} width={80} status="exception" />
          <Progress type="circle" percent={100} width={80} />
        </div>
      </Card>
      <AddDashboardDialog />
      <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={90} width={1200}>
        <div key={'a'}>
          <ChatWidget />
        </div>
        <div key={'b'}>
          <PingWidget />
        </div>
        <div key={'c'}>
          <ChatWidget />
        </div>
      </ReactGridLayout>

*/