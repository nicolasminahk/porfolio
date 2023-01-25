import React from 'react'

export class Companies extends React.Component {
    state = {
        index: 0,
    }

    componentWillMount() {
        this.interval = setInterval(this.nextCompany.bind(this), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    nextCompany() {
        const index = this.state.index
        this.setState({
            index: index === this.props.companies.length - 1 ? 0 : this.state.index + 1,
        })
    }

    handleClick() {
        this.nextCompany()
    }

    renderCompany(company, hidden) {
        const classes = ['companies__item'].concat(hidden ? 'companies__item--hidden' : '')
        return (
            <li key={company.title} className={classes.join(' ')}>
                <img onClick={() => this.handleClick()} src={company.url} alt={company.title} />
            </li>
        )
    }

    render() {
        const company = this.props.companies[this.state.index]
        return (
            <ol className="companies">
                {this.props.companies.map((company, i) => {
                    return this.renderCompany(company, i !== this.state.index)
                })}
            </ol>
        )
    }
}
