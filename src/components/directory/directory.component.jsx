import Categoryitem from "../category-item/category-item";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <Categoryitem key={category.id} category={category}></Categoryitem>
      ))}
    </div>
  );
};

export default Directory;
