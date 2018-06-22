import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRepos } from './redux/actions';
import './grid.css';

class Grid extends Component {
    componentDidMount() {
        this.props.fetchRepos(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.match.params.id !== this.props.match.params.id) {
            this.props.fetchRepos(nextProps.match.params.id);
        }
    }

    render() {
        const { repos } = this.props;
        return (
            <ul className="container">
            {repos.map(({ name, owner, stargazers_count, html_url }) => (
              <li key={name}>
                <ul className="each-repo">
                  <li><a href={html_url}>{name}</a></li>
                  <li>@{owner.login}</li>
                  <li>{stargazers_count} stars</li>
                </ul>
              </li>
            ))}
          </ul>
        )
    }
}

export default connect(
    ({repos}) => ({repos}),
    dispatch => ({
        fetchRepos: lang => dispatch(fetchRepos(lang))
    })
)(Grid);
