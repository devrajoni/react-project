import ReactStars from "react-rating-stars-component";

function Rating({ value = "2.5" }) {
  return (
    <div>
      <ReactStars
        count={5}
        edit={true}
        isHalf
        size={24}
        value={value}
        activeColor="#ffc107"
        color="#818894"
      />
    </div>
  );
}

export default Rating;
