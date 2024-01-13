import axios from '../../utils/axios';

export const getVideo = async (id) => {
    const response = await axios.get(`/videos/${id}`);
    return response.data.data;
};

export const updateReaction = async ({id, reaction}) => {
    const {data} = await axios.get(`/videos/${id}`);

    if (data) {
        let updatedReaction =
            reaction === 'like'
                ? {
                    likes: Number(data.data.likes) + 1,
                }
                : {
                    unlikes: Number(data.data.unlikes) + 1,
                };

        const response = await axios.put(`/videos/${id}`, updatedReaction);
        return response.data;
    }
};
