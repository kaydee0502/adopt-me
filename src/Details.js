import { useParams } from "react-router-dom";
import { Component } from "react";
import { withRouter } from "react-router-dom";


class Details extends Component {
    constructor() {
        super();
        this.state = {loading: true}
    }

    async componentDidMount(){
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`)
        const json = await res.json()
        console.log("loaded");

        this.setState({...json.pets[0], loading: false})
    }

    render() {
        console.log(this.state);
        if (this.state.loading){
            return <h1>loading..</h1>
        }
        const { animal, breed, city, state, description, name } = this.state;

        return (
        <div className="details">
            <div>
            <h1>{name}</h1>
            <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
            <button>Adopt {name}</button>
            <p>{description}</p>
            </div>
        </div>
        );
    }
}






// const Details = () => {
//     const { id } = useParams();
//     return <h2>{id}</h2>
// };

export default withRouter(Details);