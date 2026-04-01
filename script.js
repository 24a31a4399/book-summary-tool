async function getSummary() {
    let book = document.getElementById("book").value.toLowerCase().trim();
    let author = document.getElementById("author").value.toLowerCase().trim();

    document.getElementById("output").innerText = "Loading...";

    let response = await fetch("books.json");
    let data = await response.json();

    let found = data.find(item =>
        book.includes(item.book) ||
        author.includes(item.author)
    );

    if (found) {
        document.getElementById("output").innerText = found.summary;
    } else {
        document.getElementById("output").innerText = "Summary not available";
    }
}
