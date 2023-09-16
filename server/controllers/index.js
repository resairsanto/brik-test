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
         next(error)
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
         next(error)
      }
   }

   static async createProduct(req, res, next) {
      try {
         const {
            sku,
            name,
            CategoryId,
            description,
            weight,
            width,
            length,
            height,
            image,
            price } = req.body
         await Product.create({
            sku,
            name,
            CategoryId,
            description,
            weight,
            width,
            length,
            height,
            image,
            price
         })
         res.status(201).json({ message: "Product created!" })
      } catch (error) {
         next(error)
      }
   }

   static async getAllProducts(req, res, next) {
      const { page, search } = req.query
      let querySQL = {
         where: {},
         include: [
            {
               model: Category,
            }
         ],
         order: [
            ['updatedAt', 'DESC']
         ]
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
         next(error)
      }
   }

   static async findProduct(req, res, next) {
      try {
         const { id } = req.params
         const product = await Product.findByPk(id, {
            include: [
               {
                  model: Category
               }
            ]
         })
         res.status(201).json(product)
      } catch (error) {
         next(error)
      }
   }

   static async updateProduct(req, res, next) {
      try {
         const { id } = req.params
         const {
            sku,
            name,
            CategoryId,
            description,
            weight,
            width,
            length,
            height,
            image,
            price } = req.body
         await Product.update({
            sku,
            name,
            CategoryId,
            description,
            weight,
            width,
            length,
            height,
            image,
            price
         }, { where: { id } })
         res.status(201).json({ message: "Product successfully updated" })
      } catch (error) {
         next(error)
      }
   }

   static async deleteProduct(req, res, next) {
      try {
         const { id } = req.params
         const deletedProduct = await Product.destroy({ where: { id } })
         if (deletedProduct === 0) throw { name: "NotFound" }
         res.status(201).json({ message: "Product successfully deleted" })
      } catch (error) {
         next(error)
      }
   }
}

module.exports = Controller