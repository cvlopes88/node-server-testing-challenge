const request = require('supertest');
const db = require('../api/dbConfig');

const {insert, remove} = require('./personModel');


describe('persons model', function() {
    describe('insert()', function() {
        beforeEach(async () => {
            await db('persons').truncate();
        });

        it('should add a person', async function() {
            await insert({name: "luis"});

            const person = await db('persons');
            expect(person).toHaveLength(1);
           
        });

    })
})