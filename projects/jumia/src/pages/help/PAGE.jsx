import PropTypes from "prop-types";
import "../../styles/pages.scss"
import { BsStarFill, BsStar } from "react-icons/bs";
import CategoryCard from "../../components/category";
import CategoryHeader from "./categoryHeader";
import { groceries } from "../../assets/data/categories/supermaket";
const data = [
  "Air Fresheners",
  "Beer, Wine & Spirits",
  "Beverages",
  "Breads & Bakery",
  "Candy & Chocolate",
  "Canned, Jarred & Packaged Foods",
  "Cleaning Tools",
  "Condiments & Salad Dressings",
  "Cooking & Baking",
  "Dairy, Cheese & Eggs",
  "Dishwashing",
  "Dried Beans, Grains & Rice",
  "Drinks",
  "Food & Beverage Gifts",
  "Food Cupboard",
  "Herbs, Spices & Seasonings",
  "Household Cleaning",
  "Household Supplies",
  "Laundry",
  "Lighters & Matches",
  "Paper & Plastic",
  "Tobacco-Related Products",
  "Gift Items, Hamper Gifts & Party",
];
const Page = (props) => { 
  return (
    <div className="page-container">
      <div className="aside-items">
        <h4>CATEGORY</h4>
        <div>
          Grocery
          <ul>
            {data.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          Brand
          <input type="text" />
          <input type="checkbox" name="2Sure" id="" />
          <input type="checkbox" name="915 Generation" id="" />
          <input type="checkbox" name="Airwick" id="" />
          <input type="checkbox" name="Ariel" id="" />
          <input type="checkbox" name="Astonish" id="" />
        </div>
        <div>
          Price
          <div className="slidecontainer">
            <input
              type="range"
              min="1"
              max="100"
              value="50"
              className="slider"
              id="myRange"
            />
          </div>
        </div>
        <div>DISCOUNT PERCENTAGE</div>
        <div>
          PRODUCT
          <div className="d-flex flex-column">
            <span>
              <BsStarFill color="orange" /> <BsStarFill color="orange" />{" "}
              <BsStarFill color="orange" /> <BsStarFill color="orange" />{" "}
              <BsStar />
            </span>
            <span>
              <BsStarFill color="orange" /> <BsStarFill color="orange" />{" "}
              <BsStarFill color="orange" /> <BsStar /> <BsStar />
            </span>
            <span>
              <BsStarFill color="orange" /> <BsStarFill color="orange" />{" "}
              <BsStar /> <BsStar /> <BsStar />
            </span>
            <span>
              <BsStarFill color="orange" /> <BsStar /> <BsStar /> <BsStar />{" "}
              <BsStar />
            </span>
          </div>
        </div>
        <div>
          SELLER SCORE
          <span>80% or more</span>
          <span>60% or more</span>
          <span>40% or more</span>
          <span>20% or more</span>
        </div>
        <div>
          SHIPPED FROM
          <span>Shipped from abroad</span>
          <span>Shipped from Nigeria</span>
        </div>
        <div>EXPRESS DELIVERY</div>
        <div>CAMPAIGNS</div>
        <div>OFFICIAL STORES</div>
      </div>
      <div className="main-items">
        <CategoryHeader/>
        <CategoryCard items={groceries}/> 
      </div>
    </div>
  );
};

Page.propTypes = {};

export default Page;
