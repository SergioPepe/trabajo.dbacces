import Teacher from '../models/rest/teacher';

export async function getTeacher(req, res) {
  try {
    const teachers = await Teacher.findAll();
    res.json({
      data: teachers
    });
  }catch(e) {
    console.log(e)
    res.status(500).json({
      message: 'server is not found',
    })
  }
};

export async function createTeacher(req, res)  {
  const { name, lastname, inicio, finalizacion, classid } = req.body
  try {
    let newTeacher = await Teacher.create({
      name,
      lastname,
      inicio,
      finalizacion,
      classid
    }, {
      fields: ['name', 'lastname', 'inicio', 'finalizacion', 'classid' ]
    })
    if(newTeacher) {
      res.json({
        message: 'Teacher created succesfully',
        data: newTeacher
      })
    }
  } catch(e) {
    console.log(e);
    res.status(500).json({
      message: e,
    })
  }
};

export async function getOneTeacher(req, res) {
  const { id } = req.params;
  try{
    const teacher = await Teacher.findOne({
      where: {
        id
      }
    });
    res.json(teacher)
  } catch(e) {
    res.status(500).json({
      message: 'server is not found',
    })
  }
};

export async function deleteTeacher(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await Teacher.destroy({
      where: {
        id
      }
    })
    res.json({
      message: 'Teacher Deleted Succesfully',
      count: deleteRowCount
    })
  } catch(e) {
    res.status(500).json({
      message: 'We cant delete the Teacher',
    })
  }
};

export async function updateTeacher(req, res) {
  const { id } = req.params;
  const { name, lastname, inicio, finalizacion, classid } = req.body;
  
    const teachers = await Teacher.findAll({
       where: {
         id
       }
    })

    if(teachers.length > 0) {
      teachers.forEach(async element => {
        await element.update({
          name,
          lastname,
          inicio,
          finalizacion,
          classid
        }) 
      });
    }

    return res.json({
      message: 'Teacher Updated',
      data: teachers
    });
};

export async function getTeacherByClass(req, res) {
  const { classid } = req.params;

  const teachers = await Teacher.findAll({
    where: { classid }
    
  })
  res.json({teachers})
}

