const { User, Product, Category } = require("../models")
const { comparePassword } = require("../helpers/bcryptjs")
const { signToken } = require("../helpers/jwt")
const { Op } = require("sequelize")

class Controller {
   static async register(req, res, next) {
      try {
         const { email, password } = req.body;
         const user = await User.create({ email, password });
         res.status(201).json({ id: user.id, email: user.email });
      } catch (error) {
         console.log(error)
      }
   }

   static async login(req, res, next) {
      try {
         const { email, password } = req.body;
         if (!email || !password) throw { name: "EmailPasswordRequired" };
         const user = await User.findOne({
            where: {
               email,
            },
         });
         if (!user) throw { name: "EmailPasswordInvalid" };
         const checkPassword = comparePassword(password, user.password);
         if (!checkPassword) throw { name: "EmailPasswordInvalid" };
         const payload = { id: user.id };
         const access_token = signToken(payload);
         res.status(200).json({ access_token });
      } catch (error) {
         console.log(error)
      }
   }

   static async createProduct(req, res, next) {
      try {

      } catch (error) {
      }
   }

   static async getAllProducts(req, res, next) {
      const { page, search } = req.query
      let querySQL = {
         where: {}
      }
      let offset;
      let limit;
      if (page !== '' && typeof page !== "undefined") {
         limit = 10
         offset = (page - 1) * limit
         querySQL.offset = offset
         querySQL.limit = limit
      }
      if (search !== '' && typeof search !== "undefined") {
         querySQL.where.name = {
            [Op.iLike]: `%${search}%`
         }
      }
      try {
         let Products = await Product.findAndCountAll(querySQL);
         res.status(200).json(Products);
      } catch (error) {
         console.log(error)
      }
   }

   static async updateProduct(req, res, next) {
      try {

      } catch (error) {

      }
   }

   static async deleteProduct(req, res, next) {
      try {

      } catch (error) {

      }
   }
}

module.exports = Controller