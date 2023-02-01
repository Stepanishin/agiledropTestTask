import React, { FC } from "react";
import "./HeroPage.scss";
import FilterPanel from "../../components/FilterPanel/FilterPanel";
import MoviesList from "../../components/MoviesList/MoviesList";
import Title from "../../components/UI/Title/Title";

const HeroPage: FC = () => {
  return (
    <section>
      <Title className={"title"} title={"Popular Movies"} />
      <div className="movies_filter_container">
        <FilterPanel />
        <MoviesList />
      </div>
    </section>
  );
};

export default HeroPage;
