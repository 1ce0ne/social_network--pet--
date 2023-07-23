import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profileReducer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

// а) Контейнерная компонента для AJAX запросов (через Thunk)
class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 29612;
    }
    this.props.getUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

// б) Контейнерная компонента для связи с url
// Самописный withRouter (С версии React Router v6 применяются Хуки)
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

// в) Контейнерная компонента для получения state и dispatch
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { getUserProfile })(
  WithUrlDataContainerComponent
);
