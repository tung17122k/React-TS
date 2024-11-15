/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import Card from "./components/Card";
import { Permission } from "./utils/enums";
import { Product } from "./utils/interface";
import { Age } from "./utils/types";

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
// const travelItem: image, name, totalReviews, rating, location, price, date, departure, features: wifi, parking, offer

const travelItem: {
  image: string;
  name: string;
  totalReviews: number;
  rating: number;
  location: string;
  price: number;
  date: number;
  departure: string;
  features: {
    wifi: boolean;
    parking: boolean;
    offer: boolean;
  };
}[] = [
  {
    image: "https://example.com/image1.jpg",
    name: "Travel 1",
    totalReviews: 100,
    rating: 4.5,
    location: "Hanoi",
    price: 100,
    date: 2024,
    departure: "Hanoi",
    features: {
      wifi: true,
      parking: false,
      offer: true,
    },
  },
];

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

  // user
  //union types
  //tuple
  // permission
  // không nên dùng any
  // 18 | 30 | 40 => dùng 1 trong 3 cái này => literal

  const user: {
    firstName: string;
    lastName: string;
    age: Age;
    isStudent: boolean;
    school: (string | number)[];
    scores: number[];
    contact: [number, string];
    permission: Permission;
  } = {
    firstName: "Tung",
    lastName: "Nguyen",
    age: 18,
    isStudent: true,
    school: ["Dong Ngac", "Xuan Dinh", "HNUE", 35],
    scores: [10, 9, 8],
    contact: [392293758, "tung@gmail.com"],
    permission: Permission.ADMIN,
  };

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
      {/* <Card></Card> */}
    </>
  );
}

export default App;
