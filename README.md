# Project Documentation

## Ventura Securities IPO Listings

### Overview
This project provides an interface for browsing and viewing details of all IPOs listed on the Groww App. It is designed to offer a seamless experience across web and mobile platforms.

---

### Features
- **All IPO Listings Page**: View a comprehensive list of all IPOs.
- **IPO Detail Page**: Explore detailed information about a selected IPO.
- **Responsive Design**: Optimized for web and mobile devices.

---

### Tech Stack
- **React**: For building the user interface.
- **TypeScript**: Ensuring type safety and robust code.
- **Tailwind CSS**: For styling and creating a responsive design.

---

### Data Source
- The app  JSON data related to listed IPOs used by Groww App.

---

### Usage
1. Clone the repository:
   ```bash
   git clone git@github.com:akshaydubey50/ipo-calendar.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ipo-calendar
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Access the application at `http://localhost:3000`.

---

### Folder Structure
```
.
├── public
├── src
│   ├── components      # Reusable UI components
│   ├── pages           # Page components (Listings, Details)
│   ├── constant        # JSON data  │   
│   ├── styles          # Tailwind CSS configurations
│   └── utils           # Utility functions
├── package.json        # Project dependencies
└── README.md           # Project documentation
```

---

### Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature/fix:
   ```bash
   git flow feature start -name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add a meaningful commit message"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

---

