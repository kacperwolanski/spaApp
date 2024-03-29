# Task description
The goal of the task is to implement an SPA application with just one view. You should use
the below API endpoint to display the paginated list of products.

At the top of the view, there should be text input, which allows the user to filter results by id. The input should accept only
numbers, other signs should not even appear. 

Below this input user should see a table displaying the following items’ properties: id, name, and year. Additionally, the background
colour of each row should be taken from the colour property. After clicking on a row a modal
should be displayed and should present all item’s data. The table should display 5 items per
page. 

Under the table, there should be a pagination component, which allows switching
between pages with “next” and “previous” arrows.


Please remember about handling situations when an API endpoint returns a 4XX or 5XX
error. In such a case the user should be informed about the error.

Apart from React and TypeScript, the technology stack totally ups to you, the same applies
to styling. As a result of the task, we expect a link to a repository on GitHub, GitLab, or
bitbucket and a link to the deployed version of your application.

Your app should use at least
the node version 20.11.0 and should start after running npm install & npm start
commands.

Extra requirement (optional):
Please reflect pagination and filtering in the address URL, so users can copy and share the
URL with each other (i.e. ?page=2&id=2).

Remarks:
- filtering and pagination should be performed within the API, not on the frontend side
- take into account that the API returns 12 items in total
- after changing the page it should be possible to copy-paste web browser URL to another
tab, where this exact page should be displayed on the start

API endpoint
https://reqres.in/api/products
Requirements
- React
- TypeScript
- git
- github/gitlab/bitbucket

Nice to have
- Unit tests
- Redux/Context API or other state management library
- Debouncing used

Tips
- Proposed styling library (contains also icons): https://mui.com/
- You can use Mokku chrome extension to mock different responses from API, i.e. 400
error code

![image](https://github.com/kacperwolanski/spaApp/assets/101999487/fc3362fd-d434-4f1f-b60b-1c19ff9c4282)
![image](https://github.com/kacperwolanski/spaApp/assets/101999487/5708a5fc-5252-4124-8012-d803947b1457)

