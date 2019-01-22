# React Inbox
- This is a web app modeled after an email inbox. It interfaces with an API to GET, POST, UPDATE and DELETE information. 


## Technologies
- React
- Bootstrap
- Fetch API


## To Do
- [x] When a user views the app, they should see a list of messages with their subjects, loaded from the server
- [x] If the message is read, it should have the 'read' style
- [x] If the message is unread, it should have the 'unread' style
- [x] If the message is selected, it should have the 'selected' style and the box should be checked
- [x] If there are labels on a message, they should appear
- [x] If the message is starred, then the star should be filled in, otherwise it should be empty
- [x] A user can toggle whether a message is starred or not by clicking on the star next to a message
- [x] When a user stars or unstars a message, the data should persist after a page refresh
- [x] A user can select or deselect individual messages
- [x] A user can select any number of messages and mark them as 'read'
- [x] A user can select any number of messages and mark them as 'unread'
- [x] When a user clicks on the red plus button, a 'compose message' form should appear
- [x] When a user clicks on 'Send' in the compose message form, the message form should disappear, and the message should appear on the page
- [x] When the page is refreshed, the sent message should persist on the inbox page
- [ ] A user can click the 'select all' button, and all messages will be selected
- [ ] A user can click the 'deselect all' button, and all messages will be deselected
- [x] A user can delete a selected message using the trash icon 
- [ ] When a user selects a message and chooses a label from the 'Add Label' dropdown, the label should be added to the message
- [ ] When a user selects a message and chooses a label from the 'Remove Label' dropdown, that label should be removed from the message
- [ ] The state of the 'select/deselect all' button should change as messages are selected and deselected
