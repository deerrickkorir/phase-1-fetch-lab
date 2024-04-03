function fetchBooks() {
  // Send a fetch request to the API endpoint with a longer timeout period
  return fetch("https://anapioficeandfire.com/api/books", { timeout: 10000 }) // 10 seconds timeout
    .then((response) => {
      // Check if the fetch request was successful
      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }
      // Parse the JSON response
      return response.json();
    })
    .then((data) => {
      // Call renderBooks function with the JSON data
      renderBooks(data);
    })
    .catch((error) => {
      console.error("Error fetching books:", error);
      // Handle the fetch error gracefully (e.g., retry or log the error)
    });
}
