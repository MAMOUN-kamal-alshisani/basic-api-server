'use strict';

const clothesModel = (Sequelize,DataType)=>Sequelize.define('clothes',{
    clothesName:{

        type:DataType.STRING,
        allowNull: false,
        },

clothesType:{
type:DataType.STRING,
},

color:{
type:DataType.STRING,
allowNull: false,
},
}); 

module.exports =clothesModel;