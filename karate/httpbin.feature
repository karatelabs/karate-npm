Feature: Simple Requests

Scenario: Simple POST
* url 'https://httpbin.org'
* path 'anything'
* request { foo: 'bar' }
* method post
* status 200
* match response contains { json: { foo: 'bar' } }
