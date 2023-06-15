import sql from "mssql";

const config = {
  user: "sa",
  password: "1234",
  server: "Nathan",
  database: "todoDB",
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

export const getTodos = async (req, res) => {
  try {
    let pool = await sql.connect(config);
    // console.log(pool)
    const todos = await pool.request().query("SELECT * FROM todos");
    res.status(200).json(todos.recordset);
  } catch (error) {
    res.status(404).json(error);
  } finally {
    sql.close();
  }
};

export const createTodo = async (req, res) => {
  try {
    const { task } = req.body;
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .input("task", sql.VarChar, task)
      .query("INSERT INTO todos (task) VALUES (@task)");
    res.json({ message: "Todo created successfully" });
    console.log(result);
  } catch (error) {
    res
      .status(501)
      .json({ error: "An error occurred while creating the todo" });
  } finally {
    sql.close();
  }
};

export const getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    let pool = await sql.connect(config);

    const todo = await pool
      .request()
      .input("id", sql.Int, id)
      .query("SELECT * FROM todos WHERE id = @id");
    // console.log(todo);
    res.status(200).json(todo.recordset);
  } catch (error) {
    res.status(404).json({ error: "Todo not found" });
  } finally {
    sql.close();
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { task } = req.body;

    console.log(id, task);

    let pool = await sql.connect(config);
    pool
      .request()
      .input("id", sql.Int, id)
      .input("task", sql.VarChar, task)
      .query("UPDATE todos SET task = @task WHERE id = @id");
    res.status(200).json({ message: "user created successfuly" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update the todo" });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
  let pool = await sql.connect(config);
  await pool
    .request()
    .input("id", sql.Int, id)
    .query("DELETE FROM todos WHERE id = @id");
    res.status(200).json({message:'Todo deleted sucessfully'})
  } catch (error) {
    res.status(500).json({error:'Failed to delete Todo'})
  }
  finally{
    sql.close()
  }
};
