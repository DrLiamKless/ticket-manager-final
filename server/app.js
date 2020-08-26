const express = require('express');
const { AsyncLocalStorage } = require('async_hooks');
const fs = require("fs");
const app = express();

app.use(express.static("../client/build"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const path = process.env.MY_VARIABLE||"./data.json"

app.get("/api/tickets", async (req, res) => {
    const content = fs.readFileSync("./data.json");
    const tickets = JSON.parse(content);
    if (req.query.searchText) {
        const filteredTickets = tickets.filter(ticket => {
            const lowerCaseSearchText = req.query.searchText.toLowerCase();
            const lowerCaseTitle = ticket["title"].toLowerCase();
            return lowerCaseTitle.includes(lowerCaseSearchText)});
        res.send(filteredTickets);
    } else {
        res.send(tickets)
    }

})


app.post("/api/tickets/:ticketId/done", async (req, res) => {
    const content = fs.readFileSync("./data.json");
    const tickets = JSON.parse(content);
    tickets.forEach(ticket => {
        if(`${ticket["id"]}` === req.params.ticketId) {
            ticket["done"] = true
        }
    });
    fs.writeFileSync(path, JSON.stringify(tickets));
    res.send({updated: true});
})


app.post("/api/tickets/:ticketId/undone", async (req, res) => {
    const content =  fs.readFileSync(path);
    const tickets = JSON.parse(content);
    tickets.forEach(ticket => {
        if(`${ticket["id"]}` === req.params.ticketId) {
            ticket["done"] = false
        }
    });
     fs.writeFileSync(path, JSON.stringify(tickets));
    res.send({updated: true});
})

module.exports = app;