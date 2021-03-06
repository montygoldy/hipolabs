import React, { Component } from "react";
import Header from "../Widgets/Header/Header";
import Sidebar from "../Widgets/Sidebar/Sidebar";
import ImageList from "../Widgets/List/ImageList";
import { fetchVenueDetail } from "../../actions/venues";
import { connect } from "react-redux";
import Loader from "../Widgets/Loader/Loader";
import PropTypes from "prop-types";
class VenueDetail extends Component {
  componentWillMount() {
    this.props.fetchVenueDetail(this.props.match.params.id);
  }
  render() {
    const { venue, isLoading } = this.props;
    return (
      <React.Fragment>
        <Header type="venueDetail" venueDetail={venue} />
        <main className="main-content">
          <section className="venue">
            {!isLoading ? <ImageList venueDetail={venue} /> : <Loader />}
          </section>
          <div className="sidebar-wrapper">
            <Sidebar type="tips" venueDetail={venue} />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

VenueDetail.propTypes = {
  fetchVenueDetail: PropTypes.func.isRequired,
  venue: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  venue: state.venueReducer.venue,
  isLoading: state.venueReducer.isLoading
});

export default connect(mapStateToProps, { fetchVenueDetail })(VenueDetail);
