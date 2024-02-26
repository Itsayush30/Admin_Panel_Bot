# Admin Panel

Welcome to the Admin Panel application!
<img width="1432" alt="Screenshot 2024-02-26 at 12 01 53 PM" src="https://github.com/Itsayush30/Admin_Panel_Bot/assets/90981890/b9fec51e-a155-46a9-8b4b-fade7d2d15f9">

<img width="1434" alt="Screenshot 2024-02-26 at 12 02 26 PM" src="https://github.com/Itsayush30/Admin_Panel_Bot/assets/90981890/9d076ab2-ca7e-4b6d-b833-de87f02c3a77">

## Overview

The Admin Panel is a web application that provides administrative functionalities. It uses JWT-based authentication to ensure secure access to its features.

## Features

- **Authentication**: Users can sign in using their email and password to obtain a JWT token for accessing authenticated APIs.
- **JWT-based Authorization**: Authenticated users can access protected resources by providing their JWT token in the request headers.
- **Admin Dashboard**: Once authenticated, users can access the admin dashboard to manage various aspects of the application.
- **User Management**: Admins can manage users, including  deleting user accounts.


## Getting Started

To run the Admin Panel locally, follow these steps:

1. Clone this repository to your local machine.
2. Install dependencies by running `npm install`.
3. Start the development server by running `npm start`.
4. Access the application in your web browser at `http://localhost:3000`.

## Sign In

To sign in and obtain a JWT token, follow these steps:

1. Access the Sign In page of the application.
2. Enter your email and password in the provided fields.
3. Click the "Sign In" button.
4. Upon successful authentication, you will receive a JWT token.

## Authenticated APIs

Once authenticated, you can access authenticated APIs by including the JWT token in the request headers. Here's how to do it:

