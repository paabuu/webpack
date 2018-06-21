import React, { Component } from 'react';

class Grid extends Component {
    constructor(props) {
        super(props);

        let repos;

        if (__isBrowser__) {
            repos = window.__INIT_DATA__;
            delete window.__INIT_DATA__;
        } else {
            repos = props.staticContext.data
        }

        this.state = {
            repos
        }

        this.fetchRepos = this.fetchRepos.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            this.fetchRepos(nextProps.match.params.id);
        }
    }

    fetchRepos(lang) {
        this.setState({ repos: [] });
        this.props.fetchInitialData(lang)
            .then(repos => {
                this.setState({ repos })
            })
    }

    componentDidMount() {
        if (!this.state.repos) {
            this.fetchRepos();
        }
    }

    render() {
        const { repos } = this.state;

        return (
            <ul style={{display: 'flex', flexWrap: 'wrap'}}>
            {repos.map(({ name, owner, stargazers_count, html_url }) => (
              <li key={name} style={{margin: 30}}>
                <ul>
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

export default Grid;
