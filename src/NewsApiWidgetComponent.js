import * as React from 'react';
import * as Scrivito from 'scrivito';

class NewsApiComponent extends React.Component {

  constructor(props) {
    super(props);

    this.widget = this.props.widget;
    this.state = {
      article: []
    }
  }

  componentDidMount() {
    const category = this.widget.get('category') || 'general';
    const entries = this.widget.get('entries') || '5';
    const key = this.widget.get('apiKey')

    fetch(`https://newsapi.org/v2/top-headlines?category=${category}&pageSize=${entries}&country=de&apiKey=${key}`) // first step
      .then(response => response.json()) // second step
      .then(data => {

        this.setState({ article: data.articles });

  })
  .catch(error => console.error(error))

  }

  componentWillUnmount() {
    this.setState = '';
  }

  render() {
    /*if (!this.state.article.length) {
      return (
        <InPlaceEditingPlaceholder center={true}>
          Add news categories in the widget properties.
        </InPlaceEditingPlaceholder>
      );
    }*/

    return (

      <div className="article">

        {this.state.article.map((articles, index) =>
          articles.url.startsWith('https') ?
            <div className="media" key={index}>
              <a style={{maxWidth:'300px'}}target="_blank" className="d-inline mr-3" href={`${articles.url}`}>
                <img className="img-responsive rectangle mr-3" src={`${articles.urlToImage}`} />
              </a>
              <div className="media-body" key={index}>
                <a target="_blank" href={`${articles.url}`}>
                  <div>{articles.source.name} </div>
                  <h1 className="h5 m-0 p-0"><b>{articles.title}</b></h1>

                  <p className="m-0 p-0 h5">{articles.description}</p>
                </a>
              </div>

            </div>

            : null

        )}


      </div>

    );
  }

}

Scrivito.provideComponent('NewsApiWidget', NewsApiComponent);


