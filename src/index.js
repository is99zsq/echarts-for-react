import React from 'react';
import echarts from 'echarts';

import Core from './core';

export default class Chart extends React.Component {
  getEchartsInstance = () => this._ref.getEchartsInstance()
  render = () => (<Core {...this.props} ref={e => this._ref = e} echarts={echarts} />)
}
