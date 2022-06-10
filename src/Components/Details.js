import useFetch from "../Hooks/useFetch";
import "../Component-Styles/details.css";
export default function Details() {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let itemId = params.get("itemdetails");

  const { error, isLoading, data: items } = useFetch(
    "https://my-json-server.typicode.com/egnointhewoods/landing-page/db"
  );
  if (!error && !isLoading && items) {
    return (
      <div className="itemid">
        {items.bestSellers.map((item) => {
          if (Object.values(item).indexOf(itemId) > -1) {
            console.log(itemId);
            return (
              <div>
                <h1 className="itemId">{item.name}</h1>
              </div>
            );
          }
        })}
      </div>
    );
  }
}
