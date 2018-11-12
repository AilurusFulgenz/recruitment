'use strict';

const chai = require('chai');
chai.should();
const expect = chai.expect;

const FilteringRule = require('../../filtering-rule');

describe('FilteringRule', function () {
    describe('#contructor', () => {

        let props;
        beforeEach(function () {
            props = {
                src: '0.0.0.0',
                dst: '0.0.0.0',
                port: 1
            };
        });
        

        it('should instanciate a filtering rule with parameters', function () {
            // when
            const filteringRule = new FilteringRule(props);
            // then
            filteringRule.should.deep.equal(props);
        });

        describe('should fail', () => {
            it('with bad src format', function () {
                // given
                props.src = 'some invalid IP address';
                // expect
                expect(() => new FilteringRule(props)).to.throw();
            });

            it('with bad dst format', function () {
                // given
                props.dst = 'some invalid IP address';
                // expect
                expect(() => new FilteringRule(props)).to.throw();
            });

            it('with bad port format', function () {
                // given
                props.port = 'a';
                // expect
                expect(() => new FilteringRule(props)).to.throw();
            });
        });
    });
});