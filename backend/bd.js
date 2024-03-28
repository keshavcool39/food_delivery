const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://keshavcool39:keshavcool39%40@cluster0.kkjjj1t.mongodb.net/dilevery_app"
);

const organizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const itemSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["perishable", "non-perishable"],
    required: true,
  },
  description: String,
});

const pricingSchema = new mongoose.Schema({
  organization_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization",
    required: true,
  },
  item_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
    required: true,
  },
  zone: {
    type: String,
    required: true,
  },
  base_distance_in_km: {
    type: Number,
    required: true,
  },
  km_price: {
    type: Number,
    required: true,
  },
  fix_price: {
    type: Number,
    required: true,
  },
});

const Organization = mongoose.model("Organization", organizationSchema);
const Item = mongoose.model("Item", itemSchema);
const Pricing = mongoose.model("Pricing", pricingSchema);
module.exports = {
  Organization,
  Item,
  Pricing,
};
