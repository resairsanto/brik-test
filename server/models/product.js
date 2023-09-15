'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Category, { foreignKey: "CategoryId" })
    }
  }
  Product.init({
    sku: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: "SKU is required."
        },
        notEmpty: {
          msg: "SKU is required."
        }
      }
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: "Name is required."
        },
        notEmpty: {
          msg: "Name is required."
        }
      }
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: "Description is required."
        },
        notEmpty: {
          msg: "Description is required."
        }
      }
    },
    weight: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    width: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    length: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    height: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notNull: {
          msg: "Image is required."
        },
        notEmpty: {
          msg: "Image is required."
        }
      }
    },
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};