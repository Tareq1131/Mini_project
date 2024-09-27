import React, { useState } from "react";
import "./dataTable.css"

const DataTable = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "id",
    direction: "ascending",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const filteredData = sortedData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEdit = (id) => {
    console.log("Edit item with id:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete item with id:", id);
  };

  return (
    <div className="table-responsive">
      <header className="header">
        <input
          type="text"
          placeholder="Search here"
          className="w-100 form-control"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </header>
      <table className="table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" aria-label="select-all-rows" />
            </th>
            <th onClick={() => handleSort("id")}>
              ID{" "}
              {sortConfig.key === "id"
                ? sortConfig.direction === "ascending"
                  ? "▲"
                  : "▼"
                : ""}
            </th>
            <th onClick={() => handleSort("name")}>
              Name{" "}
              {sortConfig.key === "name"
                ? sortConfig.direction === "ascending"
                  ? "▲"
                  : "▼"
                : ""}
            </th>
            <th onClick={() => handleSort("status")}>
              Status{" "}
              {sortConfig.key === "status"
                ? sortConfig.direction === "ascending"
                  ? "▲"
                  : "▼"
                : ""}
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td>
                <input type="checkbox" aria-label={`select-row-${item.id}`} />
              </td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.status}</td>
              <td>
                <ul className="d-flex gap-2 list-unstyled mb-0">
                  <li>
                    <button
                      className="btn btn-subtle-secondary btn-icon btn-sm edit-item-btn"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </button>
                  </li>
                  <li>
                    <button
                      className="btn btn-subtle-danger btn-icon btn-sm remove-item-btn"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination d-flex justify-content-between align-items-center mt-3">
        <div className="d-flex align-items-center">
          <span>Rows per page:</span>
          <div className="ms-2">
            <select
              aria-label="Rows per page:"
              className="form-select"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
            </select>
          </div>
        </div>
        <span className="pagination-info">
          {indexOfFirstItem + 1}-
          {Math.min(indexOfLastItem, filteredData.length)} of{" "}
          {filteredData.length}
        </span>
        <div className="pagination-buttons">
          <button
            id="pagination-first-page"
            type="button"
            aria-label="First Page"
            className="btn btn-link"
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
              role="presentation"
            >
              <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path>
              <path fill="none" d="M24 24H0V0h24v24z"></path>
            </svg>
          </button>

          <button
            id="pagination-previous-page"
            type="button"
            aria-label="Previous Page"
            className="btn btn-link"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
              role="presentation"
            >
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
              <path d="M0 0h24v24H0z" fill="none"></path>
            </svg>
          </button>

          <button
            id="pagination-next-page"
            type="button"
            aria-label="Next Page"
            className="btn btn-link"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
              role="presentation"
            >
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
              <path d="M0 0h24v24H0z" fill="none"></path>
            </svg>
          </button>

          <button
            id="pagination-last-page"
            type="button"
            aria-label="Last Page"
            className="btn btn-link"
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
              role="presentation"
            >
              <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path>
              <path fill="none" d="M0 0h24v24H0V0z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
export default DataTable;
