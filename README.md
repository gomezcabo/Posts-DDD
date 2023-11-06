# Domain Driven Design with React - Posts DDD

## About The Project

The "Posts DDD" repository hosts a straightforward React application that fetches data from an API and displays it in a rudimentary fashion on the screen. The core aim of this repository is to demonstrate the application of Domain-Driven Design (DDD) principles to frontend code written in React.

## Branch Implementations

This repository contains three different implementations, each situated in its own branch:

- **Branch `clean`:** This branch attempts to adhere closely to the principles of Clean Architecture as described in Robert C. Martin's book of the same name. It's structured to reflect the separation of concerns and abstractions that align with DDD approaches.

- **Branch `clean-inversify`:** Following the same architecture as the `clean` branch, this implementation leverages the Inversify library ([Inversify.io](https://inversify.io/)) as an Inversion of Control (IoC) container to manage dependencies.

- **Branch `main`:** This architecture is a simplified variant that differs mainly in two aspects:
  1. It does not rely on dependency injection and inversion; instead, modules are directly used where needed while still maintaining separation.
  2. Instead of organizing domain logic around "Use Cases," it is structured around "Services" which, in the author's opinion, are more readable and easier to use when composing different features.

## Getting Started

To launch the application, you'll need to follow these steps on the respective branch:

1. Install the dependencies:
    ```sh
    npm install
    ```
2. Start the development server:
    ```sh
    npm run dev
    ```

## Prerequisites

Before running the application, make sure you have `npm` installed on your system, which comes with Node.js. You can download and install Node.js from [here](https://nodejs.org/).

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

Don't forget to give the project a star! Thanks again!

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Juan Gómez - [gomezcabo@gmail.com](mailto:gomezcabo@gmail.com)

Project Link: [https://github.com/gomezcabo/Posts-DDD](https://github.com/gomezcabo/Posts-DDD)

