The password reset API is only applicable to Flow Builders. For running users, the user identity is managed by the underlying Service (e.g. Salesforce, Box, Google), and therefore user resets should be performed on the underlying system, not within Boomi Flow. 

The password reset API requires two separate API calls to complete. The first API call sends the user the password reset notification. The second API call performs the actual password change, based on the token provided in the notification. If a notification is provided, the <code>redirectUrl</code> property should include two parameters in the content - one for the notification result (<code>{0}</code>) and one for the reset token (<code>{1}</code>). The platform will automatically parse the notification result and <code>callbackUri</code> values at these positions in the content. 

The result parameter has the following possible values:
* **OK:** The password reset was correctly processed
*  **ALREADY_PROCESSED**: The password reset token has already been processed by the Platform and the user is re-using the link

To add the password verification URL to the notification, simply add `PASSWORD_URL_HERE` to the content of the message and the platform will replace this with the actual verification callback URL, which will in turn forward to the `redirectUrl`.