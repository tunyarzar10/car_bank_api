const uuid = require('uuid')
module.exports =(sequelize,Sequelize)=>{
        const User = sequelize.define(
            'users',
            {
                firstname: {
                    type:Sequelize.STRING,
                    allowNull: false,
                },
                lastname: {
                    type:Sequelize.STRING,
                    allowNull: false,
                },
                username: {
                    type:Sequelize.STRING,
                    allowNull: false,
                },
                email: {
                    type:Sequelize.STRING,
                    allowNull: false,
                },
                password: {
                    type:Sequelize.STRING,
                    allowNull: false,
                },
                userType: {
                    type:Sequelize.STRING,
                    allowNull: false,
                },
                phone: {
                    type:Sequelize.STRING,
                    allowNull: false,
                },
                role:{
                    type:Sequelize.STRING,
                    allowNull: false,
                },
                address:{
                    type:Sequelize.STRING,
                    allowNull: false,
                },
            },
            {timestamps:true}
        );
        return User;
}