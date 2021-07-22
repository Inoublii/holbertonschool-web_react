import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils, } from 'aphrodite';

configure({adapter: new Adapter()});

describe("Testing <NotificationItem /> Component", () => {

	beforeEach(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterEach(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	});

	let wrapper;

	it("<NotificationItem /> is rendered without crashing", () => {
		wrapper = shallow(<NotificationItem shouldRender />);

		console.log(wrapper);
		expect(wrapper).to.not.be.an("undefined");
	});



	it("<NotificationItem />  passing value props", () => {

		let props = {
			type: "default",
			value: "New resume",
			html: undefined
		}

		let component = shallow(<NotificationItem {...props} />);

		console.log(component);
		expect(component.contains(< li data-priority-type={props.type} dangerouslySetInnerHTML={undefined}>New resume </li>)).to.equal(false);
	});
	it("spy as the markAsRead property and Check that when simulating a click on the component, the spy is called with the right ID argument", () => {
		let props = {
			type: "urgent",
			html: { __html: "<p>test</p>"},
			markAsRead: (id) => { console.log(`Notification ${id} has been marked as read`)}
		};
	it("Verify that clicking on the menu item calls handleDisplayDrawer", () => {
		const mockDisplay = jest.fn(() => {});
		const mockHide = jest.fn(() => {});

		let props = {
			...props2,
			displayDrawer: false,
			handleDisplayDrawer: mockDisplay,
			handleHideDrawer: mockHide,
		};

		let wrapper = shallow(<Notifications {...props} />);

		wrapper.find('.menuItem').at(0).simulate('click');

		expect(mockDisplay.mock.calls.length).to.equal(1);
	});

	it("Verify that clicking on the button calls handleHideDrawer", () => {
		const mockDisplay = jest.fn(() => {});
		const mockHide = jest.fn(() => {});

		let props = {
			...props2,
			displayDrawer: true,
			handleDisplayDrawer: mockDisplay,
			handleHideDrawer: mockHide,
		};

		wrapper = shallow(<NotificationItem {...props} />);
		console.log = jest.fn();
		wrapper.find('li').simulate('click');
		expect(console.log.mock.calls.length).to.equal(1);

	});

});
