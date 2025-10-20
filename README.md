![Image](https://user-images.githubusercontent.com/66960776/241713093-2e701e8a-6af7-4070-87b3-139e08527a2e.jpg)

# Asialakay.net

This project is a React web application consisting of multiple components that together create a portfolio website. The main components include App.js, Banner.js, Footer.js, and Signup.js.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Contact](#contact)

## Installation

1. Clone the repository.
2. Install the dependencies using the package manager of your choice:

`npm install`

3. Configure the necessary environment variables.

   Create a `.env` file (or update your deployment environment) with the following values so the Formspree integration can connect to your account:

   ```bash
   REACT_APP_FORMSPREE_PROJECT_ID=<your_formspree_project_id>
   REACT_APP_FORMSPREE_FORM_ID=<your_live_form_id>
   # Optional: override the default derived URL if needed
   REACT_APP_FORMSPREE_FORM_URL=https://formspree.io/f/<your_form_id>
   ```

   Replace the placeholders with the IDs provided by Formspree for your project and the form that should receive submissions.

## Usage

4. Run the application:

`npm start`

5. Access the application at `http://localhost:3000`.

## Dependencies

The application uses the following dependencies:

- React: A JavaScript library for building user interfaces.
- React Router: A library for handling routing in React applications.
- React DOM: Provides DOM-specific methods that can be used with React.
- Axios: A library for making HTTP requests from the browser.
- Formspree: A form submission service that handles form data and sends emails.
- Node Sass: A library that enables the use of SCSS syntax in the project.
- Bootstrap: A popular CSS framework for building responsive and mobile-first websites.
- React Bootstrap: A React implementation of the Bootstrap framework.
- React Icons: A library that provides a collection of popular icons as React components.
- React Hook Form: A library for building flexible and efficient forms in React.
- Yup: A schema validation library used in conjunction with React Hook Form for form validation.
- React Toastify: A notification library for displaying toast notifications.
- React Helmet: A library for dynamically managing the document head in React.

## License
 
This project is licensed under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please create a new branch and submit a pull request.

## Tests

Run the tests using the following command:

`npm test`


## Contact

For any questions or suggestions, feel free to reach out to me [via email](mailto:asialakay@gmail.com).

---

## Code Structure

The code is organized into multiple files for better modularity and maintainability. Here's an overview of the file structure:

- `App.js`: The main component of the application that sets up the layout and renders other components.
- `Banner.js`: Component that displays a banner with navigation, text, and buttons.
- `Footer.js`: Component that displays the footer with social media links.
- `Signup.js`: Component that handles the signup form and form submission.
- `style.scss`: SCSS file containing custom styling for the application.

Feel free to explore the code and make any necessary modifications to suit your needs.
