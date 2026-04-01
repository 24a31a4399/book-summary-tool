async function getSummary() {
    let book = document.getElementById("book").value;
    let author = document.getElementById("author").value;

    document.getElementById("output").innerText = "Generating AI summary...";

    let response = await fetch("https://YOUR_BACKEND_LINK/getSummary", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ book, author })
    });

    let data = await response.json();
    document.getElementById("output").innerText = data.content;
}
