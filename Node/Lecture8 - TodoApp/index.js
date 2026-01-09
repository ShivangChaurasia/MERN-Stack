const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

let counter = 1;
app.get('/todo', (req,res,next) => {
    try{
        fs.readFile('./todos.txt', 'utf-8', (err, data) => {
            if (err) return next(err);
            
            let todos = data
                .trim()
                .split('\n')
                .map(line => JSON.parse(line));
            if(!req.headers.userid){
                return res.status(200).json(todos)
            }
            todos = todos.filter(todo => todo.userid === req.headers.userid);
            res.status(200).json(todos);
        })
    }catch(err){
        next(err)
    }
})
app.post('/todo', (req,res,next) => {
    try{
        let todo = {
            title: req.body.todo,
            description: req.body.desc,
            isChecked: false,
            id: counter++,
            userid: req.headers.userid,
            createdAt: new Date().toLocaleString()
        }
        if(!req.headers.userid){
            return res.status(400).json({message: "User ID is required"})
        }
        fs.appendFile('./todos.txt', JSON.stringify(todo) + '\n', (err) => {
            if(err) throw err;
        })

        return res.status(200).send("Task Added Successfully")
    }catch(err){
        next(err)
    }
})

app.put('/todo/:id', (req, res, next) => {
    const id = Number(req.params.id);

    fs.readFile('./todos.txt', 'utf-8', (err, data) => {
        if (err) return next(err);

        let todos = data
            .trim()
            .split('\n')
            .map(line => JSON.parse(line));

        const index = todos.findIndex(todo => todo.id === id && todo.userid === req.headers.userid);

        if (index === -1) {
            return res.status(404).json({ message: "Todo not found" });
        }

        todos[index] = {
            ...todos[index],
            title: req.body.todo ?? todos[index].title,
            description: req.body.desc ?? todos[index].description,
            isChecked: req.body.isChecked ?? todos[index].isChecked
        };

        const updatedData = todos.map(t => JSON.stringify(t)).join('\n') + '\n';

        fs.writeFile('./todos.txt', updatedData, err => {
            if (err) return next(err);
            res.status(200).json({ message: "Todo updated successfully" });
        });
    });
});


app.delete('/todo/:id', (req, res, next) => {
    const id = Number(req.params.id);

    fs.readFile('./todos.txt', 'utf-8', (err, data) => {
        if (err) return next(err);

        let todos = data
            .trim()
            .split('\n')
            .map(line => JSON.parse(line));

        const index = todos.findIndex(todo => todo.id === id && todo.userid === req.headers.userid);

        if (index === -1) {
            return res.status(404).json({ message: "Todo not found" });
        }

        todos.splice(index, 1);

        const updatedData = todos.map(t => JSON.stringify(t)).join('\n') + '\n';

        fs.writeFile('./todos.txt', updatedData, err => {
            if (err) return next(err);
            res.status(200).json({ message: "Task deleted successfully" });
        });
    });
});


app.use((req,res) => {
    res.status(404).send("404 Not Found", req.url)
})

app.use((err,req,res,next) => {
    console.error(err.stack)
    res.status(500).send("Something broke!")
})

app.listen(3000, (req,res) => {
    console.log("Server Running at 3000")
})