import React, { Component } from "react";
import Header from "../Widgets/Header/Header";
import Sidebar from "../Widgets/Sidebar/Sidebar";
import ImageList from "../Widgets/List/ImageList";
import { fetchVenueDetail } from "../../actions/venues";
import { connect } from "react-redux";
import Loader from "../Widgets/Loader/Loader";
class VenueDetail extends Component {
  componentDidMount() {
    this.props.fetchVenueDetail(this.props.match.params.id);
  }
  render() {
    const { venue, isLoading } = this.props;
    return <React.Fragment>
        <Header type="venueDetail" venueDetail={venue} />
        <main className="main-content">
          <section className="venue">
            { !isLoading ? <ImageList venueDetail={venue} /> : <Loader /> }
          </section>
          <div className="sidebar-wrapper">
            <Sidebar type="tips" venueDetail={venue} />
          </div>
        </main>
      </React.Fragment>;
  }
};

const mapStateToProps = state => ({
  venue: state.venueReducer.venue,
  isLoading: state.venueReducer.isLoading
})

export default connect(mapStateToProps, {fetchVenueDetail})(VenueDetail);