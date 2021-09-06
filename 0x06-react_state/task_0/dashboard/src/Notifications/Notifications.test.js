import React from 'react';
import { expect as expectChai } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { StyleSheetTestUtils } from "aphrodite";

configure({adapter: new Adapter()});

describe("Testing the <Notifications /> wrapperTwo", () => {
	beforeAll(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	  });

	  afterAll(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	  });

	let props1 = {
		displayDrawer: false,
	};
	let props2 = {
		displayDrawer: true,
	};
	let wrapperOne;
	let wrapperTwo;

	beforeEach(() => {
		wrapperOne = shallow(<Notifications shouldRender {...props1} />);
		wrapperTwo = shallow(<Notifications {...props2} />);
	});




	it('mockup the "console.log" function and Check that when calling the function "markAsRead" on an instance of the component', (done) => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);
		console.log = jest.fn();
		wrapper.instance().markAsRead(1);
		expect(console.log).toHaveBeenCalled()
		done();    	  });
		it('Verify that clicking on the menu item calls handleDisplayDrawer', () => {
			const handleDisplayDrawer = jest.fn();
			const handleHideDrawer = jest.fn();
			const wrapper = shallow(<Notifications displayDrawer handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={handleHideDrawer} />);
			wrapper.find('#menuItem').simulate('click');
			expect(handleDisplayDrawer).toHaveBeenCalled();
			jest.restoreAllMocks();
		  });

		  it('Verify that clicking on the button calls handleHideDrawer', () => {
			const handleDisplayDrawer = jest.fn();
			const handleHideDrawer = jest.fn();
			const wrapper = shallow(<Notifications displayDrawer handleDisplayDrawer={handleDisplayDrawer} handleHideDrawer={handleHideDrawer} />);
			wrapper.find('#closeButton').simulate('click');
			expect(handleHideDrawer).toHaveBeenCalled();
			jest.restoreAllMocks();
		  })
		  it('Verify that the default state for displayDrawer is false', () => {
			const wrapper = shallow(<App />);
			expect(wrapper.state().displayDrawer).toEqual(false);
		  });

		  it('Verify that after calling handleDisplayDrawer, the state should now be true', () =>{
			const wrapper = shallow(<App />);
			wrapper.instance().handleDisplayDrawer();
			expect(wrapper.state().displayDrawer).toEqual(true);
		  });
});
