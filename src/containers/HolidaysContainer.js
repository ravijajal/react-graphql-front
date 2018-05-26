import React, { Component } from "react";
import "../styles/containers/HolidaysContainer.scss";
import HolidayCard from "../components/HolidayCard";
import { Query } from "react-apollo";
import { GET_HOLIDAYS } from "../queries/holiday";

class HolidaysContainer extends Component {
  render() {
    return (
      <div className="holidays-container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <HolidayCard />
          </div>
          <Query query={GET_HOLIDAYS} pollInterval={1000}>
            {({ loading, error, data }) => {
              if (loading) {
                return <div>loading...</div>;
              }
              if (error) {
                return false;
              }
              return data.holidays.map((holiday, index) => {
                return (
                  <div
                    key={holiday.id}
                    className="col-12 col-sm-6 col-md-4 col-lg-3"
                  >
                    <HolidayCard
                      mode="view"
                      id={holiday.id}
                      name={holiday.name}
                      date={holiday.date}
                    />
                  </div>
                );
              });
            }}
          </Query>
        </div>
      </div>
    );
  }
}

export default HolidaysContainer;
