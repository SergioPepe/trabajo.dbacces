import Class from '../models/rest/class'


export async function getClass(req, res) {
  try {
    const classes = await Class.findAll();
    res.json({
      data: classes
    });
  }catch(e) {
    res.status(500).json({
      message: 'server is not found',
    })
  }
};

export async function createClass(req, res)  {
  const { name } = req.body
  try {
    let newClass = await Class.create({
      name
    }, {
      fields: ['name']
    })
    if(newClass) {
      res.json({
        message: 'Class created succesfully',
        data: newClass
      })
    }
  } catch(e) {
    console.log(e);
    res.status(500).json({
      message: 'server is not found',
    })
  }
};

export async function getOneClass(req, res) {
  const { id } = req.params;
  try{
    const clase = await Class.findOne({
      where: {
        id
      }
    });
    res.json(clase)
  } catch(e) {
    res.status(500).json({
      message: 'server is not found',
    })
  }
};

export async function deleteClass(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await Class.destroy({
      where: {
        id
      }
    })
    res.json({
      message: 'Class Deleted Succesfully',
      count: deleteRowCount
    })
  } catch(e) {
    res.status(500).json({
      message: 'We cant delete the class',
    })
  }
};

export async function updateClass(req, res) {
  const { id } = req.params;
  const { name } = req.body;
  
    const classes = await Class.findAll({
       where: {
         id
       }
    })

    if(classes.length > 0) {
      classes.forEach(async element => {
        await element.update({
          name
        })
      });
    }

    return res.json({
      message: 'Class Updated',
      data: classes
    });
};
