
// For this challenge, you will solve a task where you will need to prompt for a
// name. Pass the name to a function that will find the given name from the
// given array. Use the found array element to print out the name in the DOM,
// the voting status, and the given grade. If they didn’t vote, don’t print the last
// row. The arrays are as follows:
// [[“Antonio”, true, 5], [“Marija”, false], [“Darko”, true, 3]]…


  
  
  const inventory = [
    { name: "Antonio", voted: true, grade: '5' },
    { name: "Marija", voted: false,},
    { name: "Darko", voted: true, grade: '3'},
    { name: "Ema", voted: true, grade: '4' },
    { name: "Ina", voted: false, },
  ]
  
  const SearchName = prompt("Enter a name ");


function generateTable(name) {


    const valid = inventory.find((valid) => valid.name === name);


    const container = document.querySelector("#result");

    if (valid) {


      if (valid.voted === true) {


        container.innerHTML = 
        ` <table>
            <tr>
              <th>${valid.name}</th>
              <th>${valid.voted ? "Voted!" : "Didn't vote"}</th>
             <th>${valid.grade}</th>
            </tr>
        </table>`
             

      }

      else if (valid.voted === false) {

        container.innerHTML += 
        ` <table>
        <tr>
            <th>${valid.name}</th>
            <th>${valid.voted ? "Voted!" : "Didn't vote"}</th>
        </tr>
    </table>`
             

      }
    }

    else {

      alert("Name not found, try again.");
    }
  }
  generateTable(SearchName);









  
  