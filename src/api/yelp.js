import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer O3n1dkChwOWb9FNoawKYQcHcEmOCj56z8eokAdBA4utoDEM2gFnvViTYg96BNDP6Vajy0k1widTCbzy4oJSFpeZbfVQX-qAVSqzBNZwAerLwwxs-_yIqsTUqx64VYHYx'
    }
})