import React, { Component } from 'react';

const style = {
  ul: {
    display: 'flex',
    justifyContent: 'center',
    listStyleType: 'none',
    margin: 10,
    padding: 0,
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
  },
  li: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: 'rgb(240,240,240)',
    margin: 10,
  },
  activeLi: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: 'blue',
    margin: 10,
  },
  container: {
    padding: '16px 0',
    position: 'fixed',
    top: 0,
    right: 0,
    height: '100%',
    zIndex: 99999
  }
}

class PageWithProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [],
      activeSection: '',
      offsetY: 0,
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.setState({ offsetY: window.pageYOffset });
    const sections = [];
    React.Children.map(this.props.children, (child, i) => {
      if (child.props.title) sections.push(child.props.title);
    })
    this.setState({
      sections,
      activeSection: sections.length > 0 ? sections[0] : '',
    })
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    var currentNearest = 1000;
    var activeSection;
    this.state.sections.map(section => {
      var ele = document.getElementById(section.split(" ").join("_"));
      if (!ele) return;
      var heightFromTop = ele.getBoundingClientRect().top;
      if (heightFromTop > 0 && heightFromTop < currentNearest) {
        activeSection = section;
        currentNearest = heightFromTop;
      }
    })
    
    this.setState({
      activeSection: activeSection || this.state.activeSection,
      offsetY: window.pageYOffset,
    });
  }


  render() {
    return (
      <div>
        <div style={style.container} className="d-none d-sm-block">
          <div style={style.ul}>
            {React.Children.map(this.props.children, (child, i) => {
              return child.props.title ?
                (
                  <a
                    data-toggle="tooltip"
                    title={child.props.title}
                    style={child.props.title === this.state.activeSection ? style.activeLi : style.li}
                    href={'#' + child.props.title.split(" ").join("_")}
                  >
                    <span >
                    </span>
                  </a>

                ) : null
            })}
          </div>
        </div>
        {React.Children.map(this.props.children, (child, i) => {
          var cn = "pv48";
          if (child.props.type === "bg") cn = cn + ' light-gray-bg'
          return child.props.title ?
            <div id={child.props.title.split(" ").join("_")} className={cn}>{child}</div>
            : <div className={cn}>{child}</div>;
        })}
      </div>
    )
  }
}

export default PageWithProgress


