# Boomi Flow API

This API reference provides information on the available endpoints in the Boomi Flow REST API, including parameters and response data format.

As Boomi Flow is based on an <a href="http://help.boomi.com/csh?context=GUID-b7cbf7a7-bcd0-4d1c-b926-69854df699ec" target="_blank">API-first architecture</a>, many of the operations performed within Boomi Flow can be accessed through this API. 

Before you can start using the API, you will need to create a Boomi Flow account.

## Making a request to the API

API endpoint requests should be appended to the Boomi Flow API Host at:

- flow.boomi.com

For example:

GET **https://flow.boomi.com/api/draw/1/flow**

> **NOTE:**  The <a href="http://help.boomi.com/csh?context=GUID-95ad682d-ce04-494a-9235-e113a89406bc" target="_blank">API tool</a> in Boomi Flow allows you to automatically authorize and interact with the API within the Boomi Flow application.

# Authentication

The API supports authorization using an API Key .

API keys are specific to a tenant, meaning that each API key only authenticates you for the tenant selected when generating the API key.

You can <a href="http://help.boomi.com/csh?context=GUID-7c393c4c-2193-40ee-b0aa-ef148c5b423c" target="_blank">manage your API keys</a> on the Boomi Flow **User Settings** page.

## Authentication using an API Key

To use an API Key to authenticate requests to the Boomi Flow API:

 1. <a href="http://help.boomi.com/csh?context=GUID-fab6941c-d8a2-433a-a2f2-6782eb873a02" target="_blank">Generate an API Key</a> in Boomi Flow, or by sending a POST request to the **api/admin/1/users/me/keys** endpoint. 
  
 2. Add a **x-boomi-flow-api-key** header to your API requests instead of an Authorization header, to authenticate as yourself. This header should contain only the **apiKey** value of the API Key.

3. If required, add a **manywhotenant** header referencing the tenant ID value that the API key is associated with.


