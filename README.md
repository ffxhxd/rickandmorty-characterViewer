
# Rick and Morty - Assignment for BILD

This is a Rick and Morty character viewer application that allows users to explore a list of characters, episodes and locations from the show and view detailed information about each character. The application is built using React.js.

# Live website link : <https://illustrious-donut-0ef350.netlify.app/>
## Features

- Character page : Displays list of the character cards containing the name, image, location, origin, staus of the character.
- Pagination : Implemented pagination, ensuring seamless User Experience.
- Filtler : Implemented filter functionality based on Status (Dead or Alive).  
- Character list page : Displays more details about the character.
- Custom Error Page : Using react-router-dom to enhance user Experience.
- Episode page : Displays list of episodes.
- Locations page : Displays list of locations.


## Getting Started
To run the application locally, follow these steps:

Clone the repository:
- git clone <https://github.com/ffxhxd/rickandmorty-bild.git>

Navigate to the project directory:
- cd rickandmorty-bild

Install dependencies:
- npm install

Start the development server:
- npm start

- Open your browser and go to http://localhost:3000 to view the Rick and Morty Character Viewer.


## Technologies Used

- JavaScript 
- React.js
- Tailwind CSS
- SCSS 

# Best Industry Standard Practices Implemented:

- Custom Hooks for API Calls:
Utilizing custom hooks enhances reusability and maintains a clear separation of concerns.

- Centralized Constants:
All hardcoded strings and URLs are consolidated in a separate constant.js file, promoting centralized configuration for easy maintenance.

- Utility Functions in Utils Folder:
The utils folder houses utility functions and helper modules, fostering modularity and code organization.

- Compact Components for Readability:
Components are designed to be concise, with each containing 80-100 lines of code, improving readability and ease of maintenance.

- Pagination Debouncing for Efficiency:
Implemented debouncing in pagination to reduce the number of API calls by 50%, optimizing performance.

- DRY Principle Adhered To:
The Don't Repeat Yourself (DRY) principle is consistently followed, minimizing redundancy and improving code maintainability.

- Single Responsibility Principle Maintained:
Components adhere to the Single Responsibility Principle (SRP), ensuring each component has a focused purpose for better maintainability.

- Clean, Optimized, and Scalable Codebase:
The codebase is clean, optimized, and scalable, prioritizing clarity, performance, and adaptability to evolving requirements.

- Organized Component and Styling Structure:
Components and their styling files are organized in separate folders, enhancing code organization and ease of styling updates.

- Robust Error Handling:
Comprehensive error-handling mechanisms have been implemented, providing meaningful messages for debugging.

- Thorough Manual Testing:
Rigorous manual testing has been conducted across various devices, ensuring a robust and user-friendly application.
## Authors

- [@fahad](https://www.github.com/ffxhxd)
- Made with ❤️ for Bild.

