import React, { Component, Children } from 'react';
export default class WithLogging extends Component{
	constructor(props) {
        super(props);  
	};
    
    componentDidMount() {
		let comp = this.props.children.type.name || 'Component';
		console.log(`Component ${comp} is mounted`);
      };
      componentWillUnmount() {
		let comp = this.props.children.type.name || 'Component';
        console.log(`Component ${comp} is going to unmount`);
      };
      render() {
        return (this.props.Children);
      };
    };
