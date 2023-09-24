import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../../config/connection";

interface RegencyAttributes {
  id?: number;
  name?: string | null;
  province_id?: number | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface RegencyInput extends Optional<RegencyAttributes, "id"> {}
export interface RegencyOutput extends Required<RegencyAttributes> {}

export default class Regencies
  extends Model<RegencyAttributes, RegencyInput>
  implements RegencyAttributes
{
  public id!: number;
  public name!: string;
  public province_id!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Regencies.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    province_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
  }
);
