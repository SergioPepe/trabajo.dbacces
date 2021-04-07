import Sequelize from 'sequelize'
import { sequelize } from '../../config/config'

const Teacher = sequelize.define('teacher', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  lastname: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  inicio: {
    type: Sequelize.TIME,
    allowNull: false
  },
  finalizacion: {
    type: Sequelize.TIME,
    allowNull: false
  },
  classid: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
}, {
  timestamps: false
});



export default Teacher;