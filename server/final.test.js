/**
 * @jest-environment node
 */
const request = require('supertest');
const fs = require('fs');
const full4s = require('@suvelocity/tester');
const app = require('./app');
let data = fs.readFileSync('./data.json');
let json = JSON.parse(data)

const projectName = '1.Tickets manager backend';
describe(projectName, () => {
  beforeAll(async () => {
    await full4s.beforeAll();
  });
  afterEach(async () => {
    await full4s.afterEach();
  })
  afterAll(async () => {
    await full4s.afterAll(projectName);
  });
  test('Can get all tickets', async () => {
    const { body } = await request(app)
      .get('/api/tickets')
      .expect(200)

    expect(body.length).toBe(json.length)
    expect(body[0].id).toBe(json[0].id)
  });

  test('Can get relevant tickets by searchText query param', async () => {
    const { body } = await request(app)
      .get('/api/tickets').query({
        searchText: 'full'
      })
      .expect(200)

    expect(body.length).toBe(1)
    expect(body[0].id).toBe('78d09b01-6ca0-5746-82a4-9e02db81552a')
  });

  test('Can mark ticket as done and undone', async () => {
    const currentState = json[0].done;
    const { body } = await request(app)
      .post(`/api/tickets/${json[0].id}/${currentState ? 'undone' : 'done'}`).query({
        searchText: 'full'
      })
      .expect(200)

    expect(body.updated).toBe(true);
    const updatedData = fs.readFileSync('./data.json');
    const updatedJson = JSON.parse(updatedData);
    expect(updatedJson[0].done).toBe(!currentState);

    const { body: undoneBody } = await request(app)
      .post(`/api/tickets/${json[0].id}/${currentState ? 'done' : 'undone'}`).query({
        searchText: 'full'
      })
      .expect(200)

    expect(undoneBody.updated).toBe(true);
    const updatedData2 = fs.readFileSync('./data.json');
    const updatedJson2 = JSON.parse(updatedData2)
    expect(updatedJson2[0].done).toBe(currentState);
  });
})
