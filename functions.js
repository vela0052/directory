function list (clients) {
    return clients.map(client => `
    <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">${client.name}
      <strong>$ ${client.balance}</strong>
    </li>`).join('')

}

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
function total (clients) {
    return clients.reduce((total, client) => (total += client.balance), 0)
}

function info (number){

return clients.find(client => (client.index === number))
    
}

    