
export default function filteredData (data) {
    let dataFiltered = {};
    Object.entries(data).forEach(([key, value]) => {
        if (value !== "n/a" && value !== "unknown") {
            dataFiltered[key] = value;
        }
      });
      return dataFiltered;
}