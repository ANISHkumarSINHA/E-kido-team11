const dictionary = {
    apple: "A fruit with a red or green skin and a crisp texture.",
    banana: "A long curved fruit with a yellow skin.",
    race :"a competition between runners, horses, vehicles, etc. to see which is the fastest in covering a set course. "
  };
  
  function search() {
    const searchInput = document.getElementById("searchInput");
    const searchResult = document.getElementById("searchResult");
    const word = searchInput.value.toLowerCase();
  
    if (dictionary[word]) {
      searchResult.textContent = dictionary[word];
    } else {
      searchResult.textContent = "Word not found in the dictionary.";
    }
  }
  