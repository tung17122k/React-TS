import "./App.css";

const reviews: {
  name: string;
  image: string;
  stars: number;
  premiumUser: boolean;
  date: string | number;
}[] = [
  {
    name: "Tung",
    image: "",
    stars: 5,
    premiumUser: true,
    date: "05/09/2022",
  },
  {
    name: "CharkaUI",
    image: "",
    stars: 4,
    premiumUser: false,
    date: 123456789,
  },
];

// optional: khong bat buoc
function App() {
  function displayReview(
    totalReviews: number | string,
    name: string,
    premium: boolean
  ) {
    return (
      <>
        Review total <strong>{totalReviews}</strong> | Last reviewed by{" "}
        <strong>{name}</strong> {premium ? "⭐️" : ""}
      </>
    );
  }
  return (
    <>
      <div className="review">
        <div className="review-image">
          <img
            src="https://images.unsplash.com/photo-1659464797962-62a9b8324abc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </div>
        <div className="review-info">
          {displayReview(
            reviews.length,
            reviews[1].name,
            reviews[0].premiumUser
          )}
        </div>
      </div>
    </>
  );
}

export default App;
