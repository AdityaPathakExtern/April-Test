
app.get('/users/:userId', [
    UsersController.getById
]);
app.get('/', (req, res) => {
    connection.query('select * ID', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//get id
app.get('/:id', (req, res) => {
    connection.query('select * ID=?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

//get item Id
app.get('/users/:user_unique_Id', [
    UsersController.getItemId
]);
app.get('/:id', (req, res) => {
    connection.query('select * UUID=?', [req.params.itemid], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});
//quantity
app.get('/users/:user_Quantity', [
    UsersController.getquantity
]);
app.get('/:id', (req, res) => {
    connection.query('select * UUID=?', [req.params.quantity], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});





app.get('/users/:user_Assigned by', [
    UsersController.getAssignedby
]);
app.get('/:id', (req, res) => {
    connection.query('select * UUID=?', [req.params.assignedby], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

app.get('/users/:user_Created_at', [
    UsersController.getcreatedat
]);
app.get('/:id', (req, res) => {
    connection.query('select * UUID=?', [req.params.createat], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});


app.get('/users/:user_Update_at', [
    UsersController.getcreatedat
]);
app.get('/:id', (req, res) => {
    connection.query('select * UUID=?', [req.params.updateat], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

app.get('/users/:user_Created_by', [
    UsersController.getcreatedby
]);
app.get('/:id', (req, res) => {
    connection.query('select * UUID=?', [req.params.createadby], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});

