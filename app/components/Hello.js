
//initial constructor 
class Hello extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name: "Tyler"
        }
    }
    render() {
        return(
            <h1>Hello, {this.state.name}</h1>
        )
    }
}

//render a DOM node 

class Badge extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1>{this.props.name}</h1>
                <p>{this.props.profile}</p>
            </React.Fragment>
        )
    }
}

class Home extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        user: null
      }
    }
    componentDidMount() {
      fetchUser(this.props.username)
        .then((user) => {
          this.setState({ user })
        })
    }
    render() {
      return (
        if (user === null) {
          return <Loading />
        }
  
        return <Dashboard data={this.state.user} />
      )
    }
  }