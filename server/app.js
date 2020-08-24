const express = require('express');
const fs = require("fs").promises;
const app = express();

const path = process.env.MY_VARIABLE||"./data.json"


app.get("/api/tickets/:searchText", async (req, res) => {
    const content = await fs.readFile(path);
    const tickets = JSON.parse(content);
    // const lowerCaseSearchText = searchText.toLowerCase
    const lowerCaseSearchText = req.params.id.toLowerCase()
    filteredTickets = tickets.filter(ticket => ticket["title"].toLowerCase().includes(lowerCaseSearchText))
    res.send(filteredTickets);
})


app.post("api/tickets/:ticketId/done", (req, res => {
    const content = await fs.readFile(path);
    const tickets = JSON.parse(content);
    tickets.forEach(ticket, i => {
        if(ticket["id"] = req.params.ticketId) {
            ticket["done"] = true
        }
    await fs.writeFile(path, JSON.stringify(ticket));
    res.send(tickets);
    });
}))


app.post("api/tickets/:ticketId/undone", (req, res => {
    const content = await fs.readFile(path);
    const tickets = JSON.parse(content);
    tickets.forEach(ticket, i => {
        if(ticket["id"] = req.params.ticketId) {
            ticket["done"] = false
        }
    await fs.writeFile(path, JSON.stringify(ticket));
    res.send(tickets);
    });
}))



app.listen(3000, () => console.log("listening on port 4000..."));
module.exports = app;