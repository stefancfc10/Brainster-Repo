
const books = [
{title:"The Hobbit", author:"J.R.R. Tolkien",  maxPages:200 , onPage:60},
{title:"Harry Potter", author:"J.K. Rowling",  maxPages:250 , onPage:150},
{title:"50 Shades of Grey", author:"E.L. James",  maxPages:150 , onPage:150},
{title:"Don Quixote", author:"Miguel de Ceervantes",  maxPages:350 , onPage:300},
{title:"Hamlet", author:"William Shakespeare",  maxPages:550 , onPage:550},
];


books.forEach(book => {
    book.percentage = Math.round((book.onPage / book.maxPages) *100) + "%";
})

const form = document.querySelector("#form");

const addBook = () => {
    
    const list = document.querySelector("#list");
    list.innerHTML = "";
    const read = document.querySelector("#read");
    read.innerHTML = "";
    const table = document.querySelector("#table");
    table.innerHTML = "";


    books.forEach((book) => {
        let item = document.createElement("li")
        item.textContent =`${book.title} by ${book.author}`
        list.appendChild(item);

        let status = document.createElement("li")
        status.textContent = book.onPage === book.maxPages ? `You already read ${book.title} by ${book.author}` : ` You still need to read ${book.title} by ${book.author}`
        read.appendChild(status);

        let newRow = document.createElement("tr");
        newRow.innerHTML = `

        <td>${book.title}</td>   

        <td>${book.author}</td>

        <td>${book.maxPages}</td>   

        <td>${book.onPage}</td> 

        <td>
            <div id="Progress" >

                <div id="Bar" style = width:${book.percentage};>${book.percentage}</div>
                
            </div>
        </td> `;

        table.appendChild(newRow);
    })

    
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const current = document.querySelector("#current").value;
    const page = document.querySelector("#page").value;
    
    if(current > page) {
        form.reset();
        alert ("Enter a valid Book Information")

    } else if ( title === "" || author === " " || current=== 0 || page === 0 ) {
        form.reset();
        alert ("Enter a valid Book Information")
    }else {
         newBook = {
            title: title,
            author: author,
            maxPages: page,
            onPage: current,
            percentage: Math.round((current / page) * 100) + "%",
        }
    }
   
    books.push(newBook);

    addBook();

    form.reset();
});

addBook();
