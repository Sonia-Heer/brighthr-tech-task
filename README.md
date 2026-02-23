# BrightHR Front-End Technical Task

## Running the Application

### 1. Install dependencies

```bash
npm install
```

### 2. Run the application

```bash
npm run dev
```

### 3. Run the tests

```bash
npm run test
```

## Incomplete Functionality / What I’d Do Next

### Filename filtering

- Add a controlled search input and apply filtering to the current folder contents.

I would add a search input that stores what the user types in state. Then, before rendering the list, I would filter the current folder’s items so only those whose name includes the search text are shown. The filtering would be case-insensitive. After filtering, I would apply the existing sorting logic so both features work together. If no items match, I would display a simple “No results found” message.

### Data model improvements

- Introduce stable unique IDs for files/folders to avoid relying on composite keys (name/date/path) and to better represent real-world data.

### UX

- Improve the overall user experience by making interactive elements feel clearer and more intuitive, including visible focus states for keyboard users, clearer styling for disabled actions, and helpful feedback when a folder is empty.
