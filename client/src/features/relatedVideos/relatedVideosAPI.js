import axios from "../../utils/axios";

// ?tags_like=javascript&tags_like=react&id_ne=4&_limit=5
// ['tags_like=javascript', 'tags_like=react']

export const getRelatedVideos = async ({id}) => {

    const response = await axios.get(`/releted-video/${id}`);

    return response.data.data;
};
