import "../styles/components/HolidayCard.scss";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import {
  CREATE_HOLIDAY,
  UPDATE_HOLIDAY,
  DELETE_HOLIDAY
} from "../mutations/holiday";
import { GET_HOLIDAYS } from "../queries/holiday";

class HolidayCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: this.props.mode
    };
    this.editClick = this.editClick.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
    this.updateClick = this.updateClick.bind(this);
    this.cancleClick = this.cancleClick.bind(this);
  }

  editClick(e) {
    e.preventDefault();
    this.setState({
      mode: "edit"
    });
    setTimeout(() => {
      this.holidayName.focus();
    }, 0);
  }
  deleteClick() {
    alert("Deleted successfully!");
  }
  updateClick() {
    alert("Updated successfully!");
    this.setState({
      mode: "view"
    });
  }
  cancleClick() {
    this.setState({
      mode: "view"
    });
  }

  render() {
    const actions = {
      add: {
        button1: (
          <button type="submit" className="btn-corner text-primary">
            <i className="fa fa-plus" />
          </button>
        ),
        button2: null,
        disabled: false
      },
      view: {
        button1: (
          <Mutation
            key={this.props.id}
            mutation={DELETE_HOLIDAY}
            refetchQueries={[{ query: GET_HOLIDAYS }]}
          >
            {(deleteHoliday, { data }) => (
              <button
                type="button"
                className="btn-corner text-primary"
                onClick={e => {
                  e.preventDefault();
                  if (this.state.mode === "view") {
                    deleteHoliday({
                      variables: {
                        id: this.props.id
                      }
                    });
                  }
                }}
              >
                <i className="fa fa-trash" />
              </button>
            )}
          </Mutation>
        ),
        button2: (
          <button
            type="button"
            className="btn-corner text-primary  mr-2"
            onClick={this.editClick}
          >
            <i className="fa fa-pencil" />
          </button>
        ),
        disabled: true
      },
      edit: {
        button1: (
          <button
            type="button"
            className="btn-corner text-primary"
            onClick={this.cancleClick}
          >
            <i className="fa fa-times" />
          </button>
        ),
        button2: (
          <button type="submit" className="btn-corner text-primary mr-2">
            <i className="fa fa-save" />
          </button>
        ),
        disabled: false
      }
    };

    return (
      <div>
        {this.props.mode === "add" ? (
          <Mutation
            key={this.props.id}
            mutation={CREATE_HOLIDAY}
            update={(cache, { data: { createHoliday } }) => {
              const { holidays } = cache.readQuery({
                query: GET_HOLIDAYS
              });
              cache.writeQuery({
                query: GET_HOLIDAYS,
                data: {
                  holidays: holidays.concat([createHoliday])
                }
              });
            }}
          >
            {(createHoliday, { data }) => (
              <form
                onSubmit={e => {
                  e.preventDefault();
                  createHoliday({
                    variables: {
                      name: this.holidayName.value,
                      date: this.holidayDate.value
                    }
                  });
                  this.holidayName.value = "";
                  this.holidayDate.value = "";
                  setTimeout(() => {
                    this.holidayName.focus();
                  }, 0);
                }}
                ref={form => {
                  this.addHolidayForm = form;
                }}
              >
                <div className="card shadow mt-3 mb-3">
                  <div className="card-body">
                    <div className="card-action">
                      {actions[this.state.mode].button1}
                      {actions[this.state.mode].button2}
                      <div className="clearfix" />
                    </div>
                    <div className="card-content">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        ref={input => {
                          this.holidayName = input;
                        }}
                        placeholder="Holiday Name..."
                        disabled={actions[this.state.mode].disabled}
                        defaultValue={this.props.name}
                      />
                      <input
                        type="text"
                        className="form-control"
                        ref={input => {
                          this.holidayDate = input;
                        }}
                        placeholder="Pick a Date..."
                        disabled={actions[this.state.mode].disabled}
                        defaultValue={this.props.date}
                      />
                    </div>
                  </div>
                </div>
              </form>
            )}
          </Mutation>
        ) : (
          <Mutation key={this.props.id} mutation={UPDATE_HOLIDAY}>
            {updateHoliday => (
              <form
                onSubmit={e => {
                  e.preventDefault();
                  if (this.state.mode === "edit") {
                    updateHoliday({
                      variables: {
                        id: this.props.id,
                        name: this.holidayName.value,
                        date: this.holidayDate.value
                      }
                    });
                    this.setState({
                      mode: "view"
                    });
                  }
                }}
                ref={form => {
                  this.updateHolidayForm = form;
                }}
              >
                <div className="card shadow mt-3 mb-3">
                  <div className="card-body">
                    <div className="card-action">
                      {actions[this.state.mode].button1}
                      {actions[this.state.mode].button2}
                      <div className="clearfix" />
                    </div>
                    {this.state.mode === "edit" ? (
                      <div className="card-content">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          ref={input => {
                            this.holidayName = input;
                          }}
                          placeholder="Holiday Name..."
                          disabled={actions[this.state.mode].disabled}
                          defaultValue={this.props.name}
                        />
                        <input
                          type="text"
                          className="form-control"
                          ref={input => {
                            this.holidayDate = input;
                          }}
                          placeholder="Pick a Date..."
                          disabled={actions[this.state.mode].disabled}
                          defaultValue={this.props.date}
                        />
                      </div>
                    ) : (
                      <div className="card-content">
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          ref={input => {
                            this.holidayName = input;
                          }}
                          placeholder="Holiday Name..."
                          disabled={actions[this.state.mode].disabled}
                          value={this.props.name}
                        />
                        <input
                          type="text"
                          className="form-control"
                          ref={input => {
                            this.holidayDate = input;
                          }}
                          placeholder="Pick a Date..."
                          disabled={actions[this.state.mode].disabled}
                          value={this.props.date}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </form>
            )}
          </Mutation>
        )}
      </div>
    );
  }
}

HolidayCard.propTypes = {
  mode: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string
};
HolidayCard.defaultProps = {
  mode: "add",
  id: "",
  name: "",
  date: ""
};
export default HolidayCard;
