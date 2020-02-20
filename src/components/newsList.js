import React, { Component } from "react";
import axios from "axios";
import News from './news';

class NewsList extends Component {
    constructor(props){
        super(props)

        this.state = {
            newsList: []
        };
    }

    componentDidMount() {
        let url = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=CkjREbljaU8ZdwlbFGA4VYYixjedCO6z";
        axios.get(url)
            .then(res => {
                this.setState(
                    { newsList: res.data.results }
                )
            })
            .catch((error) => {
                console.log(error);
            })
    }

    newsList() {
        return this.state.newsList.map((res, i) => {
            return <News data={res} key={i} />
        });
    }

    render(){
        return (
            <div className="news-container">
                <ul className="news-list">
                    {this.newsList()}
                </ul>
            </div>
        )
    }
}

export default NewsList