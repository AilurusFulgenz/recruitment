'use srtict';

const chai = require('chai');
const request = require('supertest');
const expressApp = require('../../index');

chai.should();

describe('/filtering-rules', function () {

    const defaultFRList = [
        {src: '192.168.0.0', dst: '10.0.0.0', port: 25},
        {src: '192.168.1.0', dst: '10.0.1.0', port: 22}
    ];

    describe('GET', () => {
        it('should return the filtering rules list', async function () {
            // when
            return request(expressApp).get('/filtering-rules')
                // then
                .expect(200)
                .then(response => {
                    response.body.should.eql(defaultFRList);
                });
        });
    });
    
    describe('POST', () => {
        it('should add a filtering rule', async function () {
            // given
            const filteringRuleProperties = {
                src: '0.0.0.0',
                dst: '0.0.0.0',
                port: 1
            };
            const expectedResult = defaultFRList.concat(filteringRuleProperties);

            return request(expressApp).post('/filtering-rules')
                .send(filteringRuleProperties)
                // then
                .expect(200)
                .then(response => {
                    response.body.should.eql(expectedResult);
                });
        });
    });
});