import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization:
			"Client-ID 37c1b5f95b274fc99c33886894e628fca53d68f7a82f537a7f6ba33d0d750b0a"
	}
});
