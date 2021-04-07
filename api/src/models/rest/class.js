import Sequelize from 'sequelize';
import { sequelize } from '../../config/config'
import Teacher from './teacher'

 const Class = sequelize.define('class', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
}, {
  timestamps: false
}
);

//Class.hasMany(Teacher, { foreingKey: 'classid', sourceKey: 'id' })
//Teacher.hasMany(Class, { foreingKey: 'classid', sourceKey: 'id' })

export default Class;