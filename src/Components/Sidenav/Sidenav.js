import React from "react";

function Sidenav() {
  return (
    <div className="categories-container">
      <aside className="categories-filter">
        <sapn className="filter-header">Categories</sapn>
        <ul class="categories-list">
          <li>
            <label class="common-customCheckbox vertical-filters-label">
              <input type="checkbox" value="Shirts" />
              Shirts
            </label>
          </li>
          <li>
            <label class="common-customCheckbox vertical-filters-label">
              <input type="checkbox" value="Shirts" />
              T-Shirts
            </label>
          </li>
          <li>
            <label class="common-customCheckbox vertical-filters-label">
              <input type="checkbox" value="Shirts" />
              SweatShirts
            </label>
          </li>
          <li>
            <label class="common-customCheckbox vertical-filters-label">
              <input type="checkbox" value="Shirts" />
              Jacket
            </label>
          </li>
          <li>
            <label class="common-customCheckbox vertical-filters-label">
              <input type="checkbox" value="Shirts" />
              Blazers
            </label>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Sidenav;
