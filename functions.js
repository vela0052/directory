// Create a function list of the array clients and using the map() tool, create the list of clients using the HTML provided
function list (clients) {
    return clients.map(client => `
    <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">${client.name}
      <strong>$ ${client.balance}</strong>
    </li>`).join('')

}
// Using the sort() tool, create a function order that returns the list order depending on the property value(balance, name, index) 
function order (clients, property) {
    return clients.sort((a, b) => {
      if (a[property] < b[property]) {
        return -1
      } else if (a[property] > b[property]) {
        return 1
      } else {
        return 0
      }
    })
}
// Create a total based on the array and taking and adding up all the balance properties of each object of the array.
function total (clients) {
    return clients.reduce((total, client) => (total += client.balance), 0)
}
// Taking a number for the function info, returns the index of the list element clicked, by using the find() tool and comparing the index of the object with the number
function info (number){

return clients.find(client => (client.index === number))
    
}
// Taking the query as the entry element for the function search 

function search (query) {
    // Using the filter() method to return the array with the query provided for only the name property of the object
    return clients.filter(client =>
        client.name.toLowerCase().includes(query.toLowerCase()))
 }

    