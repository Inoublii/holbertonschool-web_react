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




	it('Verify that when listNotifications is empty the message Here is the list of notifications is not displayed', () => {
		const array = [];
		const wrapper = shallow(<Notifications displayDrawer listNotifications={array} />);
		expect(wrapper.find('NotificationItem').html()).not.toEqual('<li data-notification-type="default" class="blue_1tsdo2i-o_O-blueSmall_1wblo9d">Here is the list of notifications</li>');
	  });

	  it('Check that when calling the function markAsRead on an instance of the component, the spy is being called with the right message', () => {
		const wrapper = shallow(<Notifications displayDrawer />);
		console.log = jest.fn();
		const instance = wrapper.instance();
		const id = 3;
		instance.markAsRead(id);
		expect(console.log).toHaveBeenCalledWith('Notification 3 has been marked as read');
		jest.restoreAllMocks();
	  });

});
