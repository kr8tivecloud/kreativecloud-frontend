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
        <div className="flex flex-col lg:flex-row lg:items-center gap-x-20">
          <h1 className="font-bold text-4xl md:text-5xl">
            Get any template <br />
            you want with ease.
          </h1>

          <p className="lg:text-right lg:ml-auto max-w-80 mt-4 lg:mt-0">
            We have everything you need for your design project. Enjoy!
          </p>
        </div>
        {/* END TITLE SECTION */}

        {/* FILTER DETAILS */}
        <div className="mt-6 flex flex-col md:flex-row items-center gap-x-20 gap-y-5">
          <SelectedCategories />

          <FilterDetails />
        </div>
        {/* END FILTER DETAILS */}

        {/* MAIN CONTENT */}
        <div className="mt-6 flex">
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
