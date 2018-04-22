import React, { Component } from "react";
import Header from "../Widgets/Header/Header";
import Sidebar from "../Widgets/Sidebar/Sidebar";
import ImageList from "../Widgets/List/ImageList";
import { fetchVenueDetail } from "../../actions/venues";
import { connect } from "react-redux";
class VenueDetail extends Component {
  componentWillMount() {
    this.props.fetchVenueDetail(this.props.match.params.id);
  }
  render() {
    const { venue } = this.props;
    return <React.Fragment>
        <Header type="venueDetail" venueDetail={venue} />
        <main className="main-content">
          <section className="venue">
            <ImageList venueDetail={venue} />
          </section>
          <div className="sidebar-wrapper">
            <Sidebar type="tips" venueDetail={venue} />
          </div>
        </main>
      </React.Fragment>;
  }
};

const mapStateToProps = state => ({
  venue: state.venue.venue
})

export default connect(mapStateToProps, {fetchVenueDetail})(VenueDetail);