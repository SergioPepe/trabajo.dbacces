import express, { json } from 'express';
import morgan from 'morgan';

//importing routes
import teacherRoutes from './routes/teacher';
import classRoutes from './routes/class';
 

//initialization 
const app= express();

// middelwares
app.use(morgan("combined"));
app.use(json());

//routes
app.use("/api/teachers",teacherRoutes);
app.use("/api/classes",classRoutes);

app.listen(4000, ()=> {
  console.log(`listening on port 4000`);
});


export default app;