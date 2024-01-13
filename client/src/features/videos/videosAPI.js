import axios from '../../utils/axios';

export const getVideos = async ({
                                    tags,
                                    search,
                                    author,
                                    limit,
                                    currentPage,
                                }) => {
    let queryString = '';
    if (author) {
        queryString += `author=${author}`;
    }
    if (tags !== "") {
        queryString += `&tag=${tags}`;
    }

    if (search !== '') {
        queryString += `&q=${search}`;
    }

    if (limit && currentPage) {
        queryString += `&page=${currentPage}&limit=${limit}`;
    }

    const response = await axios.get(`/videos?${queryString}`);

    return {
        videos: response.data.data,
        total_count: response.data.meta.total,
        meta: response.data.meta,
    };
};
