import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import CourseList from './CourseList'
import CourseListRow from './CourseListRow'
import Adapter from 'enzyme-adapter-react-16';
import { StyleSheetTestUtils } from "aphrodite";


configure({adapter: new Adapter()});

  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

describe('Test CourseList.js', () => {
	it("Test if <CourseList /> is rendered without crashing", () => {
		let component = shallow(<CourseList shouldRender />);

		expect(component.render()).to.not.be.an("undefined");
	  });

	  it("Test tthat when you pass a list of courses, the component renders it correctly", () => {
		let component = shallow(<CourseList shouldRender {...props} />);
		expect(component.render()).to.not.be.an("undefined");
	  });
  it('verify that when you pass a list of courses, the component renders it correctly', (done) => {
	const props  = [
		{ id: 1, name: 'ES6', credit: 60 },
		{ id: 2, name: 'Webpack', credit: 20 },
		{ id: 3, name: 'React', credit: 40 }
	  ];
	  let component = shallow(<CourseList shouldRender {...props} />);
	  expect(component.render()).to.not.be.an("undefined");
	});
  });
