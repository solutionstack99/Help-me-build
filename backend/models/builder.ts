import mongoose, { Schema, Document } from "mongoose";

export interface IImage extends Document {
  public_id: string;
  url: string;
}

export interface IReview extends Document {
  user: mongoose.Schema.Types.ObjectId;
  rating: number;
  comment: string;
}

export interface ILocation extends Document {
  type: string;
  coordinates: [number];
  formattedAddress: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface IBuilder extends Document {
  name: string;
  description: string;
  pricePerHour: number;
  address: string;
  location: {
    type: string;
    coordinates: [number];
    formattedAddress: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  furnitureCapacity: number;
  numOfWorkers: number;
  isMnualBooklet: boolean;
  isTools: boolean;
  isCleaning: boolean;
  isMoveFurniture: boolean;
  ratings: number;
  numOfReviews: number;
  images: IImage[];
  category: string;
  reviews: IBuilder[];
  user: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
}

const builderShema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter builder name."],
    trim: true,
    MaxLength: [200, "Name can not be more than 200 characters."],
  },
  description: {
    type: String,
    required: [true, "Please enter builder description."],
  },
  pricePerHour: {
    type: Number,
    required: [true, "Please enter builder price per hour."],
    default: 0.0,
  },
  address: {
    type: String,
    required: [true, "Please enter builder address."],
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
      index: "2dsphere",
    },
    formattedAddress: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
  },
  furnitureCapacity: {
    type: Number,
    required: [true, "Please enter builder furniture capacity."],
  },
  numOfWorkers: {
    type: Number,
    default: false,
  },
  isMnualBooklet: {
    type: Boolean,
    default: false,
  },
  isTools: {
    type: Boolean,
    default: false,
  },
  isCleaning: {
    type: Boolean,
    default: false,
  },
  isMoveFurniture: {
    type: Boolean,
    default: false,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter builder category"],
    enum: {
      values: ["Oversize", "Large", "Medium", "Small", "Extra Small"],
      message: "Please select correct category for furniture.",
    },
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Builder ||
  mongoose.model<IBuilder>("Builder", builderShema);
