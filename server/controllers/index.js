const { User, Product, Category } = require("../models")

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

      } catch (error) {

      }
   }

   static async createProduct(req, res, next) {
      try {

      } catch (error) {

      }
   }

   static async getAllProducts(req, res, next) {
      try {

      } catch (error) {

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