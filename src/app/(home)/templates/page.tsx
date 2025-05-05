import React from "react";
import SelectedCategories from "./components/selected-categories";
import FilterDetails from "./components/filter-details";
import Filters from "./components/filters";
import Templates from "./components/templates";
import RecentlyViewedTemplates from "./components/recently-viewed-templates";

export default function TemplatesPage() {
  return (
    <div className="pt-28">
      <div className="px-4 sm:container">
        {/* TITLE SECTION */}
        <div className="flex items-center gap-x-20">
          <h1 className="font-bold text-5xl">
            Get any template <br />
            you want with ease.
          </h1>

          <p className="text-right ml-auto max-w-80">
            We have everything you need for your design project. Enjoy!
          </p>
        </div>
        {/* END TITLE SECTION */}

        {/* FILTER DETAILS */}
        <div className="mt-6 flex items-center gap-x-20">
          <SelectedCategories />

          <FilterDetails />
        </div>
        {/* END FILTER DETAILS */}

        {/* MAIN CONTENT */}
        <div className="mt-6 flex divide-x">
          <Filters />

          {/* TEMPLATES */}
          <Templates />
          {/* END TEMPLATES */}
        </div>
        {/* END MAIN CONTENT */}

        {/* RECENTLY VIEWED */}
        <RecentlyViewedTemplates />
        {/* END RECENTLY VIEWED */}
      </div>
    </div>
  );
}
