import connectDB from "../../../middleware/mongoose";
import Hotel from "../../../models/Hotel";

const handler = async (req, res) => {
  const { min, max, ...others } = req.query;
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(hotels);
  } catch (err) {
    res.status(200).json(err);
  }
};

export default connectDB(handler);
