'use strict';

const POSTGRES_URI =process.env.POSTGRES_URI || "postgres://localhost:5432/lab3";
const { Sequelize, DataTypes } = require("sequelize");
const food=require('./food.model');
const clothes=require('./clothes.model')
let Sql= new Sequelize(POSTGRES_URI,{});


module.exports={

db:Sql,
food:food(Sql, DataTypes),
clothes:clothes(Sql, DataTypes),

}